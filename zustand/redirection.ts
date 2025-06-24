import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

export type RedirectionStoreType = {
    Redirection : boolean,
    setRedirection : (newDirection : boolean ) => void
}

export const useRedirectionStore = create<RedirectionStoreType>()(
    persist(
        (set)=>({
            Redirection : false,
            setRedirection : (newDirection : boolean ) => set ({Redirection: newDirection })
        }),
        {
            name : 'cle_direction',
            storage: createJSONStorage(() => localStorage)
        }
    )
);