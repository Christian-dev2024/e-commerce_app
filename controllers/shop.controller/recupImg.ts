import { Dispatch, RefObject } from "react"

    export const handleImageChange = (e: React.ChangeEvent<HTMLInputElement> , 
        setImage: Dispatch<React.SetStateAction<string>>, setFile: Dispatch<React.SetStateAction<File | null>>, ) => {
            
        const fileSelected = e?.target?.files![0]

        if (fileSelected) {
            const url = URL.createObjectURL(fileSelected)
            setImage(url)
            setFile(fileSelected)
        } 
    }