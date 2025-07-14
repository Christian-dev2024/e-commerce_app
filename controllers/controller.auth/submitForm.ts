import { auth } from '@/lib/firebaseComfig'
import { TypeProfilUser } from '@/types'
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'
import { Dispatch, FormEvent } from 'react'
import { errorToast } from '../toast/errorToast'
import { ProfilUser } from '@/zustand/proflistore'
import { sucsesToast } from '../toast/succesToast'


export const submitForm = async(e : FormEvent<HTMLFormElement>, formdata: TypeProfilUser, 
    setIsLoad: Dispatch<React.SetStateAction<boolean>>, setFormdata: Dispatch<React.SetStateAction<TypeProfilUser>>,
    setDataProfil: (newProfil: ProfilUser) => void) => {

    e.preventDefault()

    try {
        setIsLoad(true)

        console.log('donnée du formulaire', formdata)

        const {nom, prenom, numero, adresse, email, password} = formdata

        if( nom && prenom && numero && email && password && adresse ){
            
            const data = await createUserWithEmailAndPassword(auth, email as string, password as string)
            const user = data.user

            
            // envoi des données de l'utilisation dans le store
            const dataProfil : ProfilUser = {
                    nom: nom,
                    prenom: prenom,
                    numero: numero,
                    adresse: adresse,
                    statut: 'client',
                    uid: user.uid
                }

                console.log(dataProfil)
                setDataProfil(dataProfil)

            if(user) {

                //email de verification
                await sendEmailVerification(user, {
                    url: 'https://e-commerce-app-phi-sooty.vercel.app/auth/verified',
                    handleCodeInApp: true
                })

                return sucsesToast('Un e-mail de confirmation vous a été envoyé.Cliquez sur le lien pour activer votre compte')
            }
        }

    } catch (error) {
        console.log(error)
        return errorToast('une erreur est survenu')

    } finally {
        setIsLoad(false)
        setFormdata({
                nom : '', prenom : '', numero: '', email: '', password: '', adresse : ''
            })
    }
}
