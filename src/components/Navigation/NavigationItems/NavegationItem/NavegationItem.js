import React from 'react';
import navegationItemStyle from './NavegationItem.module.css';

const navegationItem = (props) => (
    <li className={navegationItemStyle.NavegationItem}>
        <a 
            href={props.link}
            className={props.active ? navegationItemStyle.active : null}>
            {props.children}
        </a>
    </li>
);

export default navegationItem;
