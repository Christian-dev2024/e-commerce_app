import React from 'react'

export const FormModifProfil = () => {
    return (
        <form className='container'>
            <div className="mb-3">
                <label>Nom du vendeur</label>
                <input type="text" className="form-control shadow-none" />
            </div>
            <div className="mb-3">
                <label>Email</label>
                <input type="text" className="form-control shadow-none" />
            </div>
            <div className="mb-3">
                <label>Téléphone</label>
                <input type="text" className="form-control shadow-none" />
            </div>
            <div className="mb-3">
                <label>Addresse</label>
                <input type="text" className="form-control shadow-none" />
            </div>
            <div className="mb-3">
                <button type='button' className='w-100 boxVue'>Enregistré</button>
            </div>
        </form>
    )
}
