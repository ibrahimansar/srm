import React, {Component} from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Aux from '../../hoc/Auxiliary';
import Srm from '../contents/srm/srm';
import Whysrm from '../contents/srm/srm';
import Branches from '../contents/srm/srm';
import Contact from '../contents/srm/srm';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }

    render () {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>   
                        <div id="srm">
                           <Srm />
                         </div>  

                         <div id="whysrm">
                           <Whysrm />
                         </div>  
                        

                         <div id="branches">
                           <Branches />
                         </div>  
                       
                         <div id="contact">
                           <Contact />
                         </div>              
                </main>
            </Aux>
        )
    }
}

export default Layout;