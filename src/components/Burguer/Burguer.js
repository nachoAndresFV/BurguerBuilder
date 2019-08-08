import React from 'react';
import BurguerIngredient from './BurguerIngredient/BurguerIngredient';  
import burguerStyle from './Burguer.module.css';

const burguer = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map(
        (ingredientKey) => {
            return [...Array(props.ingredients[ingredientKey])].map( //an array with "value" empty spaces for each key.
                (_,index) => {
                    return <BurguerIngredient key={ingredientKey + index} type={ingredientKey}/>
                }
            ); 
        }
    ).reduce((array, element) => {
        return array.concat(element);
    }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <h1>Please start adding ingredients!</h1>;
    }
    //console.log(transformedIngredients);

    return (
        <div className={burguerStyle.Burguer}>
            <BurguerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurguerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burguer;
