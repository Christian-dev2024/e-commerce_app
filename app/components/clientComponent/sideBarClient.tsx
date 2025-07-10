import Link from 'next/link'
import React from 'react'

export const SideBarClient = () => {
    return (
        <nav className="bg-light h-100 rounded mb-4 ">
            <h5 className="mb-3 fw-bold fs-4">Mon Compte</h5>
            <ul className="nav flex-column">
                <li className="nav-item ">
                    <Link href="/clientpage/profil" className="nav-link hoversidebar">Informations personnelle</Link>
                </li>
                <li className="nav-item">
                    <Link href="/clientpage/profil/commande" className="nav-link hoversidebar">Commandes</Link>
                </li>
                <li className="nav-item">
                    <Link href="/clientpage/profil/payments" className="nav-link hoversidebar">Paiements</Link>
                </li>
                <li className="nav-item">
                    <Link href="/clientpage/profil/addresses" className="nav-link hoversidebar">Adresses</Link>
                </li>
                <li className="nav-item">
                    <Link href="/clientpage/profil/notifications" className="nav-link hoversidebar">Notifications</Link>
                </li>
                <li className="nav-item">
                    <Link href="/clientpage/profil/lock" className="nav-link hoversidebar">Sécurité</Link>
                </li>
            </ul>
        </nav>
    )
}
