import React from 'react';
import NavigationItem from './NavegationItem/NavegationItem';
import navegationItemsStyle from './NavegationItems.module.css';

const navegationItems = (props) => (
    <ul className={navegationItemsStyle.NavegationItems}>
        <NavigationItem link="/" exact>Burguer Builder</NavigationItem>
        <NavigationItem link="/my-orders">My Orders</NavigationItem>
    </ul>
);

export default navegationItems;