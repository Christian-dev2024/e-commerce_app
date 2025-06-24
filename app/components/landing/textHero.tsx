'use client'

import { useEffect, useRef } from 'react'
import styles from '../landing/landing.module.css'
import { textSloganHero } from '../../../controllers/animation/heroAnimation'

export const TextHero = () => {

    const text1Ref = useRef<HTMLDivElement>(null)
    const text2Ref = useRef<HTMLDivElement>(null)
    const text3Ref = useRef<HTMLDivElement>(null)
    const text4Ref = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        
        textSloganHero(text1Ref, 2)
        textSloganHero(text2Ref, 3)
        textSloganHero(text3Ref, 4)
        textSloganHero(text4Ref, 5)
    }, [])

    return (
        <div className='container mx-auto mt-3 d-none d-lg-block'>
            <div className='row'>
                    <div className={`${styles.geartext} mx-auto mx-lg-5 mb-lg-4 col-lg-12`} ref={text1Ref}>
                        <p > T'a le  <span> Style</span> </p>
                    </div>
                    <div className={`${styles.geartext} mx-auto mx-lg-5 mb-lg-4 col-lg-12`} ref={text2Ref}>
                        <p > T'a le  <span> Power</span> </p>
                    </div>
                    <div className={`${styles.geartext} mx-auto mx-lg-5 mb-lg-4 col-lg-12`} ref={text3Ref}>
                        <p > On a le  <span> Boost !!!</span> </p>
                    </div>
                    <div className={`${styles.geartext1} col-lg-12 container w-100`} ref={text4Ref}>
                        <p > 
                            Foot, Basket, Muscu. Rien de plus. Rien de moins.
                            L’essentiel pour booster ton niveau, dès aujourd’hui.
                        </p>
                    </div>
            </div>
        </div>
    )
}
