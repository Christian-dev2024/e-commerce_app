import { GetAuthToken } from "@/controllers/controller.auth/jose";
import { eComdb } from "@/lib/mongoDBConfig";
import { ProduitCollection } from "@/models/produit.model/produit";
import { typeProduit } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export const GET = async(req: NextRequest) => {
    try {
            const db = await eComdb()
            if(db !== 'ok'){
                return NextResponse.json({message: 'une est survenue veuillez verifier votre connexion internet'})
            }
        
            const USER_VENDEUR_TOKEN = await GetAuthToken(req)
                
                // on verifie si le token est valide
                if(!USER_VENDEUR_TOKEN){
                    return NextResponse.json({message: 'utilisateur non authentifié' })
                }
                
                // on recupere le statut de l'utilisateur
                const STATUT_TOKEN = await USER_VENDEUR_TOKEN.data.statut
                
                // on verifie si il est valide 
                if (STATUT_TOKEN !== 'vendeur'){
                    return NextResponse.json({message: 'statut non admissible' })
                }
                
                // on recupere l'uid de venedeur
                const UID_TOKEN = await USER_VENDEUR_TOKEN.data.uid
                        
                //on verifie si l'uid existe 
                if(!UID_TOKEN){
                    return NextResponse.json({message: 'utilisateur non authentifié uid manquant' })
                }

                const allProduit: typeProduit[] = await ProduitCollection.find({idVendeur: UID_TOKEN})
                

                if(!allProduit) {
                    return NextResponse.json({message: 'aucun produit en stock'})
                }

                return NextResponse.json({
                    message: allProduit.length > 0 ? 'ok' : 'aucun produit en stock',
                    allProduit: allProduit
                });

    } catch (error) {
        console.log(error)
        return NextResponse.json({message: 'une erreur est survenue vefifiez votre connexopn internet'})
    }
}