'use client'

import { TypeShop } from '@/types'
import React, { useState } from 'react'
import styles from '@/app/components/auth/auth.module.css'
import { valueInput } from '@/controllers/shop.controller/valueInput'
import { handleImageChange } from '@/controllers/shop.controller/recupImg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { submitCreateShop } from '@/controllers/shop.controller/createShop'
import { useDataDashBoard } from '@/zustand/dataDashBoardStore'

export const FormInfoShop = () => {

    const [formData, setFormData] = useState<TypeShop>({
        shopName: '',  description: '', structure: '', emailShop: '', numShop: '', adrresse: ''
    })

    const [file, setFile] = useState<File | null>(null)
    const [image, setImage] = useState('')
    const [isLoad, setIsLoad ] = useState(false)
    const router = useRouter()
    const setDataShop = useDataDashBoard(state => state.setData)

    return (
        <div className='row container mx-auto'>
            <form className='row col-lg-12 mx-auto p-2' onSubmit={(e)=> submitCreateShop(e, formData, file, setFormData, setIsLoad, router, setDataShop)}>
                    <div className="mb-3 col-lg-12">
                        <h3 className='mb-4 fw-medium textInfoShop'>Information de la boutique</h3>
                            <div className='row'>
                                <div className='col-12 col-md-12 col-lg-6 mb-4'>
                                <label className='mb-2'>Nom de la bouique</label>
                                <input type="text" name='shopName' 
                                    onChange={(e)=>valueInput(e, setFormData)} 
                                    className="form-control shadow-none" 
                                    placeholder='Nom' required/>
                            </div>
                            <div className='col-12 col-md-4 col-lg-6 mb-4'>
                                <label className='mb-2'>Adresse</label>
                                <input type="text" name='adrresse' 
                                    onChange={(e)=>valueInput(e, setFormData)} 
                                    className='form-control shadow-none' 
                                    placeholder='Ville, Commune' required/>
                            </div>

                            </div>
                                <div className='row'>
                                    <div className=" col-12 col-md-12 col-lg-4 mb-4">
                                    <label className='mb-2'>effectif du personnel</label>
                                    <div>
                                        <select name="structure" onChange={(e)=>valueInput(e, setFormData)} className='form-select shadow-none' required>
                                            <option value="aucun">aucun</option>
                                            <option value="single">Indivuduel</option>
                                            <option value="small">Petite entreprise</option>
                                            <option value="big">Grande surface</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='col-12 col-md-4  col-lg-4  mb-4'>
                                    <label className='mb-2'>Numero de la boutique</label>
                                    <input type="number" name='numShop' 
                                        onChange={(e)=>valueInput(e, setFormData)} 
                                        className='form-control shadow-none' 
                                        placeholder='Numero' required/>
                                </div>
                                <div className='col-12 col-md-4 col-lg-4 mb-4'>
                                    <label className='mb-2'>Email de la boutique</label>
                                    <input type="email" name='emailShop' 
                                        onChange={(e)=>valueInput(e, setFormData)}  
                                        className='form-control shadow-none' 
                                        placeholder='Exemple@gmail.com'required/>
                                </div>
                            </div>

                            <div className='row'>
                                <div className="mb-4 col-12 col-md-12 col-lg-6">
                                <label className='mb-2'>Description</label>
                                <div>
                                    <textarea className="form-control shadow-none" 
                                    name='description' onChange={(e)=>valueInput(e, setFormData)} rows={6} required/>
                                </div>
                            </div>

                            {/* uplaod image  */}
                            <div className="mb-4 col-12 col-md-12 col-lg-6 ">
                                <label className='mb-2'>importer le logo de la boutique</label>
                                <div className='mb-1'>
                                    <input type="file" className='form-control shadow-none' onChange={(e)=> handleImageChange(e, setImage, setFile)} required />
                                </div>
                                <div className='border rounded-3 d-flex justify-content-center align-items-center p-2 '>
                                    <Image src={image || '/images/LOGO.png'} width={130} height={100} quality={80} className='rounded-3' alt='upload' />
                                </div>
                            </div>
                            </div>
                        </div>
                
                <div className="mb-3">
                    {!isLoad ? 
                        (<button type='submit' className={`${styles.btnValidation}`}>Enrgistrer</button> ) 
                        :(<button className={`${styles.btnLoader}`} type="button" disabled>
                        <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                        <span role="status">Loading...</span>
                        </button>)
                    }
                </div>
            </form>
        </div>
    )
}
