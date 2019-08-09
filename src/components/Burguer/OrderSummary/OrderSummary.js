import React,{Component} from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    componentDidUpdate(){
        console.log('[OrderSummary] DidUpdate');
    }
    render(){

        const ingredientSummary = Object.keys(this.props.ingredients).map((ingredientKey)=>{
            return <li 
                    key={ingredientKey}>
                        <span style={{textTransform: 'capitalize'}}>{ingredientKey} </span>: {this.props.ingredients[ingredientKey]}
                    </li>
        });

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A tasty burguer with the following ingredients: </p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total price: {this.props.totalPrice.toFixed(2)}</strong></p>
                <p>Continue to checkout?</p>
                <Button 
                    btnType="Danger"
                    click={this.props.cancelButton}>
                    CANCEL
                </Button>
                <Button 
                    btnType="Success"
                    click={this.props.continueButton}>
                    CONTINUE
                </Button>
            </Aux>
        );
    }
    
};

export default OrderSummary;