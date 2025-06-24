'use client'

import FormVendeur from "@/app/components/auth/formVendeurInscription"

function inscriptionVendeur() {
    
    return (

    <>
        <section className='min-vh-100 row mx-auto'>
            <div className='boxCover2 col-lg-12 container mx-auto'>
                <div>
                    <h2 className="fw-bold mb-3">Créez votre boutique et commencez à vendre dès aujourd’hui !</h2>
                </div>
                <div className='container'>
                    <p className='fs-5'>
                        Rejoignez notre plateforme et développez votre activité en ligne. En quelques étapes simples,
                        créez votre compte vendeur, configurez votre boutique et commencez à toucher des milliers de clients.
                    </p>
                </div>
                <div className="row g-4 mt-3 container">
                    <div>
                        <h2 className="fw-bold">Avec nous</h2>
                    </div>
                        <div className="col-6 col-lg-3"> 
                            <div className="glassEffect">
                                <li className="fs-6 fw-bold">✅ Vendez vos produits 24h/24, 7j/7</li>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="glassEffect">
                                <li className="fs-6 fw-bold">✅ Suivi facile de vos commandes et paiements</li>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="glassEffect">
                                <li className="fs-6 fw-bold">✅ Visibilité accrue grâce à notre large communauté</li>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3 mb-5">
                            <div className="glassEffect">
                                <li className="fs-6 fw-bold">✅ Assistance dédiée pour vous accompagner</li>
                            </div>
                        </div>
                        <div>
                            <h4 className="fw-bold">Veuillez remplir le formulaire ci-dessous pour crée votre compte vendeur</h4>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-12 col-12 mt-4 p-3">
                    <div>
                        <FormVendeur />
                    </div>
                    <div className="col-lg-12 col-md-12 col-12">
                        <p className="text-center mt-4 text-muted">
                        ⚠️ <strong>Assurez-vous d’utiliser un email valide</strong> : un lien de vérification vous sera envoyé pour activer votre compte.
                        </p>
                    </div>
                        
                </div>
        </section>
    </>
        
    )
}

export default inscriptionVendeur
