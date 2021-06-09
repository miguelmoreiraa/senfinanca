/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './styles.css'
import Logo from "../../assets/images/SenFinanca.png"

function Header() {
    return (
        <header className="headerSenFinanca">
               <img className= "logo" src={Logo}></img> 
        </header>

    );
}

export default Header;