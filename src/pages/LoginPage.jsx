import React, { Component } from 'react';
import "./form.css"
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
                            type="text" 
                            placeholder="username"
                            name="username"
                            onChange={this.handleChange} 
                            value={this.state.username}
                        />
                        <input 
                            type="password" 
                            placeholder="password"
                            name="password"
                            value = {this.state.password}
                            onChange={this.handleChange} 
                        />
                    <button>login</button>
                    <p className="message">Not registered? <a href="#">Create an account</a></p>
                    </form>
            </div>
        );
    }
}

export default LoginPage;