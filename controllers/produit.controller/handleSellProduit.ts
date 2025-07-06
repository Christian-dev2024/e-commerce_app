import React, { Dispatch } from 'react'
import { errorToast } from '../toast/errorToast'
import axios from 'axios'
import { sucsesToast } from '../toast/succesToast'
import { typeProduit } from '@/types'

export const handleSellProduit = async(_id : string, setIsLoad: Dispatch<React.SetStateAction<boolean>>, 
    setProduitGet: (newProduitGet: typeProduit[]) => void, ProduitStore:typeProduit[] ) => {
    try {
        setIsLoad(true)

        console.log('id produit', _id )
        const req = await axios.put(`/api/mise-en-vente/${_id}`)

        if(req.data.message === 'ok') {

            const published = req.data.published

            console.log(published, 'prouduit en vente')

            if(!published) {
                return errorToast('Produit introuvable')
            }

            const updatedStore = ProduitStore.map(items =>
                items._id === published._id ? published : items
            );

            console.log(updatedStore, 'produit update')

            setProduitGet(updatedStore)
            
            return sucsesToast('Produit mis en vente')
        } else {
            return errorToast(req.data.message)
        }

    } catch (error) {
        console.log(error)
        return errorToast('une erreur est survenue lors de la publication du produit')
    }finally{
        setIsLoad(false)
    }

}
