import axios from 'axios'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

export const redirect =  async(router: AppRouterInstance, setRedirect: (newDirection: boolean) => void) => {
    try {
        const req = await axios.get('/api/auth/check')
        const data = await req.data.isLogin
        console.log(data)

        // redirection en fonction des donn
        if(data) {
            setRedirect(true)
            router.push('/clientpage')
        } else {
            setRedirect(false)
            router.push('/auth/connexion')
        }

    } catch (error) {
        console.log(error)
    }
}