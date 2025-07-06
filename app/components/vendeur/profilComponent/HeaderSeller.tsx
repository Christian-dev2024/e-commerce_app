'use client';

import React from 'react';

export default function HeaderSeller() {
    return (
        <div className="d-flex align-items-center justify-content-between px-lg-5 py-3 border rounded-3 mb-4 container">
            <div className="d-flex align-items-center">
                <img src="/images/avatar-vendeur.png" alt="logo boutique" className="rounded-circle me-3 border" width="100" height="100" />
                <div className='mx-2'>
                    <h5 className="mb-1 fw-medium">Nom du vendeur</h5>
                    <span className="badge bg-success">Compte vérifié</span>
                </div>
            </div>
            <button className="boxVue ms-3">
                Modifier le profil
            </button>
        </div>
    );
}
