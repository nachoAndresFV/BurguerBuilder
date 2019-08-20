import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import contactDataStyle from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spiner from '../../../components/UI/Spiner/Spiner';
class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            number: '',
            tower: '',
            floor: '',
            depto: '',
            zipCode: ''
        },
        phoneNumber: '',
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault(); //prevent the defaul "action", wich is the request in this case
        console.log(this.props.ingredients);

         this.setState({
            loading: true
        })
        const currentOrder = {
            ingredientes: this.props.ingredients,
            totalPrice: this.props.price,
            customer: {
                name: 'Baki Hanma',
                email: 'hanma@raitai.com',
                address: {
                    street: 'Shinjuku',
                    zipCode:'101-8656',
                    City: 'Tokio',
                    Country: 'Japan'
                }
            },
            deliveryMethod: 'raitaiEats'
        }
        axios.post('/orders.json', currentOrder)
             .then(response => {
                 this.setState({
                     loading: false
                 })
                 this.props.history.push('/');
             })
             .catch(error => {
                 this.setState({
                     loading: false
                 })
            });
    }

    render(){
        let form = (<form>
                        <label>Name </label>
                        <input type="text" name="name" placeholder="Enter your name"/>
                        <label>Email </label>
                        <input type="email" name="email" placeholder="Enter your email"/>
                        <label>Adress </label>
                        <input type="text" name="street" placeholder="Enter the street name"/>
                        <input type="text" name="number" placeholder="Enter the house/depto number"/>
                        <input type="text" name="zipCode" placeholder="Enter the zipcode"/>
                        <label>Phone number </label>
                        <input type="text" name="phoneNumber" placeholder="Enter your phone number"/>
                        <Button btnType="Success" click={this.orderHandler} >ORDER</Button>
                    </form>);
        if (this.state.loading) {
            form = <Spiner/>
        }
        return (
            <div className={contactDataStyle.ContactData}>
                <h4>Please enter your data!</h4>
                {form}
            </div>
        );

    }

}

export default ContactData;