import React from 'react'

export const CardProduit = () => {
    return (

            <>
                <div className="container px-4 text-center d-lg-block d-none">
                    <div className="row g-2">
                        <div className="col-lg-3 col-6">
                            <div className="p-2 border rounded-3 item shadow">
                                <h6>✅ Total produits en vente</h6>
                                <p>45</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="p-2 border rounded-3 item shadow">
                                <h6>⚠️ Produits en faible stock</h6>
                                <p>45</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="p-2 border rounded-3 item shadow">
                                <h6>❌ Produits en rupture</h6>
                                <p>45</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="p-2 border rounded-3 item shadow">
                                <h6>🔄 Produits récemment modifiés</h6>
                                <p>45</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container px-2 d-lg-none">
                        <div className="overflow-auto">
                            <div className="d-flex flex-nowrap gap-3 pb-2">
                                <div className="border rounded-3 p-3 shadow text-center item" style={{ minWidth: "200px" }}>
                                    <h6 className="mb-1">✅ Total produits en vente</h6>
                                    <p className="mb-0 fw-bold">45</p>
                                </div>

                                <div className="border rounded-3 p-3 shadow text-center bg-white" style={{ minWidth: "200px" }}>
                                    <h6 className="mb-1">⚠️ Produits en faible stock</h6>
                                    <p className="mb-0 fw-bold">45</p>
                                </div>

                                <div className="border rounded-3 p-3 shadow text-center item" style={{ minWidth: "200px" }}>
                                    <h6 className="mb-1">❌ Produits en rupturee</h6>
                                    <p className="mb-0 fw-bold">45</p>
                                </div>

                                <div className="border rounded-3 p-3 shadow text-center bg-white" style={{ minWidth: "200px" }}>
                                    <h6 className="mb-1">🔄 Produits récemment modifiés</h6>
                                    <p className="mb-0 fw-bold">45</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </>
    )
}
