import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import ToolBar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

import classes from './Layout.css';

class Layout extends Component {

    state = {
        showSideDrawer: true
    }

    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false});
    }

    render() {
        return (
            <Aux>
                <ToolBar />
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerCloseHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;
