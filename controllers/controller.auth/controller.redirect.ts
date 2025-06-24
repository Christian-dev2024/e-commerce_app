import axios from 'axios'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

export const redirect =  async(router: AppRouterInstance, setRedirect: (newDirection: boolean) => void) => {
    try {
        const req = await axios.get('/api/auth/check')
        const data = await req.data.isLogin

        if(data) {
            setRedirect(true)
            router.push('/pages/profil')
        } else {
            setRedirect(false)
            router.push('/pages/auth/connexion')
        }

    } catch (error) {
        console.log(error)
    }
}