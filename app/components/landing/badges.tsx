'use client'

import { FaLock, FaTruck, FaUndoAlt } from 'react-icons/fa'
import styles from '../landing/landing.module.css'

export const Badges = () => {

    return (
        <div className={`text-center container mx-auto`}>
                <div className={`row py-2 overflow-hidden text-center`}>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="p-2 d-flex flex-column align-items-center">
                            <div>
                                <FaTruck className={`${styles.bgBadges}`} size={37}/>
                            </div>
                            <div className=''>
                                <p className='fs-5'>
                                    livraison offerte dès 10000 FCFA
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-lg-0">
                        <div className="p-2 d-flex flex-column justify-content-center align-items-center">
                            <div>
                                <FaUndoAlt className={`${styles.bgBadges}`} size={37}/>
                            </div>
                            <div className=''>
                                <p className='fs-5'>
                                    Retours gratuits sous 30 jours
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-4 mb-lg-0">
                        <div className="p-2 d-flex flex-column align-items-center">
                            <div>
                                <FaLock className={`${styles.bgBadges}`} size={37} />
                            </div>
                            <div className=''>
                                <p className='fs-5'>
                                    Paiement sécurisé
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
