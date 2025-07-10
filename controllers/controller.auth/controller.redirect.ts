import axios from 'axios'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

export const redirect =  async(router: AppRouterInstance, setRedirect: (newDirection: boolean) => void) => {
    try {
        const req = await axios.get('/api/auth/check')
        const data = await req.data

        // redirection en fonction du statut du client
        if(data.isLogin === true && data.redirect === 'client') {
            setRedirect(true)
            router.push('/clientpage/profil')

        } else if(data.isLogin === true && data.redirect === 'vendeur') {
            setRedirect(true)
            router.push('/vendeur/dashboard')

        } else {
            setRedirect(false)
            router.push('/auth/connexion')
        }

    } catch (error) {
        console.log(error)
        router.push('/auth/connexion')
    }
}