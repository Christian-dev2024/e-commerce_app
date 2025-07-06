import React from 'react'

export const FilterbarProduit = () => {
    return (
        <div className="row g-2 mb-4 container mx-auto justify-content-center align-items-center">
            <div className="col-md-3">
                <input type="text" className="form-control shadow-none" placeholder="🔍 Rechercher un produit (nom, réf, catégorie)..." name="search"/>
            </div>
            <div className="col-md-2">
                <select className="form-select shadow-none" name="category">
                    <option value="">Type d'article</option>
                    <option value="electronique">Maillots</option>
                    <option value="vetements">Chaussures</option>
                    <option value="accessoires">Accessoires</option>
                    <option value="maison">Materiels</option>
                </select>
            </div>
            <div className="col-md-2">
                <select className="form-select shadow-none" name="status">
                    <option value="">Statut</option>
                    <option value="disponible">Disponible</option>
                    <option value="rupture">En rupture</option>
                    <option value="faible-stock">Stock faible</option>
                </select>
            </div>
            <div className="col-md-2">
                <input type="number" className="form-control shadow-none" name="minPrice" placeholder="Prix" min={0}/>
            </div>
            <div className="col-md-2">
                <button className="boxVue border-0 w-100" type="button">
                    Filtrer
                </button>
            </div>
        </div>
    )
}
