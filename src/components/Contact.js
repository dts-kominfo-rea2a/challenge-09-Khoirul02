// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css';
const Contact = (contact) => {
    return (
        <>
            <div className='row' key={contact.data.name}>
                    <div className='box-tentang'>
                        <img className='img' src={contact.data.photo}/>
                    </div>
                    <div className='box-deskripsi'>
                        <h3>Nama : {contact.data.name}</h3>
                        <h3>Nomor HP : {contact.data.phone}</h3>
                        <h3>Email : {contact.data.email}</h3>
                    </div>
            </div>
        </>
    )
}

export default Contact;