import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



const emailjs = () =>{

const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
}



const btn = document.getElementById('button');

document.getElementById('form')
  .addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_x09cip8';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Enviando...';
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Mensaje Enviado',
            showConfirmButton: false,
            timer: 1500
          }) ;
      }, (err) => {
        btn.value = 'Enviar';
        alert(JSON.stringify(err));
      });
  });