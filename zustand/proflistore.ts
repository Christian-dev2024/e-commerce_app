import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware";

export type ProfilUser = {
    nom: string,
    prenom: string,
    numero: string,
    adresse: string,
    statut: string,
    uid: string
}

type ProfilStore = {
    profilData : ProfilUser | null;
    setProfilData : (newProfil : ProfilUser) => void
}

export const useProfilStore = create<ProfilStore>()(
    persist(
        (set) => ({
            profilData: null,
            setProfilData: (newProfil : ProfilUser) => set({ profilData: newProfil }),
        }),
        {
            name: 'profil-storage', // Clé de stockage dans localStorage
            storage: createJSONStorage(() => localStorage) // Peut aussi être sessionStorage
        }
    )
);