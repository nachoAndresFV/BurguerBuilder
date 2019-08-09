import React from 'react';
import buildControlStyle from './BuildControl.module.css';

const buildControl = (props) => (
    <div className={buildControlStyle.BuildControl}>
        <div className={buildControlStyle.Label}>{props.label}</div>
        <button className={buildControlStyle.Less} 
                onClick={props.removeIngredient} 
                disabled={props.disabled}>
                Less
        </button>
        <button className={buildControlStyle.More} onClick={props.addIngredient}>More</button>
    </div>
); 

export default buildControl;