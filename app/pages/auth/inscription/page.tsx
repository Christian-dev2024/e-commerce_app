'use client'

import InscriptionForm from '@/app/components/auth/formInscription'
import { useRouter } from 'next/navigation'
import React from 'react'

function inscription() {

    const router = useRouter()
    
    return (
        <section className='h-100 row align-items-center'>
            <div className='boxCover col-lg-6 container mx-auto'>
                <div>
                    <h3>Et si vous deveniez vendeur sur Gear Boost ?</h3>
                </div>
                <div className='d-flex flex-column align-items-center w-75'>
                    <p className='fs-5'>
                        Que vous soyez un revendeur ou un créateur, mettez vos articles de foot, 
                        de musculation ou de basket en ligne et touchez des centaines d'acheteurs passionnés !
                    </p>
                    <button type='button' className='btnCover' onClick={()=> router.push('/pages/auth/inscription-vendeur')}>
                        devenir vendeur
                    </button>
                </div>
            </div>

            <div className='col-lg-6 mx-auto py-5'>
                <InscriptionForm/>
            </div>
        </section>
    )
}

export default inscription
