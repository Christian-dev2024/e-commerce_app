import React from 'react'
import { FormModifProfil } from './FormModifProfil'

export const ModalModifProfil = () => {
    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Modifier le profil</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                    <div className="modal-body">
                        <FormModifProfil/>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
