'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'; 
import Image from 'next/image';

export const SwiperComponents = () => {
    return (
        <div >
            <h4 className="mb-2 text-center fs-3 fw-bold"> Boosté par les plus grandes marques </h4>
            <Swiper
            modules={[Autoplay, FreeMode]}
            spaceBetween={40}
            slidesPerView="auto"
            allowTouchMove={false}
            loop={true}
            autoplay={{
                delay: 0,             // aucun délai entre les slides
                disableOnInteraction: false,
                pauseOnMouseEnter: false
            }}
            speed={5000}             // durée du défilement complet
            freeMode={{
                    enabled: true,
                    momentum: false, // <-- ici
                }} // pas d'accélération/freinage
        >
            <div >
                <SwiperSlide>
                <div>
                    <Image src={'/logo/addidaslogo.jpg'} alt='..logo' height={100} width={100} loading='lazy'/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <Image src={'/logo/puma.jpg'} alt='..logo' height={100} width={100} loading='lazy'/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <Image src={'/logo/Nike.jpg'} alt='..logo' height={100} width={100} loading='lazy'/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <Image src={'/logo/balance.jpg'} alt='..logo' height={100} width={100} loading='lazy'/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <Image src={'/logo/face.jpg'} alt='..logo' height={100} width={100} loading='lazy'/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <Image src={'/logo/jordan.jpg'} alt='..logo' height={70} width={70} loading='lazy'/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <Image src={'/logo/reebook.jpg'} alt='..logo' height={100} width={100} loading='lazy'/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <Image src={'/logo/colombia.jpg'} alt='..logo' height={100} width={100} loading='lazy'/>
                </div>
            </SwiperSlide>
            </div>
        </Swiper>
        </div>
    )
}
