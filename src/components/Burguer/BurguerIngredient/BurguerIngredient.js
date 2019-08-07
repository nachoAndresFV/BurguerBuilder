import React, {Component} from 'react';
import burguerIngredientStyle from './BurguerIngredient.module.css';
import PropTypes from 'prop-types';

class BurguerIngredient extends Component {
    render(){
        let ingredient = null;
        switch (this.props.type) {
            case 'bread-bottom':
                ingredient = <div className={burguerIngredientStyle.BreadBottom}></div>;
                break;
            case 'bread-top':
                ingredient = (
                    <div className={burguerIngredientStyle.BreadTop}>
                        <div className={burguerIngredientStyle.Seeds1}></div>
                        <div className={burguerIngredientStyle.Seeds2}></div>
                    </div>);
                break;
            case 'meat':
                ingredient = <div className={burguerIngredientStyle.Meat}></div>;
                break;   
            case 'cheese':
                ingredient = <div className={burguerIngredientStyle.Cheese}></div>;
                break;  
            case 'salad':
                ingredient = <div className={burguerIngredientStyle.Salad}></div>;
                break; 
            case 'bacon':
                ingredient = <div className={burguerIngredientStyle.Bacon}></div>;
                break; 
            default:
                ingredient = null;
        }
        return ingredient;
    }
    
};

BurguerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}


export default BurguerIngredient;