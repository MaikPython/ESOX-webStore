import React from 'react'
import { StripeProvider } from 'react-stripe-elements'
import { Elements, CardElement } from 'react-stripe-elements'
import { injectStripe } from 'react-stripe-elements'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as services from './../../server/services'
import * as selectors from './../store/selectors'

const Stripe = ({price}) => {

    return(
        <div>
            <StripeProvider apiKey="pk_test_jGv4pRaVVmVZ7RcMGy2532c400opxWUnex">
                <Elements>
                    <InjectedStripeForm price={price}/>
                </Elements>
            </StripeProvider>
        </div>
    )
}

Stripe.propTypes = {
    price: PropTypes.any
}

export default Stripe


class StripeForm extends React.PureComponent {
    static propTypes = {
        stripe: PropTypes.object,
        price: PropTypes.any,
        userId : PropTypes.string.isRequired,
        token: PropTypes.string.isRequired
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.stripe.createToken().then(({error, token})=> {
            console.log(error, token)
            if(error) {
                console.error('token error', error)
                return;
            }
            services.checkout({stripeToken: token, userId: this.props.userId, token: this.props.token})
            .then(obj => console.log('checkout', obj))
            .catch(err => err)
        })
    }

    render(){
        return(
            <form onSubmit = {this.handleSubmit}> 
                <label>
                    Kaardi andmed
                    <CardElement style={{base: {fontSize: '18px'}}} />
                </label>
        <div className="stripe-pay-button" onClick={this.handleSubmit}>{this.props.price}</div>
            </form>
        )
    }
}
const mapStateToProps = (store) => (
    {
        userId: selectors.getUserId(store),
        token: selectors.getToken(store)
    }
)

const InjectedStripeForm = connect(mapStateToProps)(injectStripe(StripeForm))

