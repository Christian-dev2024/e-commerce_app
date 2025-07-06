import { typeProduit } from "@/types"
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

export type TypeproduitGetStore = {
    produitGet : typeProduit[] 
    setProduitGet : (newProduitGet : typeProduit[]) => void
}

export const useProduitGetStore = create<TypeproduitGetStore>()(
    persist(
        (set)=>({
            produitGet: [],
            setProduitGet: (newProduitGet : typeProduit[])=> set({produitGet: newProduitGet})
        }),
        {
            name : 'produit-store', 
            storage: createJSONStorage(()=> localStorage)
        }
    )
)