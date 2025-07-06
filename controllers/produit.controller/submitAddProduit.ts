import React, { Dispatch, FormEvent, RefObject } from 'react'
import { errorToast } from '../toast/errorToast'
import { typeProduit } from '@/types'
import { sendImage } from '../shop.controller/updateImg'
import axios from 'axios'
import { sucsesToast } from '../toast/succesToast'

export const submitAddProduit = async (e: FormEvent<HTMLFormElement>, formData: typeProduit , file: File | null, 
    setFormData: Dispatch<React.SetStateAction<typeProduit>>, setIsLoad: Dispatch<React.SetStateAction<boolean>>, 
    setImage: Dispatch<React.SetStateAction<string>>, fileRef: RefObject<HTMLInputElement | null>, 
    setProduitGet: (newProduitGet: typeProduit[]) => void, produitGet: typeProduit[]  ) => {

    e.preventDefault()

    try {
        setIsLoad(true)

        const imageProduit = await sendImage(file)
        
        if(!imageProduit){
            errorToast('veuillez ajouter une image')
        } else{

            const dataProduit = {...formData, imageProduit }

            const req = await axios.post('/api/add-produit', dataProduit)

            if(req && req.data.message === 'ok'){

                const NewProduit = req.data.dataProduit
                setProduitGet([...produitGet, NewProduit ])
                sucsesToast('le produit a été ajouter')
                document.getElementById('btnCloseModal')?.click()

            } else{
                errorToast(req.data.message)
            }
        }

    } catch (error) {

        console.log(error)
        return errorToast('une erreur est survenue')
        
    } finally {
        setIsLoad(false)
        setFormData(
                {
                    nomProduit: '', description: '', 
                    quantite: 0, prix_produit: '', categorie: '', 
                    type_produit: '', statutProduit: ''
                }
            )
        setImage('')

        if(fileRef.current) fileRef.current.value = ''
    }
}
