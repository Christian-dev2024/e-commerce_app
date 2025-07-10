import { SideBarClient } from '@/app/components/clientComponent/sideBarClient'
import Navbar from '@/app/components/landing/Navbar'
import React from 'react'

function page() {
    return (
        <>
            <nav className='position-fixed'>
                <Navbar/>
            </nav>

            <section className='min-vh-100 pt-5 container'>
                <div className='row justify-content-center  align-items-center'>
                    <div className="col-lg-3 pt-3 border-end min-vh-100">
                        <SideBarClient/>
                    </div>
                    <div className="col-lg-9">

                    </div>
                </div>
            </section>
        </>
    )
}

export default page