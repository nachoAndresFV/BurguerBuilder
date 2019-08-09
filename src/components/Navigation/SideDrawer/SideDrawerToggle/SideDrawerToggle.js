import React from 'react';
import sideDrawerToggleStyle from './SideDrawerToggle.module.css';

const sideDrowerToggle = (props) => (
    <div
        className={sideDrawerToggleStyle.DrawerToggle}
        onClick={props.click}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default sideDrowerToggle;