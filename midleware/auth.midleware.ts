import { GetAuthToken } from "@/controllers/controller.auth/jose"
import { NextResponse } from "next/server"


export const midleware = async(req : Request) => {
    
    const token = await GetAuthToken()

    if(token && token.message === 'ok') {
        return NextResponse.next()
    } else {
        return NextResponse.redirect(new URL('/', req.url))
    }

}

export const config = {
    matcher : ['/', '/pages/profil/:path*']
}