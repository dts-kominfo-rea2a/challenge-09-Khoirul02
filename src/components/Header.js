// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <><header className='jumbotron'>
            <h1>Call a Friend</h1>
            <h5>Your friendly contact app</h5>
            <div>
                <span>.....................</span>
            </div>
        </header></>
    )
}

export default Header;