'use client'

import { useGetProduitClient } from '@/zustand/getProduitClientStore'
import Image from 'next/image'
import React from 'react'
import { FiEye, FiShoppingCart } from 'react-icons/fi'
import { ModalProduit } from './ModalProduit'

export const ListProduit = () => {

    const produitData = useGetProduitClient(state=> state.data)
    const SetproduitData = useGetProduitClient(state => state.setData)

    return (
        <div className="container p-3">
            <div className='overflow-y-auto p-4 custom-scrollbar ' style={{ maxHeight: '580px' }}>
                <div className='row g-4 justify-content-center'>
                    {produitData && produitData.length > 0 ? (
                        produitData.map((items, index)=> (
                            <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
                                <div className="card h-100 shadow-sm rouded-2">
                                <div className='position-relative overflow-hidden' style={{ height: '200px', objectFit: 'cover' }}>
                                    <Image src={items?.imageProduit || '/images/pop.jpg'} 
                                    fill loading='lazy' className="card-img-top object-fit-cover" alt="image de produit"/>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{items?.nomProduit}</h5>
                                    <p className="card-text fs-4">{items?.prix_produit}</p>
                                    <div className="d-flex justify-content-around gap-2 mt-3">
                                        <button className="btnCard" >
                                            <FiShoppingCart className="me-1" /> Ajouter
                                        </button>
                                        <button className="btnCard" data-bs-toggle="modal" data-bs-target={`#ModalArticle-${items?._id}`}>
                                            <FiEye className="me-1" /> Voir
                                        </button>
                                    </div>
                                    <ModalProduit idProduit={ items?._id!} produitData={produitData} modalId={`ModalArticle-${items?._id}`}/>
                            </div>
                            </div>
                            </div>
                            
                        ))
                    ) : (
                        <>
                            <p className='text-secondary text-center fs-3'> Aucun produit</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
