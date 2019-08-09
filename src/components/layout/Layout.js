import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import layoutStyle from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component{ 

    state = {
        showSideDrawer: true
    }

    sideDrawerCloseHandler = () =>{
        this.setState({
            showSideDrawer: false
        })
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        })
    };


    render(){
        return (
            <Aux>
                <Toolbar
                    click={this.sideDrawerToggleHandler}
                />
                <SideDrawer 
                    open={this.state.showSideDrawer }
                    close={this.sideDrawerCloseHandler}/>
                <main className={layoutStyle.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
    
};

export default Layout;