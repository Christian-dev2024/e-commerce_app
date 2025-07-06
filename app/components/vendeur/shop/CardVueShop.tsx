'use client';

export const ShopStatsCard = () => {
    return (
        <div className="container my-4">
        <div className="card shadow-sm p-4">
            <h5 className="mb-4 bgTable">Statistiques de la boutique</h5>

            <div className="row text-center g-4">
            {/* Nombre total de produits */}
            <div className="col-md-3 col-6">
                <div>
                <h4 className="mb-0">38</h4>
                <small className="text-muted">Produits en stock</small>
                </div>
            </div>

            {/* Commandes du mois */}
            <div className="col-md-3 col-6">
                <div>
                <h4 className="mb-0">124</h4>
                <small className="text-muted">Commandes Total</small>
                </div>
            </div>

            {/* Revenus estimés */}
            <div className="col-md-3 col-6">
                <div>
                <h4 className="mb-0">3 250 €</h4>
                <small className="text-muted">Revenus estimés</small>
                </div>
            </div>

            {/* Avis clients */}
            <div className="col-md-3 col-6">
                <div>
                <h4 className="mb-0">42</h4>
                <small className="text-muted">Avis clients</small>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};
