import React from 'react'

export const HeroComponent = () => {
    return (
        <div id="carouselExampleAutoplaying" className="carousel slide " data-bs-ride="carousel">
            <div className="carousel-inner borderHero">
                <div className="carousel-item active">
                    <img src="/images/hero1.jpg" className="d-block w-100" alt="image 1"/>
                </div>
                <div className="carousel-item">
                <img src="/images/hero2.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="/images/hero3.jpg" className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
