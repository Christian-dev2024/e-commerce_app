import gsap from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { RefObject } from "react"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export const sideConnexion = (divRef: RefObject<HTMLElement | null>, delay: number, duration: number) => {
    if(!divRef.current) return ; 
    divRef.current.classList.remove('invisible')

    gsap.fromTo(divRef.current, 
        {
            opacity :0, 
            x : -300
        },
        {
            opacity :1, 
            x : 0,
            delay : delay,
        }
    )
}

export const sideInscription = (divRef: RefObject<HTMLElement | null>, delay: number, duration: number) => {
    if(!divRef.current) return ; 
    divRef.current.classList.remove('invisible')

    gsap.fromTo(divRef.current, 
        {
            opacity :0, 
            x : 300
        },
        {
            opacity :1, 
            x : 0,
            delay : delay,
        }
    )
}