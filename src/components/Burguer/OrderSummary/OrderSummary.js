import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients).map((ingredientKey)=>{
        return <li 
                key={ingredientKey}>
                    <span style={{textTransform: 'capitalize'}}>{ingredientKey} </span>: {props.ingredients[ingredientKey]}
                </li>
    });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A tasty burguer with the following ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price: {props.totalPrice.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button 
                btnType="Danger"
                click={props.cancelButton}>
                CANCEL
            </Button>
            <Button 
                btnType="Success"
                click={props.continueButton}>
                CONTINUE
            </Button>
        </Aux>
    );
};

export default orderSummary;