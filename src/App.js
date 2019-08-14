import React, {Component} from 'react';
import Layout from './hoc/layout/Layout';
import BurguerBuilder from './containers/BurguerBuilder/BurguerBuilder';
import Checkout from './containers/Checkout/Checkout';

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
          <BurguerBuilder/>
          <Checkout/>
        </Layout>
      </div>
    );
  };
  
}

export default App;
