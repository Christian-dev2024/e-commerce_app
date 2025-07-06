'use client'

import React, { useState } from 'react'
import DashboardLayout from '../DasshLayout'
import { HeadDashBoard } from '@/app/components/vendeur/HeardDashBoard'
import { SideBar } from '@/app/components/vendeur/sideBar'
import { CardInfoShop } from '@/app/components/vendeur/shop/CardInfoShop'
import { ShopStatsCard } from '@/app/components/vendeur/shop/CardVueShop'
import { useDataDashBoard } from '@/zustand/dataDashBoardStore'

function page() {

    const [nameVendeur, setNameVendeur] = useState('')

    const dataShop = useDataDashBoard(state => state.data)

    console.log(dataShop, 'donnée du store')

    return (
        <>
        <DashboardLayout>
            <div>
                <HeadDashBoard namepage='Boutique' namevendeur={nameVendeur}  />
            </div>
        </DashboardLayout>
        <div className='flex min-h-screen d-flex '>
            <aside className=''>
                <SideBar/>
            </aside>
            <main className='w-100'>
                <div className='mb-5 mt-3'>
                    <CardInfoShop dataShop={dataShop}/>
                </div>
                <div className='mb-5'>
                    <ShopStatsCard/>
                </div>
            </main>
        </div>
        </>
        
        
    )
}

export default page
