import { typeProduit } from "@/types"
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

export type TypeProduitClientSTore = {
    data: typeProduit[]
    setData: (newData : typeProduit[]) => void
}

export const useGetProduitClient = create<TypeProduitClientSTore>()(
    persist(
        (set)=>({
            data : [],
            setData: (newData : typeProduit[])=> set({data: newData})
        }),
        {
            name : 'article-client',
            storage : createJSONStorage(()=> localStorage)
        }
    )
)