import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as services from './../../server/services'
import PropTypes from 'prop-types'
class SignupPage extends Component {

    static propTypes = {
        history         : PropTypes.object.isRequired,

    }
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
         services.signup(this.state)
         .then(() => {
            this.props.history.push('/login')
            toast.success('Registreerumine oli edukas!')
         })
         .catch(err => {
             console.log("error", err)
             toast.success("Registreerumine ebaõnnestus!")
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