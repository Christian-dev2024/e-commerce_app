export type TypeProfilUser = {
    nom? : string,
    prenom? : string,
    numero? : string,
    adresse? : string,
    statut? : string,
    email? : string,
    password? : string,
    uid? : string,
}

export type TypeShop = {
    shopName? : string,
    categorie? : string,
    description? : string,
    emailShop? : string,
    numShop? : string,
    adrresse? : string,
    logo? : string,
    structure?: string,
    produitVendu? : string,
    addDateshop?: Date,
    idVendeur? : string
}

export type typeProduit = {
    _id ? : string,
    idVendeur ? : string,
    ref_produit ? : string,
    nomProduit ? : string,
    categorie ? : string,
    prix_produit ? : string,
    type_produit ? :string,
    quantite ? : number,
    description ? : string,
    imageProduit ? : string,
    statutProduit ? : string,
    isPublished ? : boolean
}