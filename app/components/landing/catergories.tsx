'use client'

import Link from 'next/link'
import styles from '../landing/landing.module.css'
import Image from 'next/image'

export const CatergoriesProduits = () => {

    return (
        <div className='d-flex flex-column align-items-center gap-lg-5 container'>
            <div className='pb-4 d-flex justify-content-center'>
                <h3 className='fw-bold fs-3'>Explore nos catégories</h3>
            </div>
            <div className="container-fluid overflow-hidden">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6 mb-5">
                        <div className={`${styles.dimensionCard} ${styles.cardHover} mx-auto`}>
                            <div>
                                <p className='text-center fst-italic fw-bold fs-4'>basketball</p>
                                <Image src='/images/catimg1.jpg' layout='responsive' loading='lazy' height={200} width={200} className='rounded-4' alt='...'/>
                            </div>
                            <div className= {`${styles.linkOverlay} mt-2`}>
                                <Link href={'/catergorie/basket'} className='text-decoration-none text-light fw-medium fs-5'>consultez</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className={`${styles.dimensionCard} ${styles.cardHover} mx-auto`}>
                            <div>
                                <p className='text-center fst-italic fw-bold fs-4'>FootBall</p>
                                <Image src='/images/catimg2.jpg' layout='responsive' loading='lazy' height={800} width={800} className='rounded-4' alt='...'/>
                            </div>
                            <div className= {`${styles.linkOverlay} mt-2`}>
                                <Link href={'/catergorie/foot'} className='text-light text-decoration-none fw-medium fs-5'>consultez</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className={`${styles.dimensionCard} ${styles.cardHover} mx-auto`}>
                            <div>
                                <p className='text-center fst-italic fw-bold fs-4'>Musculation</p>
                                    <Image src='/images/hero3.jpg' layout='responsive' loading='lazy' height={800} width={800} className='rounded-4' alt='...'/>
                                        <div className= {`${styles.linkOverlay} mt-2`}>
                                            <Link href={'/catergorie/gym'} className='text-light text-decoration-none fw-medium fs-5'>consultez</Link>
                                        </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className={`${styles.dimensionCard} ${styles.cardHover} mx-auto`}>
                            <div>
                                <p className='text-center fst-italic fw-bold fs-4'>Accessoire</p>
                                    <Image src='/images/catimg7.jpg' layout='responsive' loading='lazy' height={800} width={800} className='rounded-4' alt='...'/>
                                        <div className= {`${styles.linkOverlay} mt-2`}>
                                            <Link href={'/catergorie/accessoire'} className='text-light text-decoration-none fw-medium fs-5' >consultez</Link>
                                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
