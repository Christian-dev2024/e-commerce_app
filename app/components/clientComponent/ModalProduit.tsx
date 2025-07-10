import React from 'react'
import { CardDescription } from './CardDescription'
import { typeProduit } from '@/types'


export const ModalProduit = ({idProduit, produitData, modalId} : { idProduit : string, produitData : typeProduit[], modalId : string}) => {
    return ( 

        <div className="modal fade" id={modalId} tabIndex={-1} aria-labelledby={`${modalId}-label`} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id={`${modalId}-label`} >Details de l'article</h1>
                        <button type="button" className="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <CardDescription idProduit={idProduit} produitData={produitData} />
                    </div>
                </div>
            </div>
        </div>
    )
}
