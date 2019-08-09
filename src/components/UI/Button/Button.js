import React from 'react';
import buttonStyle from './Button.module.css';

const button = (props) => (
    <button
        className={[buttonStyle.Button, buttonStyle[props.btnType]].join(' ')} 
        onClick={props.click}>
        {props.children}
    </button>
);

export default button;