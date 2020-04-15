import React, {Component} from 'react';
import Logo from '../../UI/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Toolbar.module.css';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

class Toolbar extends Component{
    render(){

        return(
    <header className={classes.Toolbar} >  
       <DrawerToggle clicked={this.props.drawerToggleClicked} />
        <div className={classes.Logo}>
           <Logo/>
        </div>
        <nav className={classes.DesktopOnly} >
            <NavigationItems />
        </nav>
    </header>   
        ); 
    }
};


export default Toolbar;
