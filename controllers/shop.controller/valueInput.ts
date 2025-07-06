import { TypeShop } from '@/types'
import React, { ChangeEvent, Dispatch } from 'react'

export const valueInput = (e : ChangeEvent<HTMLInputElement> | 
    ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLTextAreaElement>, 
    setFormdata : Dispatch<React.SetStateAction<TypeShop>>) => {

    const {name, value} = e.target
    setFormdata((prev)=> ({...prev, [name]: value }))
}