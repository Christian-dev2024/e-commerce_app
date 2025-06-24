import mongoose from "mongoose"
import { NextResponse } from "next/server"

export const eComdb = async () =>{
    try {
        await mongoose.connect(process.env.db_url!,{
            dbName : 'e-commerceDB'
        })
        return 'ok'
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({message: 'une erreur est survenu lors de la connexion'})
    }
}