import React from 'react';
import NavigationItem from './NavegationItem/NavegationItem';
import navegationItemsStyle from './NavegationItems.module.css';

const navegationItems = (props) => (
    <ul className={navegationItemsStyle.NavegationItems}>
        <NavigationItem link="/" active>Burguer Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
);

export default navegationItems;