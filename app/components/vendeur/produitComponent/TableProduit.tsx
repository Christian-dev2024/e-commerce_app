import React, { useEffect, useState } from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
import { LuEye, LuPenLine } from 'react-icons/lu'
import { ModalAjoutProd } from './ModalAjoutProd'
import { useProduitGetStore } from '@/zustand/getProduitStore'
import Image from 'next/image'
import { GetProduitServer } from '@/controllers/produit.controller/GetProduitServer'
import { handleSellProduit } from '@/controllers/produit.controller/handleSellProduit'



export const TableProduit = () => {

    const ProduitStore = useProduitGetStore(state =>state.produitGet)

    const setProduitGet  = useProduitGetStore(state => state.setProduitGet)

    console.log(ProduitStore, 'produit à afficher')

    const [isLoad, setIsLoad] = useState(false)

    useEffect(()=>{
        GetProduitServer(ProduitStore, setProduitGet)
    }, [])

    
    return (
        <div className="container">
            <div className=" table-responsive container">
                <table className="table table-hover table-striped border align-middle shadow">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Ref.produit</th>
                        <th scope="col">Nom produit</th>
                        <th scope="col">Prix</th>
                        <th scope="col">Quantité</th>
                        <th scope="col">Image</th>
                        <th scope="col">Statut</th>
                        <th scope="col">Statut de vente</th>
                        <th scope="col" className='d-flex justify-content-center'>
                            <button type="button" className="boxVue" data-bs-toggle="modal" data-bs-target="#ModalAjoutProduit">
                                ajouter un produit
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {ProduitStore && ProduitStore.length > 0 ? (
                        ProduitStore?.map((items, index)=>(
                            <tr key={index} >
                                <th scope="row">{index + 1}</th>
                                <td className='mt-1 mb-1'>{items?.ref_produit}</td>
                                <td className='mt-1 mb-1'>{items?.nomProduit}</td>
                                <td className='mt-1 mb-1'>{items?.prix_produit}</td>
                                <td className='mt-1 mb-1'>{items?.quantite}</td>
                                <td>
                                    <div className='position-relative overflow-hidden mt-1 mb-1 border'  style={{width: 70, height:70}}>
                                        <Image src={items?.imageProduit || '/images/LOGO.png'} fill alt="prod" className='object-fit-cover' />
                                    </div>
                                </td>
                                <td>
                                    <span className={`badge ${
                                        items?.quantite === 0 ? 'bg-danger'
                                        : items?.quantite === items?.quantite! / 3 ? 'bg-warning' : 'bg-success' }`}>

                                        {items?.quantite === 0 ? 'Rupture'
                                        : items?.quantite === items?.quantite! / 3 ? 'Faible stock' : 'En stock'}
                                    </span>
                                </td>
                                <td className='mt-1 mb-1'>
                                    <div className='d-flex align-items-center'>
                                        {items?.isPublished === false ? (
                                            <button
                                            type='button'
                                            onClick={() => handleSellProduit(items?._id!, setIsLoad, setProduitGet, ProduitStore)}
                                            className='btnSell'
                                            >
                                            Mettre en vente
                                            </button>
                                        ) : (
                                            <div>
                                            <p className='text-success mt-3'>En vente</p>
                                            </div>
                                        )}
                                    </div>
                                </td>
                                <td>
                                    <div className='d-flex justify-content-center'>
                                        <button className="bg-transparent border-0 text-warning mx-3"><LuEye /></button>
                                        <button className="bg-transparent border-0 text-info mx-3"><LuPenLine /></button>
                                        <button className="bg-transparent border-0 text-danger mx-3"><FaRegTrashAlt /></button>
                                    </div>
                                </td>
                            </tr>
                        ))
                        ) : (
                            <tr>
                            <td colSpan={9} className="text-center py-4 text-secondary">
                                <div className="d-flex justify-content-center">
                                    <div className='position-relative overflow-hidden' style={{width: 200, height:200}}>
                                        <Image src={'/images/imgAddProduit.png'} fill alt="prod" quality={80} className='object-fit-cover'/>
                                    </div>
                                </div>
                                <h5>Aucun produit en stock veuillez en ajouter </h5>
                            </td>
                            </tr>
                        )}
                </tbody> 
                </table> 
                
            </div>

            <ModalAjoutProd/>
        </div>
    )
}
