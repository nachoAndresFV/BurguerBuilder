import React from 'react';
import burguerLogo from '../../assets/images/burger-logo.png';
import logoStyle from './Logo.module.css';

const logo = (props) => (
    <div className={logoStyle.Logo}>
        <img src={burguerLogo} alt="MyBurguer"/>
    </div>
);

export default logo;