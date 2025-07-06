import React, { useState } from 'react'
import styles from './auth.module.css'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import Link from 'next/link'
import { submitFormVendeur } from '@/controllers/controller.auth/submitFormVendeur'
import { useProfilStore } from '@/zustand/proflistore'
import { TypeProfilUser } from '@/types'
import { valueInput } from '@/controllers/controller.auth/valueInput'


function FormVendeur() {

    const [formdata, setFormData] = useState<TypeProfilUser>({
            nom: '', prenom: '', numero: '', adresse: '', email: '' , password: ''
        })
        const setDataProfil = useProfilStore(state => state.setProfilData)
        const [isLoad, setIsLoad ] = useState(false)
        const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='container d-flex justify-content-center mx-auto row'>
            <h3 className='text-center mb-3 mt-3 textInfoShop'>Crée votre compte vendeur</h3>
                    <form className='col-md-9 col-lg-8' onSubmit={(e)=> submitFormVendeur(e, formdata, setIsLoad, setFormData, setDataProfil )}>
                        <div className="mb-3">
                            <label>Nom</label>
                            <input type="text" name='nom' onChange={(e)=>valueInput(e, setFormData )} className="form-control shadow-none" placeholder="Saisissez votre nom" required/>
                        </div>
                        <div className="mb-3">
                            <label>Prénom</label>
                            <input type="text" name='prenom' onChange={(e)=>valueInput(e, setFormData )} className="form-control shadow-none" placeholder="Saisissez votre prenom" required/>
                        </div>
                        <div className="mb-3">
                            <label>Téléphone</label>
                            <input type="number" name='numero' onChange={(e)=>valueInput(e, setFormData )} className="form-control shadow-none" placeholder="Numero de telephone" required/>
                        </div>
                        <div className="mb-3">
                            <label>Adresse</label>
                            <input type="text" name='adresse' onChange={(e)=>valueInput(e, setFormData )} className="form-control shadow-none" placeholder="Ville, Commune, Quartier" required/>
                        </div>
                        <div className="mb-3">
                            <label>Email</label>
                            <input type="email" name='email' onChange={(e)=>valueInput(e, setFormData )} className="form-control shadow-none" placeholder="Exemple@gmail.com" required/>
                        </div>
                        <div className="mb-3">
                            <label>Mot de passe</label>
                            <div className='border d-flex align-items-center rounded-2'>
                                <input type={ isOpen ? 'text' : 'password' } name='password' onChange={(e)=>valueInput(e, setFormData )} className="form-control shadow-none border-0" placeholder="Saisissez votre mot de passe" required/>
                                <div className='mx-2'>
                                    <button type='button' className='border-0 bg-transparent'  onClick={()=> setIsOpen(!isOpen)} >
                                        { isOpen ? <FaEye /> : <FaEyeSlash /> } 
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            {!isLoad ? 
                                (<button className={`${styles.btnValidation}`}>S'inscrire</button> ) 
                                :(<button className={`${styles.btnLoader}`} type="button" disabled>
                                <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                                <span role="status">Loading...</span>
                                </button>)
                            }
                        </div>
                        
                        <div>
                            <p className='text-center'>Vous avez déjà un compte ? <Link href={'/auth/connexion-vendeur'} className='text-decoration-none'>connecter-vous</Link></p> 
                        </div>
                    </form>
                </div>
    )
}

export default FormVendeur
