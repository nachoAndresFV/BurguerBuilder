import React from 'react';
import orderStyle from './Order.module.css';
const order = (props) => {
    const ingredients = [];
    for(let ingredientName in props.ingredients){
        ingredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        });
    }
    const ingredientsOutput = ingredients.map(ingredient =>{
        return <p key={ingredient.name} style={{textTransform: 'capitalize'}}>{ingredient.name}: {ingredient.amount}</p>;
    })
    return(
        <div className={orderStyle.Order}>
            <h2>Order info</h2>
            <p>Order id: {props.orderId}</p>
            <p>Delivey Method: {props.deliveryMethod}</p>
            <p><strong>Ingredients:</strong> </p>
            {ingredientsOutput}
            <p>Total Price: <strong>USD {Number.parseFloat(props.totalPrice).toFixed(2)}</strong></p>
            <h2>Customer data</h2>
            <p>Name: {props.customerName}</p>
            <p>Email: {props.customerEmail}</p>
            <p>Street Address: {props.customerStreetAddress}</p>
            <p>City Address: {props.customerCityAddress}</p>
            <p>ZipCode: {props.customerZipCode}</p>
        </div>
    );
    
};

export default order;