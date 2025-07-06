'use client'

import DashboardLayout from './DasshLayout'
import { HeadDashBoard } from '@/app/components/vendeur/HeardDashBoard'
import { BlocVue } from '@/app/components/vendeur/dashboardComponent/blocVue'
import { Commande } from '@/app/components/vendeur/dashboardComponent/commande'
import { Listeproduit } from '@/app/components/vendeur/dashboardComponent/Listproduit'
import { SideBar } from '@/app/components/vendeur/sideBar'

function page() {

    return (
        <>
        <DashboardLayout>
            <div>
                <HeadDashBoard namepage='Tableau de bord' namevendeur={'en attente du store'}  />
            </div>
        </DashboardLayout>
        <div className='flex min-h-screen d-flex '>
            <aside className=''>
                <SideBar/>
            </aside>
            <main className='w-100'>
                <div className='mb-3 mt-3'>
                    <BlocVue/>
                </div>
                <div className='mb-3'>
                    <Commande/>
                </div>
                <div className=''>
                    <Listeproduit/>
                </div>
            </main>
        </div>
        </>
        
    )
}

export default page
