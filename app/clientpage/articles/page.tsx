import { FilterbarArticle } from '@/app/components/clientComponent/FilterArticleClient'
import { ListProduit } from '@/app/components/clientComponent/ListProduit'
import Navbar from '@/app/components/landing/Navbar'
import React from 'react'

function page() {
    return (
        <>
            <nav className='mb-5'>
                <Navbar/>
            </nav>

            <section className='min-vh-100 container'>
                <div className='row justify-content-center mt-lg-4  align-items-center'>
                    <div className="col-lg-12 mt-4 pt-5">
                        <FilterbarArticle/>
                    </div>
                    <div className="col-lg-12 p-4 d-flex justify-content-center align-items-center">
                        <ListProduit/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page
