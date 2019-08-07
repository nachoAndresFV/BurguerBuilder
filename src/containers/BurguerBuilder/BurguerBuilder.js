import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burguer from '../../components/Burguer/Burguer';
class BurguerBuilder extends Component{
    render() {
        return(
            <Aux>
                <Burguer/>
                <div>Controls</div>
            </Aux>
        );
    }
}

export default BurguerBuilder;