import React from 'react'

function Carrousel(){
    return(
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src='./images/01.png' className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src='./images/03.png' className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src='./images/04.png' className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src='./images/05.png' className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src='./images/06.png' className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src='./images/14.png' className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
export default Carrousel;
