import { Dispatch, SetStateAction } from 'react'
import { errorToast } from '../toast/errorToast'
import { ProfilUser } from '@/zustand/proflistore'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import axios from 'axios'
import { sucsesToast } from '../toast/succesToast'


export const verifiedEmail = async( router: AppRouterInstance, profilData: ProfilUser | null, 
    setIsload: Dispatch<SetStateAction<boolean>>) => {
    try {

        console.log('donné du profil',profilData)

        if (!profilData) {
            router.push('/pages/auth/inscription')
            return errorToast('Les données du profil sont manquantes');
        }

        const { nom, prenom, numero, adresse, statut, uid } = profilData;

        const req = await axios.post('/api/auth/add-user',{ nom, prenom, numero, adresse, statut, uid })

        if(req && req.data.message === 'succes'){
            setIsload(false)
            router.push('/pages/auth/connexion')
            return sucsesToast('vous pouvez vous connectez')

        } else if (req.data.message === 'le profil existe déjà') {
            setIsload(false)
            router.push('/pages/auth/connexion')
            return sucsesToast('vous pouvez vous connectez')
            
        } else {
            router.push('/pages/auth/inscription')
            return errorToast('imposible de vous connecter veuillez ressayer plus tard')
        }

    } catch (error) {
        console.log(error)
        return errorToast('une erreur est survenue')
    } 
}
