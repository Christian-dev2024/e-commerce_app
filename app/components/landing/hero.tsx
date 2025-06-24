'use client'

import Image from 'next/image'
import styles from '../landing/landing.module.css'

export const Hero = () => {

    return (
        <div >
            <div id="carouselExample" data-bs-ride="carousel" data-bs-interval="5000" className={`${styles.carouselresponsive} carousel slide rounded-3`} style={{ maxWidth: "1000px" }} >
                <div className="carousel-inner">
                        <div className="carousel-item active" style={{ position: "relative" }}>
                            <Image src="/images/hero1.jpg" className={`d-block img-fluid rounded-3`} width={800} height={800} alt="hero_1" layout='responsive'  loading='lazy'/>
                                <div className={styles.bgOverlay}>
                                    <div className='carousel-caption d-block' >
                                        <h5>Titre de l'image 1</h5>
                                        <p>Description ou slogan ici</p>
                                        <button className="btn btn-primary">Découvrir</button>
                                    </div>
                                </div>
                        </div>
                        <div className="carousel-item">
                            <Image src="/images/hero2.jpg" className="d-block img-fluid rounded-3" width={800} height={800} alt="hero_2" layout='responsive' loading='lazy'/>
                                <div className={styles.bgOverlay}>
                                    <div className='carousel-caption d-block' >
                                        <h5>Titre de l'image 1</h5>
                                        <p>Description ou slogan ici</p>
                                        <button className="btn btn-primary">Découvrir</button>
                                    </div>
                                </div>
                        </div>
                        <div className="carousel-item">
                            <Image src="/images/hero4.jpg" className="d-block img-fluid rounded-3" width={800} height={900} alt="hero_3" layout='responsive' loading='lazy'/>
                                <div className={styles.bgOverlay}>
                                    <div className='carousel-caption d-block' >
                                        <h5>Titre de l'image 1</h5>
                                        <p>Description ou slogan ici</p>
                                        <button className="btn btn-primary">Découvrir</button>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
        </div>
    )
}
