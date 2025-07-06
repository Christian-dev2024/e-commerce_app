import React, { Dispatch, FormEvent } from 'react'
import { errorToast } from '../toast/errorToast'
import { TypeProfilUser } from '@/types'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/lib/firebaseComfig'
import { useRouter } from 'next/navigation'
import axios from 'axios'

export const formConnexionVendeur = async(
    e: FormEvent<HTMLFormElement>, formdata: TypeProfilUser, 
    setIsLoad:Dispatch<React.SetStateAction<boolean>>, setFormdata: Dispatch<React.SetStateAction<TypeProfilUser>>,
    router: ReturnType<typeof useRouter>) => {

    e.preventDefault()

    try {
        setIsLoad(true)

        const {email, password} = formdata

        const data = await signInWithEmailAndPassword(auth, email!, password!)

        if(data.user){
            const uid = data.user.uid
            const req = await axios.post('/api/auth/connexion-vendeur', {uid})

            if(req && req.data.message !== 'ok'){
                return errorToast(req.data.message)
            } else {
                return router.push('/vendeur/infoshop')
            }
        }
        
    } catch (error : any) {
        console.log(error, 'une erreur de connexion')
        if (error.code === 'auth/user-not-found') {
            errorToast("Email ou mot de passe incorrect");

        } else if (error.code === 'auth/too-many-requests') {
            errorToast("Trop de tentatives. Réessayez plus tard.");

        } else{
            errorToast("Email ou mot de passe incorrect");
        }
    }finally{
        setIsLoad(false)
        setFormdata({
            email: '', password: ''
        })
    }
}
