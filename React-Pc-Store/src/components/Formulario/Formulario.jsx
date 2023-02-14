import "./Formulario.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Formulario = () => {

        const form = useRef();
        
        const sendEmail = (e) => {
            e.preventDefault();
        
        emailjs.sendForm('service_909nfjh', 'template_3pd6pm7', form.current, '3Kg_eOFwOTQb3LKc9')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        };
        

    return (
                <header>
                    <section>
                        <div className="container">
                            <div className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-7 mx-auto d-flex justify-content-center flex-column">
                            <h3 className="text-center pt-4 text-white">Contactanos</h3>
                            <form id="form" className="form"  method="POST">
                                <div className="card-body">
                                <div className="row">
                                    <div className="ps-2">
                                        <div className="input-group input-group-dynamic pt-4 ">
                                            <label className="form-label text-white">Nombre</label>
                                            <input name="nombre" className="form-control" id="nombre" placeholder="Ingrese su nombre" aria-label="First Name..." type="text" />
                                        </div>
                                        <div>
                                            <div className="input-group input-group-dynamic pt-4">
                                                <label className="form-label text-white">Apellido</label>
                                                <input name="apellido" type="text" id="apellido" className="form-control" placeholder="Ingrese su apellido" aria-label="Last Name..."/>
                                            </div>
                                        </div>     
                                        <div className="input-group input-group-dynamic pt-4">
                                            <label className="form-label text-white">Email</label>
                                            <input name="email" type="email" id="email" placeholder="Ingrese su Email" className="form-control"/>
                                        </div>
                                        <div className="input-group input-group-dynamic pt-4">
                                            <label className="form-label text-white">Telefono</label>
                                            <input name="numero" type="number" id="numero" placeholder="Ingrese su telefono" className="form-control"/>
                                        </div>
                                        <br/>
                                        <div className="input-group input-group-static">
                                            <label className="form-label text-white">Deja tu mensaje</label>
                                            <textarea name="message" className="form-control" id="message" rows="6"></textarea>
                                        </div>
                                        <div className="pt-5 pb-5">
                                        <input type="submit" id="button" value="Enviar Mensaje" className="btn w-100 ms-1 mb-0 formulario"/>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </form>
                            </div>
                        </div>
                    </section>
                </header>
            )
}

export default Formulario