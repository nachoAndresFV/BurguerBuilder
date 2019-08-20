import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from './hoc/layout/Layout';
import BurguerBuilder from './containers/BurguerBuilder/BurguerBuilder';
import Checkout from './containers/Checkout/Checkout';

//const BurguerBuilder = React.lazy(() => import('./containers/BurguerBuilder/BurguerBuilder'));
//const Checkout = React.lazy(() => import('./containers/Checkout/Checkout'));

class App extends Component {
  // state = {
  //   show: true
  // }
  componentDidMount(){
    // setTimeout(()=>{
    //   this.setState({
    //     show: false
    //   })
    // }, 5000);
  }
  render(){
    return (
     
        <div>
          <Layout>
            {/*this.state.show ? <BurguerBuilder/> : null */}
            <Switch>
              <Route path="/checkout" component={Checkout}/>
              <Route path="/" exact component={BurguerBuilder}/>
            </Switch>
          </Layout>
        </div>
      
      
    );
  };
  
}

export default App;
