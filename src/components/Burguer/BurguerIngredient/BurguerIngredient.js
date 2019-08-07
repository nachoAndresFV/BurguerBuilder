import React from 'react';
import burguerIngredientStyle from './BurguerIngredient.module.css';

const burguerIngredient = (props) => {
    let ingredient = null;
    switch (props.type) {
        case 'BreadBotton':
            ingredient = <div className={burguerIngredientStyle.BreadBottom}></div>;
            break;
        case 'BreaTop':
            ingredient = (
                <div className={burguerIngredientStyle.BreadTop}>
                    <div className={burguerIngredientStyle.Seeds1}></div>
                    <div className={burguerIngredientStyle.Seeds2}></div>
                </div>);
            break;
        case 'Meat':
            ingredient = <div className={burguerIngredientStyle.Meat}></div>;
            break;   
        case 'Cheese':
            ingredient = <div className={burguerIngredientStyle.Cheese}></div>;
            break;  
        case 'Salad':
            ingredient = <div className={burguerIngredientStyle.Salad}></div>;
            break; 
        case 'Bacon':
            ingredient = <div className={burguerIngredientStyle.Bacon}></div>;
            break; 
        default:
            ingredient = null;
    }
    return ingredient;
};

export default burguerIngredient;