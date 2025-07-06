'use client'

import { FormConnexionVendeur } from '@/app/components/auth/formVendeurConnexion'
import { sideInscription } from '@/controllers/animation/authAnimation'
import React, { useEffect, useRef } from 'react'

function page() {

    const divRef = useRef(null)

    useEffect(()=> {
            sideInscription(divRef, 1, 1)
        }, [])
    
    return (
        <section className='min-vh-100 row align-items-center'>
            <div className='boxCover3 col-lg-6 container mx-auto'>
                <div>
                    <h3>Connectez-vous à votre compte Gear Boost</h3>
                </div>
                <div className='d-flex flex-column align-items-center w-75'>
                    <p className='fs-5'>
                        Accédez à vos commandes, suivez vos livraisons et profitez de vos avantages client.
                    </p>
                </div>
            </div>
            <div className='col-lg-6 col-md-12 min-vh-100 d-flex justify-content-center align-items-center invisible' ref={divRef}>
                <FormConnexionVendeur/>
            </div>
        </section>
    )
}

export default page
