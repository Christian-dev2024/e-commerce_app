'use client';

import { TypeShop } from '@/types';
import Image from 'next/image'; 

type propsType = {
    dataShop :TypeShop | null
}

export const CardInfoShop = ({dataShop} : propsType ) => {
    return (
        <div className="container my-4">
        <div className="card shadow-sm p-4">
            <div className="row align-items-center g-4">
            
            {/* Logo de la boutique */}
            <div className="col-md-2 col-12 position-relative overflow-hidden rounded-circle mx-auto" style={{width: 150, height:150}}>
                <Image
                src={dataShop?.logo! || '/images/logoImgeDefault.png'}
                alt="Logo de la boutique"
                fill
                className='object-fit-cover'
                />
            </div>

            {/* Informations principales */}
            <div className="col-md-8 col-12 mx-auto">
                <h4 className="mb-1">{dataShop?.shopName}</h4>
                <p className="mb-1 text-muted">
                    {dataShop?.adrresse}
                </p>
                <p className="mb-1 text-muted">
                    {dataShop?.numShop}
                </p>
                <p className="mb-1 text-muted">
                    {dataShop?.emailShop}
                </p>
            </div>

            {/* Statut + bouton */}
            <div className="col-md-2 col-12 text-md-end text-center">
                <span className="badge bg-success mb-2"> Actif</span>
                <br />
                <button className="boxVue">
                    Modifier les infos
                </button>
            </div>

            </div>
        </div>
        </div>
    );
}
