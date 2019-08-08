import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burguer from '../../components/Burguer/Burguer';
import BuildControls from '../../components/Burguer/BuildControls/BuildControls';

const INGREDIENTS_PRICES = {
     salad: 0.5,
     bacon: 0.7,
     cheese: 0.4,
     meat: 0.7
}

class BurguerBuilder extends Component{
    // constructor(props){
    //     super(props);
    //     this.state={...}
    // }

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false

    }

    updatetePurchasableState(ingredients){
        const sum = Object.keys(ingredients).map((ingredientKey)=>{
            return ingredients[ingredientKey];
        }).reduce((sum,element)=>{ //reduce to the sum of all ingredients
            return (sum + element);
        }, 0);
        this.setState({
            purchasable: sum > 0
        })
    }

    addIngredientHandler = (type) => {
        const prevIngredientsCounter = this.state.ingredients[type];
        const updatedIngredientsCounter = (prevIngredientsCounter + 1);
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedIngredientsCounter;
        const priceAddition = INGREDIENTS_PRICES[type];
        const prevPrice = this.state.totalPrice;
        const updatedPrice = prevPrice + priceAddition;
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: updatedPrice
        });
        
        this.updatetePurchasableState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const prevIngredientsCounter = this.state.ingredients[type];
        if(prevIngredientsCounter <= 0){
            return; //nothing happens! :)
        }
        const updatedIngredientsCounter = (prevIngredientsCounter - 1);
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedIngredientsCounter;
        const priceAddition = INGREDIENTS_PRICES[type];
        const prevPrice = this.state.totalPrice;
        const updatedPrice = prevPrice - priceAddition;
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: updatedPrice
        });
        this.updatetePurchasableState(updatedIngredients);
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return(
            <Aux>
                <Burguer ingredients={this.state.ingredients}/>
                <BuildControls 
                    removeIngredient={this.removeIngredientHandler}
                    addIngredient={this.addIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice }
                    purchasable={this.state.purchasable}
                />
            </Aux>
        );
    }
}

export default BurguerBuilder;