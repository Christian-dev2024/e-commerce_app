'use client'

import { badgesAnimation, heroAnimation, Slide, textHeroAnimaftion } from "../controllers/animation/heroAnimation";
import { Hero } from "./components/landing/hero";
import { useEffect, useRef } from 'react'
import { TextHero } from "./components/landing/textHero";
import { CatergoriesProduits } from "./components/landing/catergories";
import { Badges } from "./components/landing/badges";
import Navbar from "./components/landing/Navbar";
import { Article } from "./components/landing/newProduit";
import { SwiperComponents } from "./components/landing/swiper";
import { Footer } from "./components/landing/footer";


export default function Home() {

  const heroRef = useRef(null)
  const bloctextRef = useRef(null)
  const badgesRef = useRef(null)
  const secHeroRef = useRef(null)


  useEffect(()=>{
    badgesAnimation(badgesRef, 2)
  }, [])

  useEffect(()=> {
    heroAnimation(heroRef, 1.5)
  }, [])

  useEffect(()=>{
    textHeroAnimaftion(bloctextRef, 1)
  }, [])

  useEffect(()=>{
        Slide(secHeroRef, 0.2, 0.7)
    }, [])

  
  return (
    <>
    {/*  */}
    <nav>
      <Navbar/>
    </nav>

    <section className="row min-vh-100 mt-lg-4 py-5 container-fluid container-md mx-auto">
        <div className={`col-lg-6 invisible`} ref={bloctextRef}>
          <TextHero/>
        </div>
        <div className="col-12 col-lg-6 invisible" ref={heroRef}>
          <Hero/>
        </div>
        <div className="col-12 col-lg-12 mx-auto align-items-center pt-4 invisible" ref={badgesRef}>
          <Badges/>
        </div>
      </section>

      {/* section categorie */}
      <section className="pb-3 pb-lg-5 min-vh-100 ">
        <div className="mb-5 invisible" ref={secHeroRef}>
          <CatergoriesProduits/>
        </div>
        <div className="mt-5 mb-5" >
          <Article/>
        </div>
        <div className="mb-5">
          <SwiperComponents/>
        </div>
      </section>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}
