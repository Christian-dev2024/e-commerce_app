// components/ProfileInfoSection.js

import { ProfilUser } from '@/zustand/proflistore';

type propType = {
    dataProfil : ProfilUser | null
}

export const InfoProfil =({dataProfil}: propType) => {
    return (
        <div className="container my-4">
            <div className="card shadow-sm col-lg-12 col-12">
                <div className="bgInfoProfil p-3 rounded-top-2">
                    <h5 className="mb-0 text-light">Informations du profil</h5>
                </div>
                <div className="card-body">
                    <div className="row g-4 align-items-center">

                    {/* Infos texte */}
                            <div className="col-12 col-md-12 mx-auto">
                                <div className="row gy-2">
                                    <div className="col-lg-4 col-6">
                                        <strong className='mb-2'>Nom du vendeur:</strong>
                                        <div>{dataProfil?.nom}</div>
                                    </div>
                                    <div className="col-lg-4 col-6">
                                        <strong className='mb-2'>Adresse :</strong>
                                        <div>{dataProfil?.adresse}</div>
                                    </div>
                                    <div className="col-lg-4 col-6">
                                        <strong className='mb-2'>Téléphone :</strong>
                                        <div>{dataProfil?.numero}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 container mt-4">
                                <button className="w-100 boxVue" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                ✏️ Modifier le profil
                                </button>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
}
