'use client'

import React, { useState } from 'react'
import DashboardLayout from '../DasshLayout'
import { HeadDashBoard } from '@/app/components/vendeur/HeardDashBoard'
import { SideBar } from '@/app/components/vendeur/sideBar'
import { CardProduit } from '@/app/components/vendeur/produitComponent/CardVueProduit'
import { FilterbarProduit } from '@/app/components/vendeur/produitComponent/FilterbarProduit'
import { TableProduit } from '@/app/components/vendeur/produitComponent/TableProduit'
import { CardCommande } from '@/app/components/vendeur/commandComponent/CardVueCommande'


function page() {

    const [nameVendeur, setNameVendeur] = useState('')


    return (
        <>
        <DashboardLayout>
            <div>
                <HeadDashBoard namepage='Liste des Articles' namevendeur={nameVendeur}  />
            </div>
        </DashboardLayout>
        <div className='flex min-h-screen d-flex '>
            <aside className=''>
                <SideBar/>
            </aside>
            <main className='w-100'>
                <div className='mb-5 mt-3'>
                    <CardProduit/>
                </div>
                <div className='mb-5'>
                    <FilterbarProduit/>
                </div>
                <div className=''>
                    <TableProduit/>
                </div>
            </main>
        </div>
        </>
        
        
    )
}

export default page

