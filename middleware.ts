import { GetAuthToken } from "@/controllers/controller.auth/jose"
import { NextRequest, NextResponse } from "next/server"


export const middleware = async (req: NextRequest) => {

    const token = await GetAuthToken(req)

    if (token && token.message === 'ok') {
        return NextResponse.next()
    } else {
        return NextResponse.redirect(new URL('/auth/inscription', req.url))
    }

}

export const config = {
    matcher: ['/vendeur/:path*', '/clientprofil/:path*']
}