import { Dispatch, SetStateAction } from 'react'
import { errorToast } from '../toast/errorToast'
import { ProfilUser } from '@/zustand/proflistore'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import axios from 'axios'
import { sucsesToast } from '../toast/succesToast'


export const verifiedEmail = async( router: AppRouterInstance, profilData: ProfilUser | null, 
    setIsload: Dispatch<SetStateAction<boolean>>) => {
    try {

        if (!profilData) {
            router.push('/auth/inscription')
            return errorToast('Les données du profil sont manquantes');
        }

        const { nom, prenom, numero, adresse, statut, uid } = profilData;

        const req = await axios.post('/api/auth/add-user',{ nom, prenom, numero, adresse, statut, uid })

        console.log(req.data, 'donné du user authentifié')

        if(req && req.data.message === 'succes' && req.data.statutUser === 'client'){
            sucsesToast('vous pouvez vous connectez')
            return router.push('/auth/connexion')

        } else if (req && req.data.message === 'succes' && req.data.statutUser === 'vendeur') {
            sucsesToast('vous pouvez vous connectez')
            return router.push('/auth/connexion-vendeur')
            
        } else {
            setIsload(false)
            router.push('/auth/inscription')
            return errorToast('imposible de vous connecter veuillez ressayer plus tard')
        }

    } catch (error) {
        console.log(error)
        return errorToast('une erreur est survenue')
    } finally {
        setIsload(false)
    }
}
