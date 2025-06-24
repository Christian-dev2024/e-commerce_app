import React from 'react'
import { toast } from 'react-toastify';
import { Bounce } from 'react-toastify';

export const errorToast = (message : string) => {
    toast.error(message, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
    });
}
