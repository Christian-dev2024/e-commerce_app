'use client'

import { initTooltips } from '@/utils/tooltips'
import Link from 'next/link'
import { useEffect } from 'react'
import { BiLogOut } from 'react-icons/bi'
import { BsBoxSeamFill } from 'react-icons/bs'
import { FaClipboardList, FaUser } from 'react-icons/fa'
import { FaShop } from 'react-icons/fa6'
import { RiDashboardFill } from 'react-icons/ri'

export const SideBar = () => {

    useEffect(()=> {
        initTooltips()
    }, [])

    return (
        <>
        <nav className='sideBarStyle border h-100 d-lg-block d-none position-static'>
            <div>
                <Link href={'/vendeur/dashboard'} className='text-light' 
                data-bs-toggle="tooltip" 
                data-bs-placement="right" 
                data-bs-title="Tableau de bord">
                        <RiDashboardFill size={27} />
                </Link>
            </div>
            <div>
                <Link href={'/vendeur/dashboard/produit'} className='text-light'
                data-bs-toggle="tooltip" 
                data-bs-placement="right" 
                data-bs-title="Produits">
                    <BsBoxSeamFill size={27} />
                </Link>
            </div>
            <div className='mb-5'>
                <Link href={'/vendeur/dashboard/commande'} className='text-light'
                data-bs-toggle="tooltip" 
                data-bs-placement="right" 
                data-bs-title="Commandes">
                    <FaClipboardList size={27}/>
                </Link>
            </div>
                <div className=''>
                    <Link href={'/vendeur/dashboard/profilvendeur'} className='text-light'
                    data-bs-toggle="tooltip" 
                    data-bs-placement="right" 
                    data-bs-title="Compte">
                        <FaUser size={27}/>
                    </Link>
                </div>
                <div className=''>
                    <Link href={'/vendeur/dashboard/shop'} className='text-light'
                    data-bs-toggle="tooltip" 
                    data-bs-placement="right" 
                    data-bs-title="Boutique">
                        <FaShop size={27}/>
                    </Link>
                </div>
                <div className=''>
                    <Link href={'/vendeur/dashboard'} className='text-light'
                    data-bs-toggle="tooltip" 
                    data-bs-placement="right" 
                    data-bs-title="Deconnexion">
                        <BiLogOut size={27}/>
                    </Link>
                </div>

        </nav>


        {/* sidebar responsive*/}

            <div className="sideBarSm offcanvas offcanvas-start d-lg-none d-block " data-bs-scroll="true" data-bs-backdrop="false" tabIndex={1} id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                    <div className="offcanvas-header ">
                        <button type="button" className="btn-close btn-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body mx-auto mb-5 d-flex flex-column justify-content-center">
                        <div className='mb-5'>
                            <Link href={'/vendeur/dashboard'} className='text-light'
                            data-bs-toggle="tooltip" 
                            data-bs-placement="right" 
                            data-bs-title="Tableau de bord">
                                <RiDashboardFill size={27} />
                            </Link>
                        </div>
                        <div className='mb-5'>
                            <Link href={'/vendeur/dashboard'} className='text-light'
                            data-bs-toggle="tooltip" 
                            data-bs-placement="right" 
                            data-bs-title="Produits">
                                    <BsBoxSeamFill size={27} />
                            </Link>
                        </div>
                        <div className='mb-5'>
                            <Link href={'/vendeur/dashboard'} className='text-light'
                            data-bs-toggle="tooltip" 
                            data-bs-placement="right" 
                            data-bs-title="Commandes">
                                    <FaClipboardList size={27}/>
                            </Link>
                        </div>
                    </div>

                    <div className="offcanvas-body mt-auto d-flex flex-column justify-content-center">
                        <div className='mb-5'>
                            <Link href={'/vendeur/dashboard/profilvendeur'} className='text-light'
                            data-bs-toggle="tooltip" 
                            data-bs-placement="right" 
                            data-bs-title="Compte">
                                <FaUser size={27}/>
                            </Link>
                        </div>
                        <div className='mb-5'>
                            <Link href={'/vendeur/dashboard/hop'} className='text-light'
                            data-bs-toggle="tooltip" 
                            data-bs-placement="right" 
                            data-bs-title="Boutique">
                                <FaShop size={27}/>
                            </Link>
                        </div>
                        <div className='mb-5'>
                            <Link href={'/vendeur/dashboard'} className='text-light'
                            data-bs-toggle="tooltip" 
                            data-bs-placement="right" 
                            data-bs-title="Deconnexion">
                                <BiLogOut size={27}/>
                            </Link>
                        </div>
                    </div>
                </div>
        </>
        
    )
}
