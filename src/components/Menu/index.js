import React from 'react';

//Assets
import Logo from '../../assets/img/logo.png';

//Styles
import './index.css';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Logo"/>
            </a>
        </nav>
    );
}


export default Menu;