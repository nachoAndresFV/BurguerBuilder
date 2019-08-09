import React from 'react';
import toolbarStyle from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavegationItems from '../NavigationItems/NavegationItems';
import SideDrawerToggle from '../SideDrawer/SideDrawerToggle/SideDrawerToggle';

const toolbar = (props) => (
    <header className={toolbarStyle.Toolbar}>
        <SideDrawerToggle click={props.click}/>
        <div className={toolbarStyle.Logo}>
            <Logo />
        </div>
        <nav className={toolbarStyle.DesktopOnly}>
            <NavegationItems/>
        </nav>
    </header>
);

export default toolbar;