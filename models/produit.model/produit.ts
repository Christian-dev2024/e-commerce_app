import { typeProduit } from "@/types";
import { model, models, Schema } from "mongoose";

export const ProduitSchema: Schema = new Schema<typeProduit>({
    idVendeur: {type: String, required: true},
    ref_produit : {type: String, required: true},
    nomProduit: {type: String, required: true},
    prix_produit: {type: String, required: true},
    categorie: {type: String, required: true},
    type_produit: {type: String, required: true},
    quantite: {type: String, required: true},
    description: {type: String, required: true},
    statutProduit: {type: String, required: true},
    isPublished : {type: Boolean, required: true, default: false},
    imageProduit: {type: String, required: true}
})

export const ProduitCollection = models.Produit || model('Produit', ProduitSchema)