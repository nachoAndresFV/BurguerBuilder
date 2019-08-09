import React from 'react';
import Logo from '../../Logo/Logo';
import NavegationItems from '../NavigationItems/NavegationItems';
import sideDrawerStyle from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';


const sideDrower = (props) => {
    let attachedClasses = [sideDrawerStyle.SideDrawer, sideDrawerStyle.Close];
    if (props.open) {
        attachedClasses = [sideDrawerStyle.SideDrawer, sideDrawerStyle.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.open} click={props.close}/>
            <div className={attachedClasses.join(' ')}>
                <div className={sideDrawerStyle.Logo}>
                    <Logo/>
                </div>    
                <nav>
                    <NavegationItems/>
                </nav>
            </div>
        </Aux>
        
    );
};

export default sideDrower;