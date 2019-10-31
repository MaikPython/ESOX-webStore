import React, { Component } from 'react';

class SignupPage extends Component {
   constructor(props){
        super(props)
        this.state = {
            email           : '',
            password        : '',
            confirmPassword : '',
        }
    }
     handleSubmit = (event) => {
         event.preventDefault(),
         console.log("submit", this.state);
         fetch("/api/v1/auth/signup", {
             method: "POST",
             headers: {
                 "Content-Type" : "application/json"
             },
             body: JSON.stringify(this.state),
         })
         .then(res => {
             console.log("response", res)
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
                            name={"email"}
                            onChange={this.handleChange} 
                        />
                        <input 
                            type="password" 
                            placeholder="password"
                            name={"password"}
                        
                            onChange={this.handleChange} 
                        />
                        <input 
                            type="password" 
                            placeholder="password "
                            name={"confirmPassword"}
                            onChange={this.handleChange} 
                        />
                    <button>Sign Up</button>
                    <p className="message">Not registered? <a href="#">Create an account</a></p>
                    </form>
            </div>
        );
    }
}




export default SignupPage; 