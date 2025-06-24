import gsap from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { RefObject } from "react"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)


export const Slide = (divRef:RefObject<HTMLElement | null>, delay: number, duration: number ) => {
    if (!divRef.current) return;
    divRef.current.classList.remove('invisible')
    
    gsap.fromTo(divRef.current,
        {
            opacity : 0,
            x : -200,
            
        },
        {
            opacity :1, 
            x : 0,
            visibility: "visible",
            delay : delay,
            duration : duration,
            scrollTrigger : {
                trigger : divRef.current,
                start : 'top center',
                end : 'bottom center',
                toggleActions: 'play none none reverse',
            }
        }
    )

    ScrollTrigger.refresh();
}


export const heroAnimation = ( heroRef: RefObject<HTMLElement | null>, delay : number ) => {
    if(!heroRef.current) return ;
    heroRef.current.classList.remove('invisible')
    
    gsap.fromTo(heroRef.current, 
        {
            opacity :0, 
            x : 400
        },
        {
            opacity :1, 
            x : 0,
            delay : delay,
        }
    )
}


export const textHeroAnimaftion = (bloctextRef: RefObject<HTMLElement | null>, delay: number) => {
    if (!bloctextRef.current) return; 
    bloctextRef.current.classList.remove('invisible');

    gsap.fromTo(bloctextRef.current, 
        {
            opacity: 0, 
            x: -400
        },
        {
            opacity: 1, 
            x: 0,
            delay: delay,
        }
    )
}

export const textSloganHero = (textRef : RefObject<HTMLElement | null>, d : number,  ) => {
    gsap.fromTo(textRef.current, 
        {
            opacity :0, 
            y : 200
        },
        {
            opacity :1, 
            y : 0,
            delay : d,
        }
    )
}


export const badgesAnimation = ( heroRef: RefObject<HTMLElement | null>, delay : number ) => {
    if(!heroRef.current) return ;
    heroRef.current.classList.remove('invisible')
    
    gsap.fromTo(heroRef.current, 
        {
            opacity :0, 
            x : -400
        },
        {
            opacity :1, 
            x : 0,
            delay : delay,
        }
    )
}
