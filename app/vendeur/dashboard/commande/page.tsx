'use client'

import React, { useState } from 'react'
import DashboardLayout from '../DasshLayout'
import { HeadDashBoard } from '@/app/components/vendeur/HeardDashBoard'
import { SideBar } from '@/app/components/vendeur/sideBar'
import { FilterBare } from '@/app/components/vendeur/commandComponent/filterBare'
import TableCommande from '@/app/components/vendeur/commandComponent/TableCommande'
import { Pagination } from '@/app/components/vendeur/commandComponent/Pagination'
import { CardCommande } from '@/app/components/vendeur/commandComponent/CardVueCommande'

function page() {

    const [nameVendeur, setNameVendeur] = useState('')


    return (
        <>
        <DashboardLayout>
            <div>
                <HeadDashBoard namepage='Liste des commandes' namevendeur={nameVendeur}  />
            </div>
        </DashboardLayout>
        <div className='flex min-h-screen d-flex '>
            <aside className=''>
                <SideBar/>
            </aside>
            <main className='w-100'>
                <div className='mb-5 mt-3'>
                    <CardCommande/>
                </div>
                <div className='mb-5'>
                    <FilterBare/>
                </div>
                <div className='mb-5'>
                    <TableCommande/>
                </div>
                <div className=''>
                    <Pagination/>
                </div>
            </main>
        </div>
        </>
        
        
    )
}

export default page
