import { GetAuthToken } from "@/controllers/controller.auth/jose"
import { eComdb } from "@/lib/mongoDBConfig"
import { ShopCollection } from "@/models/shop.model/shop"
import { NextRequest, NextResponse } from "next/server"

//API DE CREATION DE BOUTIQUE

export const POST = async (req: NextRequest) => {
    try {
        const {shopName,  description, structure, emailShop, numShop, adrresse, logo} = await req.json()

        const db = await eComdb()
        
        if(db !== 'ok'){
            return NextResponse.json({message: 'une est survenue veuillez verifier votre connexion internet'})
        }
        // recuperation de l'uid du vendeur dans le token
        const USER_VENDEUR_TOKEN = await GetAuthToken(req)

        console.log('Token vendeur', USER_VENDEUR_TOKEN)

        // on verifie si le token est valide
        if(!USER_VENDEUR_TOKEN){
            return NextResponse.json({message: 'utilisateur non authentifié' })
        }

        // on recupere le statut de l'utilisateur
        const STATUT_TOKEN = await USER_VENDEUR_TOKEN.data.statut

        console.log('statut', STATUT_TOKEN)

        // on verifie si il est valide 
        if (STATUT_TOKEN !== 'vendeur'){
            return NextResponse.json({message: 'statut non admissible' })
        }

        // on recupere l'uid de venedeur
        const UID_TOKEN = await USER_VENDEUR_TOKEN.data.uid

        console.log(UID_TOKEN, 'uid du vendeur')
        
        //on verifie si l'uid existe 
        if(!UID_TOKEN){
            return NextResponse.json({message: 'utilisateur non authentifié uid manquant' })
        }

        const new_shop = new ShopCollection({
            shopName,  
            description, 
            structure, 
            emailShop, 
            numShop, 
            adrresse, 
            logo, 
            idVendeur: UID_TOKEN
        })
        
        const data_shop = await new_shop.save()

        return NextResponse.json({message: 'ok', shop : data_shop})


    } catch (error) {
        console.log(error, 'erreur de creation de boutique')
        return NextResponse.json({message: 'une erreur est survenue veuillez verifier votre connexion internet'})
    }
}