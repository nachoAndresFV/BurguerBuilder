import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burguer from '../../components/Burguer/Burguer';
import BuildControls from '../../components/Burguer/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components//Burguer/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spiner from '../../components/UI/Spiner/Spiner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENTS_PRICES = {
     salad: 0.5,
     bacon: 0.7,
     cheese: 0.4,
     meat: 0.7
}

class BurguerBuilder extends Component{

    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: true,
        purchasing:false,
        loading: false,
        error: false

    }
    componentDidMount(){
        console.log('componentDidMount()....')
        axios.get('/ingredients.json')
             .then(response => {
                 this.setState({
                     ingredients: response.data
                 })
                 console.log(response);
             })
             .catch(error => {
                this.setState({
                    error: true
                })
             });

    }

    updatetePurchasableState(ingredients){
        console.log('UPDATING PURCHASABLE...');
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
        // //alert('You continue!')
        const queryParams = [];
         for(let i in this.state.ingredients){
            queryParams.push(encodeURIComponent(i) + '=' + encodeURI(this.state.ingredients[i]))      //This encode the elements for being used in the url. "i" is the key.
            console.log(i + "->" + this.state.ingredients[i]);
        }
        queryParams.push('price='+this.state.totalPrice);
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        });
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        let orderSummary = null;
        let burguer = this.state.error ? <h1>Ingredients can't be load...</h1> : <Spiner/>;
        if (this.state.ingredients) {
            burguer = (
                <Aux>
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
            orderSummary = (
                <OrderSummary
                    ingredients={this.state.ingredients}
                    cancelButton={this.purchaseCancelHandler}
                    continueButton={this.purchaseContiueHandler}
                    totalPrice={this.state.totalPrice}
                />
            );
        }
        if (this.state.loading) {
            orderSummary = <Spiner/>;
        }
        return(
            <Aux>
                <Modal 
                    show={this.state.purchasing}
                    modalClose={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                 {burguer}
            </Aux>
        );
    }
}

export default withErrorHandler(BurguerBuilder, axios);