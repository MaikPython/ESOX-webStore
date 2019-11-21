import React from 'react'
import {Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'
import { userPropTypes } from '../reducers'


const protectedRedirect = (WrappedComponent) => {
    return class extends React.PureComponent{
        static displayName = "protected-redirect-hoc"
        static propTypes = {
            user: PropTypes.shape(userPropTypes),

        }
        render(){
            if(!this.props.user) return <Redirect to={"/items"} />
            return(
                <WrappedComponent {...this.props}/>
            )
        }
    }
}


export default protectedRedirect