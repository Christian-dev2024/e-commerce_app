import { eComdb } from "@/lib/mongoDBConfig";
import { ProduitCollection } from "@/models/produit.model/produit";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    try {
        const db = await eComdb()
        if(db !== 'ok'){
            return NextResponse.json({message: 'une est survenue veuillez verifier votre connexion internet'})
        }

        const produit = await ProduitCollection.find({isPublished: true})

        if(!produit){
            return NextResponse.json({message: 'aucun produit articles disponible'})
        }

        return NextResponse.json({message: 'ok', produitClient: produit})
    } catch (error) {
        console.log(error)
        return NextResponse.json({message: 'une erreur est survenue'})
    }
}