import { TypeProfilUser } from "@/types";
import { model, models, Schema } from "mongoose";

const profilSchema : Schema = new Schema<TypeProfilUser>({
    nom : {type: String, required: true },
    prenom : {type: String, required : true},
    numero : {type: String, required : true},
    adresse : {type: String, required: true},
    statut : {type: String, required: true},
    uid : {type: String, required: true},
})

export const ProfilUserCollection = models.ProfilUser || model('ProfilUser', profilSchema )