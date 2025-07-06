import React from 'react'

export const Commande = () => {
    return (
        <div className="container">
            <h4 className="mb-3 bgTable">Commandes récentes</h4>

            {/* ✅ wrapper spécifique à la table */}
            <div className='table-responsive container'>
            <table className="table table-striped table-bordered table-hover align-middle container shadow">
            <thead className="bgTable">
                <tr>
                    <th>ID</th>
                    <th>Client</th>
                    <th>Date</th>
                    <th>Produits</th>
                    <th>Total</th>
                    <th>Statut</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>CMD001</td>
                    <td>Jean Dupont</td>
                    <td>2025-06-26</td>
                    <td>3 article(s)</td>
                    <td>59,90 €</td>
                    <td><span className="badge bg-success">Livrée</span></td>
                    <td>
                        <button className="btn btn-sm btn-outline-primary">Voir</button>
                    </td>
                </tr>
                <tr>
                    <td>CMD002</td>
                    <td>Sarah Martin</td>
                    <td>2025-06-25</td>
                    <td>1 article(s)</td>
                    <td>19,99 €</td>
                    <td><span className="badge bg-warning text-dark">En attente</span></td>
                    <td>
                        <button className="btn btn-sm btn-outline-primary">Voir</button>
                    </td>
                </tr>
                <tr>
                    <td>CMD003</td>
                    <td>Ali Benyahia</td>
                    <td>2025-06-24</td>
                    <td>2 article(s)</td>
                    <td>42,50 €</td>
                    <td><span className="badge bg-info text-dark">Expédiée</span></td>
                    <td>
                        <button className="btn btn-sm btn-outline-primary">Voir</button>
                    </td>
                </tr>
                <tr>
                    <td>CMD004</td>
                    <td>Lucie Moreau</td>
                    <td>2025-06-23</td>
                    <td>5 article(s)</td>
                    <td>120,00 €</td>
                    <td><span className="badge bg-danger">Annulée</span></td>
                    <td>
                        <button className="btn btn-sm btn-outline-primary">Voir</button>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
        </div>
    )
}
