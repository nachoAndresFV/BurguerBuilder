import React from 'react';
import BurguerIngredient from './BurguerIngredient/BurguerIngredient';  
import burguerStyle from './Burguer.module.css';

const burguer = (props) => {
    const transformedIngredients = Object.keys(props.ingredients).map(
        (ingredientKey) => {
            return [...Array(props.ingredients[ingredientKey])].map( //an array with "value" empty spaces for each key.
                (_,index) => {
                    return <BurguerIngredient key={ingredientKey + index} type={ingredientKey}/>
                }
            ); 
        }
    );

    return (
        <div className={burguerStyle.Burguer}>
            <BurguerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurguerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burguer;
