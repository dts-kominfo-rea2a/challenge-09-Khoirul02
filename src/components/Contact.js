// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css';
const Contact = ({data : contact}) => {
    return (
        <><div className='main'>
        <div className='content'>
        <div className='container'>
            {contact.map(item => {
                return <>
                <div className='row' key={item.name}>
                    <div className='box-tentang'>
                        <img className='img' src={item.photo}/>
                    </div>
                    <div className='box-deskripsi'>
                        <h3>Nama : {item.name}</h3>
                        <h3>Nomor HP : {item.phone}</h3>
                        <h3>Email : {item.email}</h3>
                    </div>
                </div></>
            })}
        </div></div></div>
        <div className='footer'><p>Khoirul Huda &#169; 2022 - React Developer</p></div></>
    )
}

export default Contact;