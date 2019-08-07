import React, {Component} from 'react';
import BurguerIngredient from './BurguerIngredient/BurguerIngredient';  
import burguerStyle from './Burguer.module.css';

class Burguer extends Component{
    render(){
        return (
            <div className={burguerStyle.Burguer}>
                <BurguerIngredient type="BreadTop"/>
                <BurguerIngredient type="Bacon"/>
                <BurguerIngredient type="Cheese"/>
                <BurguerIngredient type="Meat"/>
                <BurguerIngredient type="BreadBottom"/>
            </div>
        );
    }
}

export default Burguer;
