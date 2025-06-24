import { TypeShop } from "@/types";
import { model, models, Schema } from "mongoose";

export const ShopSchema : Schema = new Schema<TypeShop>({
    shopName : {type: String, required: true},
    emailShop : {type: String, required: true},
    numShop : {type: String, required: true},
    description : {type: String, required: true},
    categorie : {type: String, required: true},
    adrresse : {type: String, required: true},
    idVendeur: {type: String, required: true},
    addDateshop : {type: String, default: Date.now()}
})

export const ShopCollection = models.Shop || model('Shop', ShopSchema)