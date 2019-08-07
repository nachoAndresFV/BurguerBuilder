import React from 'react';
import buildControlsStyle from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const buildControls = (props) => (
    <div className={buildControlsStyle.BuildControls}>
        <h1>Current price: <strong>{props.price.toFixed(2)}</strong></h1>
        {controls.map(control => {
             return <BuildControl 
             key={control.label} 
             label={control.label}
             removeIngredient={()=>props.removeIngredient(control.type)}  
             addIngredient={()=>props.addIngredient(control.type)}  
             disabled={props.disabled[control.type]}  
             />;
        })}
    </div>
);

export default buildControls;