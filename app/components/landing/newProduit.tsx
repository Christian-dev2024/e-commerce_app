'use client';

import React from 'react';
import { FiEye, FiShoppingCart } from 'react-icons/fi';

    export const Article = () => {
    return (
        <div className="container my-5">
        <h4 className="mb-5 text-center fs-3 fw-bold"> Produits récents</h4>
        <div className="row g-4">

            {/* Carte 1 */}
            <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm">
                <img src="/images/prod1.jpg" alt="Chaussures running" className="card-img-top" style={{ height: '180px', objectFit: 'cover' }} />
                <div className="card-body text-center">
                <h6 className="card-title mb-1">Chaussures running</h6>
                <p className="fs-4">45 €</p>
                <div className="d-flex justify-content-center gap-2 mt-3">
                    <button className="btn btn-outline-primary btn-sm">
                    <FiShoppingCart className="me-1" /> Ajouter
                    </button>
                    <button className="btn btn-outline-secondary btn-sm">
                    <FiEye className="me-1" /> Voir
                    </button>
                </div>
                </div>
            </div>
            </div>

            {/* Carte 2 */}
            <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm">
                <img src="/images/prod2.jpg" alt="Sac à dos sport" className="card-img-top" style={{ height: '180px', objectFit: 'cover' }} />
                <div className="card-body text-center">
                <h6 className="card-title mb-1">Sac à dos sport</h6>
                <p className="fs-4">30 €</p>
                <div className="d-flex justify-content-center gap-2 mt-3">
                    <button className="btn btn-outline-primary btn-sm">
                    <FiShoppingCart className="me-1" /> Ajouter
                    </button>
                    <button className="btn btn-outline-secondary btn-sm">
                    <FiEye className="me-1" /> Voir
                    </button>
                </div>
                </div>
            </div>
            </div>

            {/* Carte 3 */}
            <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm">
                <img src="/images/prod3.jpg" alt="T-shirt training" className="card-img-top" style={{ height: '180px', objectFit: 'cover' }} />
                <div className="card-body text-center">
                <h6 className="card-title mb-1">T-shirt training</h6>
                <p className="fs-4">20 €</p>
                <div className="d-flex justify-content-center gap-2 mt-3">
                    <button className="btn btn-outline-primary btn-sm">
                    <FiShoppingCart className="me-1" /> Ajouter
                    </button>
                    <button className="btn btn-outline-secondary btn-sm">
                    <FiEye className="me-1" /> Voir
                    </button>
                </div>
                </div>
            </div>
            </div>

            {/* Carte 4 */}
            <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm">
                <img src="/images/prod4.jpg" alt="Montre fitness" className="card-img-top" style={{ height: '180px', objectFit: 'cover' }} />
                <div className="card-body text-center">
                <h6 className="card-title mb-1">Montre fitness</h6>
                <p className="fs-4">65 €</p>
                <div className="d-flex justify-content-center gap-2 mt-3">
                    <button className="btn btn-outline-primary btn-sm">
                    <FiShoppingCart className="me-1" /> Ajouter
                    </button>
                    <button className="btn btn-outline-secondary btn-sm">
                    <FiEye className="me-1" /> Voir
                    </button>
                </div>
                </div>
            </div>
            </div>

            {/* Carte 5 */}
            <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm">
                <img src="/images/prod5.jpg" alt="Casquette Nike" className="card-img-top" style={{ height: '180px', objectFit: 'cover' }} />
                <div className="card-body text-center">
                <h6 className="card-title mb-1">Casquette Nike</h6>
                <p className="fs-4">15 €</p>
                <div className="d-flex justify-content-center gap-2 mt-3">
                    <button className="btn btn-outline-primary btn-sm">
                    <FiShoppingCart className="me-1" /> Ajouter
                    </button>
                    <button className="btn btn-outline-secondary btn-sm">
                    <FiEye className="me-1" /> Voir
                    </button>
                </div>
                </div>
            </div>
            </div>

            {/* Carte 6 */}
            <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm">
                <img src="/images/prod6.jpg" alt="Chaussettes sport" className="card-img-top" style={{ height: '180px', objectFit: 'cover' }} />
                <div className="card-body text-center">
                <h6 className="card-title mb-1">Chaussettes sport</h6>
                <p className="fs-4">8 €</p>
                <div className="d-flex justify-content-center gap-2 mt-3">
                    <button className="btn btn-outline-primary btn-sm">
                    <FiShoppingCart className="me-1" /> Ajouter
                    </button>
                    <button className="btn btn-outline-secondary btn-sm">
                    <FiEye className="me-1" /> Voir
                    </button>
                </div>
                </div>
            </div>
            </div>

            {/* Carte 7 */}
            <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm">
                <img src="/images/prod7.jpg" alt="Gourde isotherme" className="card-img-top" style={{ height: '180px', objectFit: 'cover' }} />
                <div className="card-body text-center">
                <h6 className="card-title mb-1">Gourde isotherme</h6>
                <p className="fs-4">12 €</p>
                <div className="d-flex justify-content-center gap-2 mt-3">
                    <button className="btn btn-outline-primary btn-sm">
                    <FiShoppingCart className="me-1" /> Ajouter
                    </button>
                    <button className="btn btn-outline-secondary btn-sm">
                    <FiEye className="me-1" /> Voir
                    </button>
                </div>
                </div>
            </div>
            </div>

            {/* Carte 8 */}
            <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm">
                <img src="/images/prod8.jpg" alt="Legging fitness" className="card-img-top" style={{ height: '180px', objectFit: 'cover' }} />
                <div className="card-body text-center">
                <h6 className="card-title mb-1">Legging fitness</h6>
                <p className="fs-4">28 €</p>
                <div className="d-flex justify-content-center gap-2 mt-3">
                    <button className="btn btn-outline-primary btn-sm">
                    <FiShoppingCart className="me-1" /> Ajouter
                    </button>
                    <button className="btn btn-outline-secondary btn-sm">
                    <FiEye className="me-1" /> Voir
                    </button>
                </div>
                </div>
            </div>
            </div>

        </div>
        </div>
    );
};
