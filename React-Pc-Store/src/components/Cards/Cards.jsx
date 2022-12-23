import React from 'react'

function Cards() {
        return(
        <div className='container'>
            <div className="card col-5">
                <img src="./images/imac 27.png" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">IMAC 27</h5>
                    <p className="card-text">$366,347.52</p>
                    <a href="#" className="btn btn-primary">Ver Producto</a>
                </div>
            </div>
            <div className="card col-5">
                <img src="./images/MSI-MOTHER-Z590.jpg" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">MSI MOTHER Z590 GODLIKE s1200 11th 10th Gen</h5>
                    <p className="card-text">$145,824.85</p>
                    <a href="#" className="btn btn-primary">Ver Producto</a>
                </div>
            </div>
            <div className="card col-5">
                <img src="./images/apple-mac-mini.png" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">Apple Mac mini [MGNR3] M1 Chip - 256 GB</h5>
                    <p className="card-text">$349,529.60</p>
                    <a href="#" className="btn btn-primary">Ver Producto</a>
                </div>
            </div>
            <div className="card col-5">
                <img src="./images/intel-i7-turbo-10gen.jpg" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">INTEL MICRO CORE I7 10700K</h5>
                    <p className="card-text">$44,716.36</p>
                    <a href="#" className="btn btn-primary">Ver Producto</a>
                </div>
            </div>
        </div>    
        )
}


export default Cards