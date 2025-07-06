'use client';

import React from 'react';

export const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#f8244f' }} className="text-white pt-5 pb-4">
            <div className="container">
                <div className="row">

                    <div className="col-md-4 mb-4">
                        <h4 className="fw-bold">Gear Boost</h4>
                        <p>
                        Boutique en ligne dédiée au sport. Découvrez les meilleures marques et offres exclusives.
                        </p>
                    </div>

                    <div className="col-md-4 mb-4">
                        <h5 className="fw-semibold">Liens rapides</h5>
                        <ul className="list-unstyled">
                        <li>À propos de Nous</li>
                        <li>Produits</li>
                        <li>Contact</li>
                        </ul>
                    </div>

                    <div className="col-md-4 mb-4">
                        <h5 className="fw-semibold">Contact</h5>
                        <p>Abidjan, Côte d’Ivoire</p>
                        <p>+225 00 00 00 00</p>
                        <p>contact@gearboost.com</p>
                    </div>
                </div>

                <hr className="border-light" />

                <div className="text-center">
                &copy; 2025 Gear Boost — Tous droits réservés
                </div>
            </div>
        </footer>
    );
}
