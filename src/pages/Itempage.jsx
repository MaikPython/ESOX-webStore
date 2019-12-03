import React from "react"

import Footer from "../components/Footer.jsx"
import PropTypes from "prop-types";
import { connect } from 'react-redux'
import { addItem } from './../actions'
import 'react-toastify/dist/ReactToastify.css'
import * as services from './../../server/services'

class Itempage extends React.Component{

    constructor(props){
        super(props)
        this.state = {}
    }
    componentDidMount = () => {
        this.fetchItem()
       
    }

    handleBuy = () => {
        console.log("I was called")
        this.props.dispatch(addItem((this.state)))

    }

    fetchItem = () => {
       services.getItem({itemId: this.props.match.params.itemId})
        .then(item=>{
            this.setState({
                ...item
            })
        })
        .catch(error =>{
            console.log("item page", error)
        })
    }
    

    render(){
        return(
            <div className="page-wrapper">
                <div className="item-page-content">
                    <div className="item-page-item">
                        <img src={this.state.imgSrc}/>
                        <h3>{this.state.title}</h3>
                        <h3>{this.state.price} eur</h3>
                        <div className="item-page-buy-item" onClick={this.handleBuy}>
                            VORMISTA OST
                        </div>
                    </div>
                    
                </div>
                <Footer />
                
            </div>
        )
    }
}

Itempage.propTypes = {
    match: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    store: PropTypes.any
}

export default connect()(Itempage)