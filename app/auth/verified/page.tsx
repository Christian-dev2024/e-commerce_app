'use client'

import { verifiedEmail } from '@/controllers/controller.auth/verifiedEmail'
import { useProfilStore } from '@/zustand/proflistore'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { auth } from '@/lib/firebaseComfig'
import { errorToast } from '@/controllers/toast/errorToast'
import { FaCheckCircle } from 'react-icons/fa'



function page() {

    const [isload, setIsLoad] = useState(true)
    const [cheker, setCheker] = useState(false)

    const profilData = useProfilStore(state => state.profilData)

    console.log('donnée du store', profilData)

    const router = useRouter()

    const chekerEmail = async () => {

        try {
            const user = auth.currentUser;
            setCheker(true);

            if (!user) {
                errorToast("Utilisateur non connecté.");
                setIsLoad(false);
                return router.push('/auth/inscription')
            }

            await user.reload();

            return verifiedEmail(router, profilData, setIsLoad);

        } catch (error) {
            console.error(error);
            errorToast("Une erreur est survenue.");
        }
    };
    

    return (
        <section className='min-vh-100 d-flex flex-column justify-content-center align-items-center'>
            <div>
                {cheker ? (
                <>
                    <div className='d-flex flex-column justify-content-center align-content-center'>
                        <div className='mb-5'>
                        {isload ? 
                            (<h2 className='fw-bold'>creation de compte..</h2>) : 
                            (<h2 className='fw-bold'>compte créé avec succès..</h2>)
                        }
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                            {isload ? (
                                <div className='d-flex justify-content-center align-items-center'>
                                    <div className="spinner-border" style={{ height: '4rem', width: '4rem' }} role="status">
                                        <span className="visually-hidden fw-bold">Loading...</span>
                                    </div>
                                </div>
                                ) : 
                                (
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <FaCheckCircle className='fs-2 text-success text-center' />
                                    </div>
                                
                                )}
                        </div>
                    </div>
                </>
            ) : (
                <div className='d-flex justify-content-center align-items-center'>
                    <button type='button' className='boxVue' onClick={()=> chekerEmail()}> j'ai verifié mon compte</button>
                </div>
            )}
            </div>
            
        </section>
    )
}

export default page
