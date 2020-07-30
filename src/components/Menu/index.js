import React from 'react';

//Components ;
import Button from '../Button';

//Assets
import Logo from '../../assets/img/logo.png';

//Styles
import './index.css';

//Router Manager
import { Link } from 'react-router-dom';


function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Logo"/>
            </Link>

            <Button as={Link} clasName="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>
        </nav>
    );
}


export default Menu;