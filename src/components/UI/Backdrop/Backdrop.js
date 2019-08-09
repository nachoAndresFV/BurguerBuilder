import React from 'react';
import backdropeStyle from './Backdrope.module.css';

const backdrope = (props) => (
    props.show ? (
        <div 
            className={backdropeStyle.Backdrope} 
            onClick={props.click}>  
        </div>) 
        : null
);

export default backdrope;