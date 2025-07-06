'use client'

import React, { useState } from 'react'
import DashboardLayout from '../DasshLayout'
import { HeadDashBoard } from '@/app/components/vendeur/HeardDashBoard'
import { SideBar } from '@/app/components/vendeur/sideBar'
import CardVueProfil from '@/app/components/vendeur/profilComponent/CardVurProfil'
import { InfoProfil } from '@/app/components/vendeur/profilComponent/InfoProfli'
import { ModalModifProfil } from '@/app/components/vendeur/profilComponent/ModalModifProfil'
import { useProfilStore } from '@/zustand/proflistore'


function page() {

    const dataProfil = useProfilStore(state => state.profilData)

    return (
        <>
        <DashboardLayout>
            <div>
                <HeadDashBoard namepage='Profil ' namevendeur={'en attente du store'}  />
            </div>
        </DashboardLayout>
        <div className='flex min-h-screen d-flex '>
            <aside className=''>
                <SideBar/>
            </aside>
            <main className='w-100'>
                <div className='mb-5 mt-3'>
                    <InfoProfil dataProfil={dataProfil}/>
                </div>
                <div className='mb-5'>
                    <CardVueProfil />
                </div>
                <div className='mb-5'>
                    <ModalModifProfil/>
                </div>
                <div className=''>
                    
                </div>
            </main>
        </div>
        </>
        
        
    )
}

export default page
