'use client'

import { useProfilStore } from '@/zustand/proflistore'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/lib/firebaseComfig'
import { errorToast } from '@/controllers/toast/errorToast'
import { FaCheckCircle } from 'react-icons/fa'
import { verifiedEmail } from '@/controllers/controller.auth/verifiedEmail'


function page() {

    const [isload, setIsLoad] = useState(true)

    const profilData = useProfilStore(state => state.profilData)

    console.log('donnée du store', profilData)

    const router = useRouter()
    
    useEffect(()=> {

        const verified = onAuthStateChanged(auth, (user)=>{

            if (user && user.emailVerified) {
                verifiedEmail(router, profilData, setIsLoad )
            } else {
                errorToast("Utilisateur non connecté ou email non vérifié.")
            }
        })

        return () => verified()
    }, [router, profilData])


    return (
        <section className='min-vh-100 d-flex flex-column justify-content-center align-items-center'>
            <div className='mb-5'> 
                {isload ? (<h2 className='fw-bold'>creation de compte..</h2>): (<h2 className='fw-bold'>compte créé avec succès..</h2>)}
            </div>
            <div>
                {isload ? (
                    <div className="spinner-border" style={{height: '4rem', width:'4rem'}} role="status">
                    <span className="visually-hidden fw-bold">Loading...</span>
                    </div>
                ): (<FaCheckCircle className='fs-2 text-success' />)}
            </div>
        </section>
    )
}

export default page
