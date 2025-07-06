import { GetAuthToken } from "@/controllers/controller.auth/jose";
import { eComdb } from "@/lib/mongoDBConfig";
import { ProduitCollection } from "@/models/produit.model/produit";
import { GenerateRefProduit } from "@/utils/GenerateRef";
import { NextRequest, NextResponse } from "next/server";

// API D'AJOUT DE PRODUIT

export const POST = async (req: NextRequest) => {
    try {
        const {
                nomProduit, prix_produit, 
                categorie, type_produit, 
                statutProduit, imageProduit,
                description, quantite, isPublished
            } = await req.json()

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

            const newProduit = await new ProduitCollection({
                nomProduit, prix_produit, 
                categorie, type_produit, 
                statutProduit, imageProduit,
                description, quantite,
                idVendeur: UID_TOKEN, ref_produit: GenerateRefProduit(),
                isPublished
            })

            const produitSaved = await newProduit.save()

        return NextResponse.json({message: 'ok', dataProduit : produitSaved})

    } catch (error) {
        console.log(error)
        return NextResponse.json({message: 'une erreur est survenue verifiez votre connexion internet'})
    }

}