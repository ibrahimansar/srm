import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import classes from './NavigationItems.module.css';
import Button from '../../UI/Button/Button';

class NavigationItems extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className={classes.NavigationItems}>
        <div className={classes.NavigationItem}>
              <Link 
              onClick={this.props.clicked}
              className={classes.active}
                activeClass="active"
                to="srm"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
               >
                Home
              </Link>
              <Link
                onClick={this.props.clicked}
                activeClass="active"
                to="whysrm"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Why SRM
              </Link>
              <Link
                onClick={this.props.clicked}
                activeClass="active"
                to="branches"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
               Branches
              </Link>
              <Link
                onClick={this.props.clicked}
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link> 
           </div>   
      </nav>
    );
  }
}

export default NavigationItems;