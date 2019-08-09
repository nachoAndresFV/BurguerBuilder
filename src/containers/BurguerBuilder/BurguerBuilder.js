import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burguer from '../../components/Burguer/Burguer';
import BuildControls from '../../components/Burguer/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components//Burguer/OrderSummary/OrderSummary';

const INGREDIENTS_PRICES = {
     salad: 0.5,
     bacon: 0.7,
     cheese: 0.4,
     meat: 0.7
}

class BurguerBuilder extends Component{
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing:false

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
    
    purchaseHandler = () => {
        this.setState({
            purchasing: true
        })
    }

    purchaseCancelHandler = () => {
        this.setState({
            purchasing: false
        })
    }

    purchaseContiueHandler = () => {
        alert('You continue!')
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
                <Modal 
                    show={this.state.purchasing}
                    modalClose={this.purchaseCancelHandler}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        cancelButton={this.purchaseCancelHandler}
                        continueButton={this.purchaseContiueHandler}
                        totalPrice={this.state.totalPrice}
                    />
                </Modal>
                <Burguer ingredients={this.state.ingredients}/>
                <BuildControls 
                    removeIngredient={this.removeIngredientHandler}
                    addIngredient={this.addIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice }
                    purchasable={this.state.purchasable}
                    purchasing={this.purchaseHandler}
                />
            </Aux>
        );
    }
}

export default BurguerBuilder;