import React from 'react'
import { StripeProvider } from 'react-stripe-elements'
import { Elements, CardElement } from 'react-stripe-elements'
import { injectStripe } from 'react-stripe-elements'
import PropTypes from 'prop-types'

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
        price: PropTypes.any    
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.stripe.createToken().then((result)=> {
            console.log(result, 'result')
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

const InjectedStripeForm = injectStripe(StripeForm) 

