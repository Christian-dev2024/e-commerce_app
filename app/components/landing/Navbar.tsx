'use client'

import { LuShoppingCart, LuUserRound } from 'react-icons/lu';
import styles from '../landing/landing.module.css'
import { CgMenuGridR } from "react-icons/cg";
import { FaPhone, FaShoppingBag, FaUsers } from 'react-icons/fa';
import { SearchModal } from './modal';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRedirectionStore } from '@/zustand/redirection';
import { redirect } from '@/controllers/controller.auth/controller.redirect';


function Navbar() {

    const setRedirect = useRedirectionStore(state => state.setRedirection)
    const router = useRouter()

    return (
        <>
        <nav className=" navbar bg-body-tertiary navbarre">
            <div className="container-fluid">
                <div className='px-lg-5 px-md-5 px-sm-5'>
                    <Link href={"/"} className='text-decoration-none'>
                        <i className=' fs-4 fw-bold bgTable'>GEAR BOOST</i>
                    </Link>
                </div>
                <div className='d-none d-lg-block d-lg-flex justify-content-center align-content-center gap-5'>
                    <div>
                        <Link href={"/about"} className={`${styles.btnConnect} text-dark text-decoration-none`}>
                            <FaUsers size={22} className='mb-1 mx-1' /> À propos
                        </Link>
                    </div>
                    <div>
                        <Link href={"/products"} className={`${styles.btnConnect} text-dark text-decoration-none`}>
                        <FaShoppingBag size={20} className='mb-2 mx-1' /> Produits
                        </Link>
                    </div>
                    <div>
                        <Link href={"/contact"} className={`${styles.btnConnect} text-dark text-decoration-none`}>
                            <FaPhone  size={18} className='mb-2 mx-1'/> Contactez-nous
                        </Link>
                    </div>
                </div>
                <div className=' me-4 d-flex justify-content-center align-items-center gap-4 gap-lg-5 px-lg-5 px-md-5'>
                    <div>
                        <button className={`${styles.btnIcons} text-decoration-none bg-transparent border-0`} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"> 
                            <i className={"bi bi-search text-dark fs-4"} ></i>
                        </button>
                    </div>
                    <div>
                        {/* bouton de redirection */}
                        <button type='button' onClick={()=> redirect(router, setRedirect )} className={`${styles.btnIcons} border-0 bg-transparent`}> 
                            <LuUserRound className={`${styles.TextLogo}`} size={24}/>
                        </button>
                    </div>
                    <div className='d-none d-lg-block'>
                        <Link href={"/panier"} className={`${styles.btnIcons} text-decoration-none`}> 
                            <LuShoppingCart className={`${styles.TextLogo}`} size={24} />
                        </Link>
                    </div>
                    <div className='d-block d-lg-none'>
                        <button className={`${styles.btnIcons} text-decoration-none border-0 bg-transparent`}type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"> 
                            <CgMenuGridR className={`${styles.TextLogo}`} size={24}/>
                        </button>
                    </div>
                </div>
            </div>
        </nav>

        {/* modal de la barre de recherche */}
                <SearchModal/>
        
            {/* menu de la barre de navigation */}
                <div className={`${styles.bgMenu} offcanvas offcanvas-end w-75 rounded-start-5`} tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title text-light" id="offcanvasRightLabel">Menu</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body d-flex flex-column">
                        <div className='py-3 d-flex align-items-center'>
                            <Link href={"/about"} className={`${styles.btnConnect} text-light text-decoration-none`}>
                                <FaUsers size={24} className='mb-1 mx-1' />  À propos de nous
                            </Link>
                        </div>
                        <div className='py-3  d-flex align-items-center'>
                            <Link href={"/products"} className={`${styles.btnConnect} text-light text-decoration-none`}>
                                <FaShoppingBag size={24} className='mb-1 mx-1' /> Catégories produits
                            </Link>
                        </div>
                        <div className='py-3'>
                            <Link href={"/contact"} className={`${styles.btnConnect} text-light text-decoration-none`}>
                                <FaPhone  size={24} className='mb-1 mx-1'/> Contactez-nous
                            </Link>
                        </div>

                        <div className='py-3'>
                            <Link href={"/panier"} className={`${styles.btnIcons} text-light text-decoration-none`}> 
                                <LuShoppingCart className='mb-1 mx-1' size={24} /> panier
                            </Link>
                        </div>
                    </div>
                </div>

        </>

    )
}

export default Navbar
