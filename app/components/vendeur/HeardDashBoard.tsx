import React from 'react'
import { FaUser } from 'react-icons/fa'
import { ImMenu } from 'react-icons/im'

export const HeadDashBoard = ({ namepage, namevendeur  }: { namepage: string, namevendeur: string}) => {
    return (
        <nav className="navbar bg-body-tertiary border">
            <div className="container-fluid ">
                <button className="btn bg-transparent d-lg-none mb-auto" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                    <ImMenu />
                </button>
                <div className='d-flex justify-content-center align-items-center'>
                    <span className="navbar-text">
                        {namepage}
                    </span>
                </div>

                <div className='d-flex justify-content-center align-items-center'>
                    <span className='mx-2'>
                        <FaUser size={15}/>
                    </span>
                    <span className="navbar-text mt-lg-1">
                        {namevendeur} 
                    </span>
                </div>

            </div>
        </nav>      
    )
}
