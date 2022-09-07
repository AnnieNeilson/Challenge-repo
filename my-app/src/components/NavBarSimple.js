import React from "react";
import css from "./css/NavBarSimple.module.css";

class NavBarSimple extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Hello, guest!',
            buttonText: 'log in',
        }
    }

    logUser(){
        this.setState((prevState) => ({
                message: prevState.message === 'Hello, guest!' ? 'Welcome back, user!' : 'Hello, guest!',
                buttonText: prevState.buttonText === 'log in' ? 'log out' : 'log in',
        
        }), ()=> console.log(this.state.message))
    }

    render() {
        return(
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                <div>
                <span>{this.state.message}</span>
                <button onClick={ ()=> this.logUser()}>{this.state.buttonText}</button>
                </div>
            </div>
        ) 
    }
}

export default NavBarSimple