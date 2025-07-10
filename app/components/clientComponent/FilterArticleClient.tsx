import React from 'react'

export const FilterbarArticle = () => {
    return (
        <div className="row g-2 mx-auto justify-content-center align-items-center">
            <div className="col-md-3">
                <input type="text" className="form-control shadow-none" placeholder="🔍 Rechercher un produit..." name="search"/>
            </div>
            <div className="col-md-2">
                <select className="form-select shadow-none" name="category">
                    <option value="">Type d'article</option>
                    <option value="electronique">Maillots</option>
                    <option value="vetements">Chaussures</option>
                    <option value="maison">Materiels</option>
                    <option value="accessoires">Accessoires</option>
                </select>
            </div>
            <div className="col-md-2">
                <input type="number" className="form-control shadow-none" name="minPrice" placeholder="Prix" min={0}/>
            </div>
            <div className="col-md-2">
                <button className="boxVue border-0 w-100" type="button">
                    rechercher
                </button>
            </div>
        </div>
    )
}
