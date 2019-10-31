import React, { Component } from 'react';
import PropTypes from 'prop-types'


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
    user : PropTypes.object.isRequired
}



export default UserPage;