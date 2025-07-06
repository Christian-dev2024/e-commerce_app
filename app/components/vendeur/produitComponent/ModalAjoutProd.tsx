import React from 'react'
import { FormAjoutProd } from './formAjoutProd'

export const ModalAjoutProd = () => {
    return (
        <>
            <div className="modal fade" id="ModalAjoutProduit" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" id='btnCloseModal' className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <FormAjoutProd/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
