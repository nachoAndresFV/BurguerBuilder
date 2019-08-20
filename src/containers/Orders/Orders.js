import React, {Component} from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spiner from '../../components/UI/Spiner/Spiner';

class Orders extends Component {

    state = {
        orders: [],
        loading: true
    };

    componentDidMount(){
        axios.get('orders.json')
            .then(response =>{
                const fetchedOrders = [];
                for(let key in response.data){
                    fetchedOrders.push({
                        ...response.data[key],
                        id: key
                    });
                }
                //console.log(response.data);
                this.setState({
                    loading: false,
                    orders: fetchedOrders
                })
            })
            .catch(error =>{
                this.setState({
                    loading: false
                })
            });
    }

    render(){
        let myOrders = <Spiner/>; 
        if (!this.setState.loading) {
            myOrders = this.state.orders.map(order => {
                return (
                    <Order
                        key={order.id}
                        orderId={order.id}
                        deliveryMethod={order.deliveryMethod}
                        ingredients={order.ingredientes}
                        totalPrice={order.totalPrice}
                        customerName={order.customer.name}
                        customerEmail={order.customer.email}
                        customerStreetAddress={order.customer.address.street}
                        customerCityAddress={order.customer.address.City}
                        customerZipCode={order.customer.address.zipCode}
                    />
                );
            })
        }
        return (
            <div>
                {myOrders}
            </div>
            
        );
    }
}

export default withErrorHandler(Orders, axios);