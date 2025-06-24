import { FormConnexionVendeur } from '@/app/components/auth/formVendeurConnexion'
import React from 'react'

function page() {
    return (
        <section className='min-vh-100 row align-items-center'>
            <div className='col-lg-12'>
                <FormConnexionVendeur/>
            </div>
        </section>
    )
}

export default page
