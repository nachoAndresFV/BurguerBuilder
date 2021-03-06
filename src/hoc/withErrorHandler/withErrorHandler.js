import React, {Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component{
        constructor(props){
            super(props);
            this.state = {
                error: null
            }
            this.requestInterceptor = axios.interceptors.request.use(req => {
                this.setState({
                    error: null 
                });
                return req;
            })
            this.responseInterceptor = axios.interceptors.response.use(response => response, error => {
                this.setState({
                    error: error
                });
            });
        };

        componentWillUnmount(){ // 
            //console.log('componentWillUnmount() executed!', this.requestInterceptor, this.responseInterceptor);
            axios.interceptors.request.eject(this.requestInterceptor);
            axios.interceptors.response.eject(this.responseInterceptor);
        };

        errorConfirmedHandler = () => {
            this.setState({
                error: null 
            })
        }

        render(){  
            return (
                <Aux>
                    <Modal 
                        show={this.state.error}
                        modalClose={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </Aux>
            );


        }
    }
}

export default withErrorHandler;