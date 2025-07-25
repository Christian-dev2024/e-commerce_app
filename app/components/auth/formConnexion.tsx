'use client'

import { TypeProfilUser } from '@/types'
import React, { useState } from 'react'
import styles from './auth.module.css'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { valueInput } from '@/controllers/controller.auth/valueInput'
import Link from 'next/link'
import { submitformconnexion } from '@/controllers/controller.auth/submitformconnxion'
import { useRouter } from 'next/navigation'
import { useDataDashBoard } from '@/zustand/dataDashBoardStore'


export const FormConnexion = () => {

    const [formdata, setFormdata] = useState<TypeProfilUser>({
        email : '',  password : ''
    })

    const [isLoad, setIsLoad ] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()

    return (
        <div className='h-100'>
            <h3 className={`${styles.title} text-center`}> Connexion</h3>
            <form className='col-md-8 col-lg-8 container' onSubmit={(e)=> submitformconnexion(e, formdata, setIsLoad, setFormdata, router)}>
                <div className="mb-3">
                    <label>Email</label>
                    <input type="email" value={formdata.email} name='email' onChange={(e)=> valueInput(e, setFormdata)} className="form-control shadow-none" placeholder="Saisissez votre email" required/>
                </div>
                <div className="mb-3">
                    <label>Mot de passe</label>
                    <div className='border d-flex align-items-center rounded-2'>
                        <input type={ isOpen ? 'text' : 'password' } value={formdata.password?.toString()} name='password' onChange={(e)=> valueInput(e, setFormdata)} className="form-control shadow-none border-0" placeholder="Saisissez votre mot de passe" required/>
                        <div className='mx-2'>
                            <button type='button' className='border-0 bg-transparent'  onClick={()=> setIsOpen(!isOpen)} >
                                { isOpen ? <FaEye /> : <FaEyeSlash /> } 
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    {!isLoad ? 
                        (<button type='submit' className={`${styles.btnValidation}`}>Se connecter</button> ) 
                        :(<button className={`${styles.btnLoader}`} type="button" disabled>
                        <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                        <span role="status">Loading...</span>
                        </button>)
                    }
                </div>
                
                <div>
                    <p className='text-center'>Vous êtes nouveau ? <Link href={'/auth/inscription'} className='text-decoration-none'>créer un compte</Link></p> 
                </div>
            </form>
        </div>
    )
}
