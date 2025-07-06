import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
import { LuEye, LuPenLine } from 'react-icons/lu'

export const Listeproduit = () => {
    return (<div className="container">
        <h4 className="mb-2 bgTable">Produits les plus vendus</h4>

        <div className=" table-responsive">
            <table className="table table-striped border align-middle shadow">
            <thead>
                <tr>
                <th scope="col">Ref.produit</th>
                <th scope="col">Nom produit</th>
                <th scope="col">Quantité</th>
                <th scope="col">Image</th>
                <th scope="col">Statut</th>
                <th scope="col" className='text-center'>Actions </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Produit A</td>
                <td>120</td>
                <td><img src="https://via.placeholder.com/40" alt="prod" /></td>
                <td><span className="badge bg-success">En stock</span></td>
                <td className='d-flex justify-content-around'>
                    <button className="bg-transparent border-0 text-warning"><LuEye /></button>
                    <button className="bg-transparent border-0 text-info"><LuPenLine /></button>
                    <button className="bg-transparent border-0 text-danger"><FaRegTrashAlt /></button>
                </td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Produit B</td>
                <td>80</td>
                <td><img src="https://via.placeholder.com/40" alt="prod" /></td>
                <td><span className="badge bg-warning">Faible stock</span></td>
                <td className='d-flex justify-content-around'>
                    <button className="bg-transparent border-0 text-warning"><LuEye /></button>
                    <button className="bg-transparent border-0 text-info"><LuPenLine /></button>
                    <button className="bg-transparent border-0 text-danger"><FaRegTrashAlt /></button>
                </td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Produit C</td>
                <td>0</td>
                <td><img src="https://via.placeholder.com/40" alt="prod" /></td>
                <td><span className="badge bg-danger">Rupture</span></td>
                <td className='d-flex justify-content-around'>
                    <button className="bg-transparent border-0 text-warning"><LuEye /></button>
                    <button className="bg-transparent border-0 text-info"><LuPenLine /></button>
                    <button className="bg-transparent border-0 text-danger"><FaRegTrashAlt /></button>
                </td>
                </tr>
            </tbody>
            </table>
        </div>
        </div>
    )
}
