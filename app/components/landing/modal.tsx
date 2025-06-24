import styles from '../landing/landing.module.css'

export const SearchModal = () => {
    return (
        <div className="modal fade m-0 p-0" id="exampleModal" tabIndex={-1}  aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="d-flex justify-content-center align-items-center mx-4">
                            <div className="modal-body ">
                                <input type="text" className={`${styles.searchBar} w-100 border-0 shadow-none`} placeholder="recherche.."/>
                            </div>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    </div>
                </div>
        </div>
    )
}
