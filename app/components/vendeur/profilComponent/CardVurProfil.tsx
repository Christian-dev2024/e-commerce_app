'use client';

import { ProfilUser } from '@/zustand/proflistore';
import React from 'react';

export default function CardVueProfil() {
    return (
        <div className="row g-3 mb-4 container mx-auto">
        <div className="col-md-4 col-12">
            <div className=" p-3 border rounded shadow-sm text-center itemProfil">
            <h6 className="mb-1">Produits publiés</h6>
            <p className="fs-5 fw-semibold mb-0">48</p>
            </div>
        </div>

        <div className="col-md-4 col-12">
            <div className=" p-3 border rounded shadow-sm text-center itemProfil">
            <h6 className="mb-1">Commandes totales</h6>
            <p className="fs-5 fw-semibold mb-0">124</p>
            </div>
        </div>

        <div className="col-md-4 col-12">
            <div className="p-3 border rounded shadow-sm text-center itemProfil">
            <h6 className="mb-1">Revenu total</h6>
            <p className="fs-5 fw-semibold mb-0">10000 fcfa</p>
            </div>
        </div>
        </div>
    );
}
