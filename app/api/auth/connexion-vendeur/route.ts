import { GenerateToken } from "@/controllers/controller.auth/jose"
import { eComdb } from "@/lib/mongoDBConfig"
import { ProfilUserCollection } from "@/models/auth.model/profil"
import { NextResponse } from "next/server"

export const POST = async(req: Request) => {
    try {

        const {uid} = await req.json()

        const db = await eComdb()
        
        if(db !== 'ok'){
            return NextResponse.json({message: 'une est survenue veuillez verifier votre connexion internet'})
        }

        const user = await ProfilUserCollection.findOne({uid: uid})
        if(!user) {
            return NextResponse.json({message : 'utilisateur non authentifié'})
        }

        const stUser = await ProfilUserCollection.findOne({statut: 'vendeur'})
        if(!stUser){
            return NextResponse.json({message : 'utilisateur non authentifié'})
        }

        const { nom, prenom, numero, adresse, statut} = await ProfilUserCollection.findOne({uid: uid})

        const res = await GenerateToken({nom, prenom, numero, adresse, statut, uid: uid})

        if(res ==='ok') {
            return NextResponse.json({message: 'ok'})
        } else {
            return NextResponse.json({message: 'erreur'})
        }
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({message: 'une erreur est survenue'})
    }
}