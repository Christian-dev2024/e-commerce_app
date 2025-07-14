import { typeProduit } from '@/types'
import axios from 'axios'

export const GetProduitServer = async(ProduitStore: typeProduit[], setProduitGet: (newProduitGet: typeProduit[]) => void) => {
    const table_produit_store = ProduitStore.length

    if(table_produit_store === 0){
        try {
            const req = await axios.get('/api/get-produit-forStore')

            if(req.data.message === 'ok') {

                const allProduit = req.data.allProduit

                console.log(allProduit, 'tous les produits du store')

                setProduitGet([...ProduitStore, ...allProduit])
            }

        } catch (error) {
            console.log(error)
        }
    }
}
