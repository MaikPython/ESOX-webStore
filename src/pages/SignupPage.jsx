import React, { Component } from 'react';
import {Link} from 'react-router-dom'

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
            <div className="form-content">
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
                    <button>Loo kasutaja</button>
                    <p className="message">Sul on juba kasutaja? <Link to={'/login'}>Logi sisse</Link></p>
                    </form>
            </div>
            </div>
        );
    }
}




export default SignupPage; 