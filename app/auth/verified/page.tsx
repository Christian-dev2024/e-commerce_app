'use client'

import { verifiedEmail } from '@/controllers/controller.auth/verifiedEmail'
import { useProfilStore } from '@/zustand/proflistore'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/lib/firebaseComfig'
import { errorToast } from '@/controllers/toast/errorToast'
import { FaCheckCircle } from 'react-icons/fa'


function page() {

    const [isload, setIsLoad] = useState(true)

    const profilData = useProfilStore(state => state.profilData)

    console.log('donnée du store', profilData)

    const router = useRouter()
    
    useEffect(() => {
        const checkUser = async () => {
            const unsubscribe = onAuthStateChanged(auth, async (user) => {
                if (user) {
                    await user.reload() 

                    if (user.emailVerified) {
                        verifiedEmail(router, profilData, setIsLoad);
                    } else {
                        errorToast("Email non vérifié.");
                        setIsLoad(false);
                        router.push('/auth/inscription');
                    }
                } else {
                        errorToast("Utilisateur non connecté.");
                        setIsLoad(false);
                        router.push('/auth/inscription');
                    }
                    });

                    // nettoyage
                    return unsubscribe;
                };

                const unsubscribePromise = checkUser();

                // React ne supporte pas de return async dans useEffect, donc nettoyage indirect
            return () => {
                    unsubscribePromise.then((unsubscribe) => {
                    if (typeof unsubscribe === 'function') unsubscribe();
                    });
                };
            }, [router, profilData]);



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
