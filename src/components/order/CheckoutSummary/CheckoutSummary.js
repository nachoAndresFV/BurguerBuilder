import React from 'react';
import Burguer from '../../Burguer/Burguer';
import Button from '../../UI/Button/Button';
import checkoutSummaryStyle from './CheckoutSummary.module.css';

const checkoutSummary = (props) => {
    return (
        <div className={checkoutSummaryStyle.CheckoutSummary}>
            <h1>This is your burguer!</h1>
            <div style={{width: '100%'}}>
                <Burguer ingredients={props.ingredients}/>
            </div>
            <Button btnType="Danger" clicked>DANGER</Button> 
            <Button btnType="Success" clicked>CONTINUE</Button> 
        </div>
    );
}

export default checkoutSummary;