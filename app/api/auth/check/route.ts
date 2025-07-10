import { GetAuthToken } from "@/controllers/controller.auth/jose"
import { eComdb } from "@/lib/mongoDBConfig"
import { ProfilUserCollection } from "@/models/auth.model/profil"
import { redirect } from "next/dist/server/api-utils"
import { NextRequest, NextResponse } from "next/server"

export const GET = async(req : NextRequest) => {
    try {

        const db = await eComdb()
        
        if(db !== 'ok'){
            return NextResponse.json({isLogin : false})
        }

        //on recupère le token et on verifie si il est valide sinon on bloc l'accès 
        const isLogin = await GetAuthToken(req)
        console.log('le token avec uid', isLogin)
        if(!isLogin?.data ){
            return NextResponse.json({isLogin : false})
        } 

        // si le token est valide on verifie si les info de l'utilisateur sont présent dans la base de donnée
        const user = await ProfilUserCollection.findOne({numero: isLogin?.data.numero })
        if(!user.numero) {
            return NextResponse.json({isLogin : false})
        }

        // on verifie son statut pour le rediriger sur son compte
        const stUser = await ProfilUserCollection.findOne({statut: isLogin?.data.statut})
        if(!stUser.statut){
            return NextResponse.json({isLogin : false})
        }

        return NextResponse.json({isLogin : true, redirect: stUser.statut})

    } catch (error) {
        console.log(error)
        return NextResponse.json({isLogin : false})
    }
}