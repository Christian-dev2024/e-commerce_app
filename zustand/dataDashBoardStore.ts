import { TypeShop } from "@/types";
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware";

type TypeDashBoardStore = {
    data : TypeShop | null 
    setData : (newData : TypeShop) => void
}

export const useDataDashBoard = create<TypeDashBoardStore>()(
    persist(
        (set)=>({
            data : null,
            setData: (newData : TypeShop) => set({data : newData}), 
        }),
        {
            name: 'dataDashBoard-storage',
            storage: createJSONStorage(() => localStorage)
        }
    )
)