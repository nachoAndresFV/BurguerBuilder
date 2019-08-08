import React from 'react';
import modalStyle from './Modal.module.css';
import  Aux from '../../../hoc/Aux';
import Backdrope from '../Backdrop/Backdrop';

const modal = (props) => (
    <Aux>
        <Backdrope 
            show={props.show}
            click={props.modalClose}
            />
        <div 
            className={modalStyle.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Aux>
    
);

export default modal;