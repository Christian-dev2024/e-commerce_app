import React, { Dispatch, FormEvent } from 'react'
import { errorToast } from '../toast/errorToast'
import { TypeShop } from '@/types'
import { sendImage } from './updateImg'
import axios from 'axios'
import { sucsesToast } from '../toast/succesToast'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

export const submitCreateShop = async (e: FormEvent<HTMLFormElement>,formData: TypeShop, file: File | null , 
        setFormData: Dispatch<React.SetStateAction<TypeShop>>, setIsload: Dispatch<React.SetStateAction<boolean>>,
        router: AppRouterInstance, setDataShop: (newData: TypeShop) => void) => {

    e.preventDefault()
    try {
        setIsload(true)

        const logoUrl = await sendImage(file)
        console.log('url du logo', logoUrl)

        if(!logoUrl){
            errorToast('veuillez ajouter une image')
        } else{
            const dataShop = {...formData, logo: logoUrl }

            console.log(dataShop, 'info de la boutique')

            const req = await axios.post('/api/create-shop', dataShop)

            if(req && req.data.message === 'ok'){

                sucsesToast('votre boutique a été créé')
                setDataShop(req.data.shop)
                router.push('/vendeur/dashboard')

            } else{
                errorToast(req.data.message)
            }
        }
        
    } catch (error) {
        console.log(error)
        return errorToast('une erreru est survenue')
    }finally{
        setIsload(false)
        setFormData({shopName: '',  description: '', categorie: '', structure: '',
        emailShop: '', numShop: '', adrresse: ''})
    }
}
