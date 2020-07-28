import React from 'react';

//Components 
import ButtonLink from '../ButtonLink';

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

            <ButtonLink clasName="ButtonLink" href="/">
                Novo Vídeo
            </ButtonLink>
        </nav>
    );
}


export default Menu;