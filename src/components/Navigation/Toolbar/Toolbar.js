import React from 'react';
import toolbarStyle from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavegationItems from '../NavigationItems/NavegationItems';

const toolbar = () => (
    <header className={toolbarStyle.Toolbar}>
        <div style={{color: "white"}}>MENU</div>
        <Logo />
        <nav>
            <NavegationItems/>
        </nav>
    </header>
);

export default toolbar;