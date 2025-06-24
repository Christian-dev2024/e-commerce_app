import { TypeProfilUser } from '@/types'
import React, { ChangeEvent, Dispatch } from 'react'

export const valueInput = (e : ChangeEvent<HTMLInputElement>, setFormdata : Dispatch<React.SetStateAction<TypeProfilUser>>) => {
    const {name, value} = e.target
    setFormdata((prev)=> ({...prev, [name]: value }))
}