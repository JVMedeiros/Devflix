import React from 'react';
import { FooterBase } from './styles';
import {FaHeart, FaCoffee } from 'react-icons/fa';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Made with <FaHeart /> and <FaCoffee/> by <a href="https:/github.com/JVMedeiros">
          JVMedeiros
        </a> in 
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
