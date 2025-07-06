'use client'

import { handleImageChange } from '@/controllers/shop.controller/recupImg'
import { submitAddProduit } from '@/controllers/produit.controller/submitAddProduit'
import { typeProduit } from '@/types'
import Image from 'next/image'
import React, { use, useRef, useState } from 'react'
import styles from '@/app/components/auth/auth.module.css'
import { valueInput } from '@/controllers/shop.controller/valueInput'
import { useProduitGetStore } from '@/zustand/getProduitStore'

export const FormAjoutProd = () => {

    const [formData, setFormData] = useState<typeProduit>({
        nomProduit: '', quantite: 0 , statutProduit: '', 
        description: '', prix_produit: '', categorie: '', type_produit: ''
    })

    const [image, setImage] = useState('')
    const [file, setFile] = useState<File | null>(null)
    const [isLoad, setIsLoad ] = useState(false)

    const fileRef = useRef<HTMLInputElement>(null)

    const {produitGet, setProduitGet } = useProduitGetStore()

    return (
        <form className='col-lg-12 col-12 container' onSubmit={(e)=> submitAddProduit(e, formData, file, setFormData, setIsLoad, setImage, fileRef, setProduitGet, produitGet )}>
            <div className='mb-3 row'>
                <div className='col-lg-4 mb-3'>
                    <label> Nom du produit</label>
                    <input type="text" name='nomProduit' 
                        value={formData.nomProduit} onChange={(e)=> valueInput(e, setFormData)} 
                        className='form-control shadow-none' required/>
                </div>
                <div className='col-lg-4 mb-3'>
                    <label> Prix</label>
                    <input type="number" name='prix_produit' 
                        value={formData.prix_produit} onChange={(e)=> valueInput(e, setFormData)} 
                        className='form-control shadow-none' required/>
                </div>
                <div className='col-lg-4 mb-3'>
                    <label> Quantité</label>
                    <input type="number" name='quantite' min="0" step="1"
                        value={formData.quantite} onChange={(e)=> valueInput(e, setFormData)} 
                        className='form-control shadow-none' required/>
                </div>
                <div className='col-lg-4 mb-3'>
                    <label> Statut du produit</label>
                    <select name='statutProduit' value={formData.statutProduit} onChange={(e)=> valueInput(e, setFormData)} className='form-select shadow-none'>
                        <option value="aucun">aucun</option>
                        <option value="en stock">en stock</option>
                        <option value="faible">faible</option>
                        <option value="rupture">rupture</option>
                    </select>
                </div>
                <div className='col-lg-4 mb-3'>
                    <label> Catégotie du produit</label>
                    <select name='categorie' value={formData.categorie} onChange={(e)=> valueInput(e, setFormData)} className='form-select shadow-none'>
                        <option value="aucun">aucun</option>
                        <option value="Vêtements">Vêtements</option>
                        <option value="Chaussure">Chaussure</option>
                        <option value="Materiels">Materiels et Musculation</option>
                        <option value="Accessoires">Equipements</option>
                    </select>
                </div>
                <div className='col-lg-4 mb-3'>
                    <label> Type de produit</label>
                    <select name='type_produit' value={formData.type_produit} onChange={(e)=> valueInput(e, setFormData)} className='form-select shadow-none'>
                        <option value="aucun">aucun</option>
                        <option value="BasketBall">BasketBall</option>
                        <option value="FootBall">FootBall</option>
                        <option value="Musculation">Musculation</option>
                    </select>
                </div>
            </div>
            <div className='mb-3'>
                <label> Desciption</label>
                <textarea className='form-control shadow-none' name='description' 
                    value={formData.description} onChange={(e)=> valueInput(e, setFormData)} rows={3} required>
                </textarea>
            </div>
            <div className='mb-3'>
                <label> Image du produit</label>
                <input type="file" ref={fileRef}  className='form-control shadow-none mb-2' onChange={(e)=> handleImageChange(e, setImage, setFile )} required/>
                <div className='d-flex justify-content-center align-items-center border rounded-3 p-2'>
                    <div className='rounded-3 d-flex justify-content-center position-relative overflow-hidden'  style={{width: 100, height:100}}>
                        <Image src={ image || '/images/catimg1.jpg'} fill alt='photo produit' quality={80} className='object-fit-cover'/>
                    </div>
                </div>
            </div>
            <div className="mb-3">
                {!isLoad ? 
                    (<button type='submit' className={`${styles.btnValidation}`}>Ajouter</button> ) 
                    :(<button className={`${styles.btnLoader}`} type="button" disabled>
                    <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                    <span role="status">Loading...</span>
                    </button>)
                }
            </div>
        </form>
    )
}
