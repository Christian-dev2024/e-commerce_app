import { CompactEncrypt, compactDecrypt } from 'jose';

import { cookies } from 'next/headers';
import {  TypeProfilUser } from '@/types';
import {  NextRequest, NextResponse } from 'next/server';

//Une clé pour la sécurité
const rawSecret = process.env.JWT_SECRET!;
const secretKey = new TextEncoder().encode(rawSecret.padEnd(32).slice(0, 32));

//On genère le token pour 30 jours
export const GenerateToken = async (payload: TypeProfilUser) => {

    try {

        //On génère d'abord le token avec jose
        const encoder = new TextEncoder();
        const data = encoder.encode(JSON.stringify(payload));

        // Avec une clé symétrique (A256GCMKW)
        const token = await new CompactEncrypt(data)
        .setProtectedHeader({ alg: 'dir', enc: 'A256GCM' })
        .encrypt(secretKey);

        //On enregistre dans les cookies
        (await cookies()).set({
            name: 'token',
            value: token ?? '',
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 30, // 30 jours
            path: '/',
        });

    return "ok";

    } catch (error) {
        console.log(error)
        return 'erreur'
    }

};

// Récupérer le token
export const GetAuthToken = async (req: NextRequest) => {

    const token = req.cookies.get('token')?.value || "token-vide";
    if(!token || token === 'token-vide'){
        return null
    }

    try {
        // Avec une clé symétrique
        const { plaintext: decryptedPayloadSym } = await compactDecrypt(token, secretKey);
        const data = JSON.parse(new TextDecoder().decode(decryptedPayloadSym))

        if (!data) {
            return null
        }
        return { message: "ok", data }
    } catch (error) {
        console.log(error, 'une erreur est survenue lors de la recupération du token')
        return null
    }
    
};

// Déconnexion
export const LogoutUser = async (req: Request) => {
    (await cookies()).delete('token');
    return NextResponse.redirect(new URL('/', req.url));
};
