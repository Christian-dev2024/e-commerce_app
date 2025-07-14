import React, { Dispatch, FormEvent } from 'react'
import { errorToast } from '../toast/errorToast'
import { TypeProfilUser } from '@/types'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '@/lib/firebaseComfig'
import { useRouter } from 'next/navigation'
import axios from 'axios'

export const submitformconnexion = async(
    e: FormEvent<HTMLFormElement>, formdata: TypeProfilUser, 
    setIsLoad:Dispatch<React.SetStateAction<boolean>>, setFormdata: Dispatch<React.SetStateAction<TypeProfilUser>>,
    router: ReturnType<typeof useRouter>) => {

    e.preventDefault()

    try {
        setIsLoad(true)

        const {email, password} = formdata

        await signOut(auth)

        const data = await signInWithEmailAndPassword(auth, email!, password!)

        const user = data.user

        console.log(user, 'état du user à la connexion')

        if(!user?.emailVerified){
            return errorToast('Veuillez vérifier votre email avant de vous connecter.')
        }

        if(data.user){
            const uid = data.user.uid
            const req = await axios.post('/api/auth/connexion', {uid})

            if(req && req.data.message !== 'ok'){
                errorToast(req.data.message)
                return router.push('/auth/connexion')
            } else {
                return router.push('/clientpage/profil')
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
