import React, {Component} from 'react';
import burguerIngredientStyle from './BurguerIngredient.module.css';
import PropTypes from 'prop-types';

class BurguerIngredient extends Component {
    render(){
        let ingredient = null;
        switch (this.props.type) {
            case 'BreadBottom':
                ingredient = <div className={burguerIngredientStyle.BreadBottom}></div>;
                break;
            case 'BreadTop':
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
    }
    
};

BurguerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}


export default BurguerIngredient;