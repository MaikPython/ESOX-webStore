import React, { Component } from 'react';
import PropTypes from 'prop-types'
import authConsumer from './../components/authConsumer.jsx'
import protectedRedirect from './../components/protectedRedircet.jsx'

class UserPage extends Component {
    render() {
        return (
            <div>
                <div>Email       : {this.props.user.email}</div>
                <div>Created at  : {this.props.user.createdAt}</div>
            </div>
        );
    }
}


UserPage.propTypes = {
    user    : PropTypes.object.isRequired,
}



export default authConsumer(protectedRedirect(UserPage));