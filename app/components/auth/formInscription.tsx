'use client'

import React, { useState } from 'react'
import styles from './auth.module.css'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import Link from 'next/link'
import { TypeProfilUser } from '@/types'
import { valueInput } from '@/controllers/controller.auth/valueInput'
import { submitForm } from '@/controllers/controller.auth/submitForm'
import { useProfilStore } from '@/zustand/proflistore'


function InscriptionForm() {

    const [formdata, setFormdata] = useState<TypeProfilUser>({
        nom: '', prenom: '', numero: '', adresse: '', email: '' , password: ''
    })
    const [isLoad, setIsLoad ] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const setDataProfil = useProfilStore(state => state.setProfilData)

    return (
        <div className='mx-auto h-100'>
            <h3 className={`${styles.title} text-center`}> Créer un compte</h3>
            <form className='col-md-8 col-lg-8 container' onSubmit={(e)=> submitForm(e, formdata, setIsLoad, setFormdata, setDataProfil)}>
                <div className="mb-3">
                    <label>Nom</label>
                    <input type="text" value={formdata.nom} name='nom' onChange={(e)=> valueInput(e, setFormdata)} className="form-control shadow-none" placeholder="Saisissez votre nom" required/>
                </div>
                <div className="mb-3">
                    <label>Prénom</label>
                    <input type="text" value={formdata.prenom} name='prenom' onChange={(e)=> valueInput(e, setFormdata)} className="form-control shadow-none" placeholder="Saisissez votre prenom" required/>
                </div>
                <div className="mb-3">
                    <label>Téléphone</label>
                    <input type="tel" value={formdata.numero} name='numero' onChange={(e)=> valueInput(e, setFormdata)} className="form-control shadow-none" placeholder="Telephone" required/>
                </div>
                <div className="mb-3">
                    <label>Adresse</label>
                    <input type="text" value={formdata.adresse} name='adresse' onChange={(e)=> valueInput(e, setFormdata)} className="form-control shadow-none" placeholder="Ville, Commune, Quartier" required/>
                </div>
                <div className="mb-3">
                    <label>Email</label>
                    <input type="email" value={formdata.email} name='email' onChange={(e)=> valueInput(e, setFormdata)} className="form-control shadow-none" placeholder="Saisissez votre email" required/>
                </div>
                <div className="mb-3">
                    <label>Mot de passe</label>
                    <div className='border d-flex align-items-center rounded-2'>
                        <input type={ isOpen ? 'text' : 'password' } value={formdata.password} name='password' onChange={(e)=> valueInput(e, setFormdata)} className="form-control shadow-none border-0" placeholder="Saisissez votre mot de passe" required/>
                        <div className='mx-2'>
                            <button type='button' className='border-0 bg-transparent'  onClick={()=> setIsOpen(!isOpen)} >
                                { isOpen ? <FaEye /> : <FaEyeSlash /> } 
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    {!isLoad ? 
                        (<button type='submit' className={`${styles.btnValidation}`}>S'inscrire</button> ) 
                        :(<button className={`${styles.btnLoader}`} type="button" disabled>
                        <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                        <span role="status">Loading...</span>
                        </button>)
                    }
                </div>
                
                <div>
                    <p className='text-center'>Vous avez déjà un compte ? <Link href={'/auth/connexion'} className='text-decoration-none'>connecter-vous</Link></p> 
                </div>
            </form>
        </div>
    )
}

export default InscriptionForm
