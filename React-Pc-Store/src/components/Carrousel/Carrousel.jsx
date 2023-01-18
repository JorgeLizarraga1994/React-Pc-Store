import React from 'react'

function Carrousel(){
    return(
        <div id="carouselExampleControls" className="carousel slide w-100 " data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src='https://cdn.jsdelivr.net/gh/persano/BannersWebMaximus/top-slider/gigabyte-rtx-22.jpg' className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src='https://cdn.jsdelivr.net/gh/persano/BannersWebMaximus/top-slider/sillas23.jpg' className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src='https://cdn.jsdelivr.net/gh/persano/BannersWebMaximus/top-slider/pcarmadas23.jpg' className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src='https://cdn.jsdelivr.net/gh/persano/BannersWebMaximus/top-slider/ryzen23.jpg' className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src='https://cdn.jsdelivr.net/gh/persano/BannersWebMaximus/top-slider/nvidiaNavidad.jpg' className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src='https://cdn.jsdelivr.net/gh/persano/BannersWebMaximus/top-slider/asusbanner.jpg' className="d-block w-100" alt="..."/>
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
