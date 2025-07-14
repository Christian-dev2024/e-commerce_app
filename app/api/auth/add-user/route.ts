import { eComdb } from '@/lib/mongoDBConfig'
import { ProfilUserCollection } from '@/models/auth.model/profil'
import { NextResponse } from 'next/server'


export const POST = async(req : Request) => {
    try {
        const {nom, prenom, numero, adresse, uid, statut} = await req.json()

        const db = await eComdb()

        if(db !== 'ok'){
            return NextResponse.json({message: 'une est survenue veuillez verifier votre connexion internet'})
        }

        const already = await ProfilUserCollection.findOne({uid})

        if(already){
            return NextResponse.json({message: 'le profil existe déjà'})
        } else{
            const profildata = new ProfilUserCollection({nom, prenom, numero, adresse, statut, uid })
            await profildata.save()
        }

        console.log(statut, 'statut du client')

        return NextResponse.json({message : 'succes', statutUser : statut })

    } catch (error) {
        console.log(error)
        return NextResponse.json({message : 'une erreur est survenue veillez verifier votre connexion internet'})
    }

}
