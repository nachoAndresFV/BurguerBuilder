import React from 'react';
import {NavLink} from 'react-router-dom';
import navegationItemStyle from './NavegationItem.module.css';

const navegationItem = (props) => (
    <li className={navegationItemStyle.NavegationItem}>
        <NavLink 
            to={props.link} 
            exact={props.exact} //This allows that the link gets active only when the exact path match!
            activeClassName={navegationItemStyle.active}>
            {props.children}
        </NavLink>
    </li>
);

export default navegationItem;
