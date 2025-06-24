import { GetAuthToken } from "@/controllers/controller.auth/jose"
import { eComdb } from "@/lib/mongoDBConfig"
import { ProfilUserCollection } from "@/models/auth.model/profil"
import { NextResponse } from "next/server"

export const GET = async() => {
    try {

        const db = await eComdb()
        
        if(db !== 'ok'){
            return NextResponse.json({isLogin : false})
        }

        const isLogin = await GetAuthToken()
        if(!isLogin ){
            return NextResponse.json({isLogin : false})
        } 

        const user = await ProfilUserCollection.findOne({numero: isLogin?.data.numero })
        if(!user) {
            return NextResponse.json({isLogin : false})
        }

        const stUser = await ProfilUserCollection.findOne({statut: isLogin?.data.statut})
        if(stUser !== 'client'){
            return NextResponse.json({isLogin : false})
        }

        return NextResponse.json({isLogin : true})

    } catch (error) {
        console.log(error)
        return NextResponse.json({isLogin : false})
    }
}