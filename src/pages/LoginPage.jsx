import React, { Component } from 'react';
import "./form.css"
import {Link} from "react-router-dom"
import PropTypes from "prop-types";

class LoginPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            username        : '',
            password        : '',
        }
    }
     handleSubmit = (event) => {
         event.preventDefault(),
         console.log("submit", this.state);
         fetch("/api/v1/auth/login", {
             method: "POST",
             headers: {
                 "Content-Type" : "application/json"
             },
             body: JSON.stringify(this.state),
         })
         .then(res => res.json())
         .then(({token, user}) => {
             console.log(token, user)
             this.props.onLogin({token, user})
             this.props.history.push(`/users/${user._id}`)
         })
         .catch(err =>{
             console.log("error", err)
         })
    }

    handleChange = (event) => {
        console.log("handle change", event.target.value, event.target.name)
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <div className="form">
                    <form className="login-form" onSubmit={this.handleSubmit}>
                        <input 
                            type="email" 
                            placeholder="email"
                            name="email"
                            onChange={this.handleChange} 
                        />
                        <input 
                            type="password" 
                            placeholder="password"
                            name="password"
                            value = {this.state.password}
                            onChange={this.handleChange} 
                        />
                    <button>login</button>
                    <p className="message">Not registered? <Link to={"/signup"}>Create an account</Link></p>
                    </form>
            </div>
        );
    }
}

LoginPage.propTypes = {
    history: PropTypes.object.isRequired,
    onLogin: PropTypes.func.isRequired
}

export default LoginPage;