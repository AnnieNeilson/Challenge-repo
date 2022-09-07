import React, { Component } from 'react';
import css from "./css/NavBarSimple.module.css";
import NavBarFormChild from './NavBarFormChild';

class NavBarForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedIn: true
      }
    }

    handleClick = () => {
        this.setState((prevState) => ({
                isLoggedIn : prevState.isLoggedIn ? false : true
        }), () => console.log(this.state.isLoggedIn))
    }
  render() {
    return (
        <div className={css.NavBar}>
            <h1>My Gallery</h1>
            <NavBarFormChild 
            isLoggedIn={this.state.isLoggedIn}
            handleClick={this.handleClick} />
        </div>
    )
  }
}

export default NavBarForm