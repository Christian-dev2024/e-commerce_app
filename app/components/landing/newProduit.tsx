'use client';

import { GetProduitSideClient } from '@/controllers/produit.controller/GetProduitSideClient';
import { useGetProduitClient } from '@/zustand/getProduitClientStore';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { FiEye, FiShoppingCart } from 'react-icons/fi';
import { ModalProduit } from '../clientComponent/ModalProduit';


export const Article = () => {

    const SetproduitData = useGetProduitClient(state => state.setData)
    const produitData = useGetProduitClient( state => state.data)

    useEffect(()=> {
        GetProduitSideClient(produitData, SetproduitData)
    }, [])

    return (
        <div className="container my-5">
        <h4 className="mb-5 text-center fs-3 fw-bold mt-5"> Nos dernières sorties</h4>

            <div className="d-flex justify-content-center align-items-center my-5" >
                <div className="row g-4 justify-content-center">
                {produitData && produitData.length> 0 && (
                    produitData.length < 9 && produitData.map((items, index)=> (
                        <div className="col-sm-6 col-md-4 col-lg-4" key={index}>
                            <div className="card h-100 shadow-sm rouded-2" >
                                <div className='position-relative overflow-hidden' style={{ height: '200px', objectFit: 'cover' }}>
                                    <Image src={items?.imageProduit || '/images/pop.jpg'} alt="Chaussures running" loading='lazy' fill className="card-img-top object-fit-cover" />
                                </div>
                                <div className="card-body text-center bgCard">
                                    <h6 className="card-title mb-1">{items?.nomProduit}</h6>
                                    <p className="fs-4">{items?.prix_produit}</p>
                                    <div className="d-flex justify-content-center gap-2 mt-3">
                                        <button className="btnCard" >
                                        <FiShoppingCart className="me-1" /> Ajouter
                                        </button>
                                        <button className="btnCard" data-bs-toggle="modal" data-bs-target={`#ModalArticle-${items?._id}`}>
                                        <FiEye className="me-1" /> Voir
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <ModalProduit idProduit={ items?._id!} produitData={produitData} modalId={`ModalArticle-${items?._id}`}/>
                        </div>
                    ))
                )}
            </div>
            </div>
        </div>
    );
};
