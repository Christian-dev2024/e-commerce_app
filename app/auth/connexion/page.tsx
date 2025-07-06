'use client'

import { FormConnexion } from '@/app/components/auth/formConnexion'
import React from 'react'

function connexion() {

    
    return (
        <section className='h-100 row align-items-center'>
            <div className=' col-lg-6 mx-auto py-4 mt-5 mt-lg-0 py-lg-0'>
                <FormConnexion/>
            </div>

            <div className='boxCover1 col-lg-6 container mx-auto'>
                <div>
                    <h3>Connectez-vous à votre compte Gear Boost</h3>
                </div>
                <div className='d-flex flex-column align-items-center w-75'>
                    <p className='fs-5'>
                        Accédez à vos commandes, suivez vos livraisons et profitez de vos avantages client.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default connexion
