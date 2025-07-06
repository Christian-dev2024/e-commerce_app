import React from 'react'

export const FilterBare = () => {
    return (
        <div className="row g-2 mb-4 container mx-auto">
                <div className="col-md-3">
                    <input type="text" className="form-control shadow-none" placeholder="🔍 Rechercher une commande..." />
                </div>
                <div className="col-md-2">
                    <select className="form-select shadow-none">
                    <option>Statut</option>
                    <option>En attente</option>
                    <option>Expédiée</option>
                    <option>Livrée</option>
                    <option>Annulée</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <select className="form-select shadow-none">
                    <option>Mode de paiement</option>
                    <option>À la livraison</option>
                    <option>En ligne</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <input type="date" className="form-control shadow-none" />
                </div>
                <div className="col-md-2">
                    <button className="boxVue border-0 w-100">Filtrer</button>
                </div>
                </div>

    )
}
