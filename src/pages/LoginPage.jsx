import React, { Component } from 'react'
import "./form.css"
import {Link} from "react-router-dom"
import PropTypes from "prop-types"
import {connect} from 'react-redux'
import { userUpdate } from '../actions'
import { toast } from 'react-toastify'
import * as services from './../../server/services'

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
        services.login(this.state)
        .then( this.handleSuccess )
        .catch(err =>{
                console.log("error", err)
            toast.success("Logimine ebaõnnestus!")
        })
    }

    handleSuccess = ({user}) => {
        this.props.dispatch(userUpdate(user))
        this.props.history.push(`/users/${user._id}`)
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
                                name="email"
                                onChange={this.handleChange} 
                            />
                            <input 
                                type="password" 
                                placeholder="parool"
                                name="password"
                                value = {this.state.password}
                                onChange={this.handleChange} 
                            />
                        <button>Logi sisse</button>
                        <p className="message">Pole kasutajat? <Link to={"/signup"}>Loo kasutaja!</Link></p>
                        </form>
                </div>
            </div>
        );
    }
}

LoginPage.propTypes = {
    history         : PropTypes.object.isRequired,
    dispatch        : PropTypes.func.isRequired
}

export default connect()(LoginPage)