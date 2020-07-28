import React from 'react';

//Components 
// import ButtonLink from '../ButtonLink';
import Button from '../Button';

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

            <Button as="a" clasName="ButtonLink" href="/">
                Novo Vídeo
            </Button>
        </nav>
    );
}


export default Menu;