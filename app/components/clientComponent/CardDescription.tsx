import { typeProduit } from '@/types'
import Image from 'next/image'
import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'

export const CardDescription = ({idProduit, produitData} : {idProduit : string, produitData: typeProduit[]}) => {

    const id = idProduit ;
    const tableProduit = produitData ;

    const detailProduit = tableProduit.find(items => items._id === id)

    return (
        
        <div className='row justify-content-center align-items-center'>
            {detailProduit && detailProduit !== undefined && (
                <>
                <div className="col-lg-6 d-flex justify-content-center align-items-center mb-4">
                    <div className='position-relative overflow-hidden w-100'  style={{ height: '300px', width: '300px' }}>
                        <Image src={ detailProduit?.imageProduit || '/images/pop.png'} 
                        alt='image du produit' fill loading='lazy' className='object-fit-cover rounded-3'/>
                    </div>
                </div>

                <div className="col-lg-6 mb-4">
                    <div>
                        <h4 className='mb-4'>{detailProduit?.nomProduit}</h4>
                        <h3 className='mb-4'>{detailProduit?.prix_produit}</h3>
                        <p className='text-secondary'>{detailProduit?.description}</p>
                    </div>
                </div>

                <div className='d-flex justify-content-center align-items-center'>
                    <button className='boxVue w-50'>
                        <FiShoppingCart/> Ajouter
                    </button>
                </div>
                </>
            ) }
        </div>
    )
}
