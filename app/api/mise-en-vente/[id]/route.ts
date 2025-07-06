import { GetAuthToken } from "@/controllers/controller.auth/jose";
import { eComdb } from "@/lib/mongoDBConfig";
import { ProduitCollection } from "@/models/produit.model/produit";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (req: NextRequest, { params }: { params : {id : string} }) => {
    try {
        const {id} = await params

        console.log(id, 'id reçu')

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
        // on recupere le produit via l'id
        const ProduitById = await ProduitCollection.findById(id)

            if(!ProduitById){
                return NextResponse.json({message: 'produit introuvable'})
            }

            // on verifie si l'id du vendeur correspont à l'idVendeur
            if(ProduitById.idVendeur !== UID_TOKEN){
                return NextResponse.json({message: 'accès non autorisé'})
            }

            if(ProduitById.ProduitById === true){
                return NextResponse.json({message: 'produit déjà en vente'})
            }
        
        //on met à jour la propriété de publication
        const data = await ProduitCollection.findByIdAndUpdate(id, 
            {isPublished: true},
            {new: true}
        )

        return NextResponse.json({message: 'ok', published: data})

    } catch (error) {
        console.log(error, 'erreur de mise en vente du produit')
        return NextResponse.json({message: 'une erreur est survenue '})
    }

}