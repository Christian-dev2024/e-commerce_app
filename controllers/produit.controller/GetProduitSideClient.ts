import { typeProduit } from '@/types'
import { errorToast } from '../toast/errorToast'
import axios from 'axios'


export const GetProduitSideClient = async(produitData: typeProduit[], SetproduitData: (newData: typeProduit[]) => void, ) => {
    try {
        const req = await axios.get('/api/get-produit-client')

        if(req.data && req.data.message === 'ok' ){

            const newProduit = req.data.produitClient
            console.log(newProduit, 'tableau de produit récent')
            console
            SetproduitData([...produitData, ...newProduit])
        }
    } catch (error) {
        console.log(error)
        return errorToast('erreur de connexion veuillez verifiez votre internet')
    }
}
