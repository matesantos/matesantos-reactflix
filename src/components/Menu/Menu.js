import React from 'react';
import Logo from '../../assets/imgs/Logo.png';
import Button from '../Button/Button'
import './Menu.css'
const Menu = () =>{
    return(
        <header>
           <nav className = "Menu">
               <a href="/">
                    <img className="Logo" src={Logo} alt="logo"></img>
               </a>

               <Button className="ButtonLink" href="/">
                    Novo Vídeo
               </Button>
           </nav>

        </header>
    )
};

export default Menu;