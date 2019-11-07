import React, { Component } from 'react'
import { IoIosTrash } from 'react-icons/io'

export default class ShoppingCartPage extends Component {
    constructor(props){
        super(props)
        this.state ={
            items: []
        }
    }

    componentDidMount(){
        this.fetchItems()
    }

    fetchItems = () => {
        fetch(`/api/v1/items`)
        .then(res => {
            return res.json()
        })
        .then(items => {
            const shoppinCartItems = items.slice(0,3).map(item =>{
                return item
            })
            this.setState({
                items: shoppinCartItems
            })
        })
        .catch(err => err)
    }

    countTotalSum = () => {
        let totalSum = 0
        return(
            this.state.items.map(item=>{
                return totalSum += item.price
            }),
            <div className="total-sum" style={{padding:"5%"}}>
                <h1>Summa : {totalSum}</h1>
            </div>

        )
    }

    render() {
        const renderedItems = this.state.items.map(item=> {
            return(
                <div className="shopping-cart-item" 
                key={item.title} 
                style={{
                    display:"flex",
                    padding: "5%",
                
                }}
                
                >
                    <img src={item.imgSrc}/>
                    <h3 style={{padding: "3%"}} >{item.title}</h3 >
                    <h3 style={{padding: "3%"}} >{item.price}</h3>  
                    <IoIosTrash style={{width: "50px", height: "50px"}} />
                </div>
            )
        })
        console.log("Cart page was loaded", this.state.items)
        return (
            <div className="shopping-cart-items" >
                {renderedItems}
                {this.countTotalSum()}
                <div >
                    <button 
                        className="create-order"
                        style={{padding:"2%", marginLeft:"80%", marginBottom:"3%"}}
                        >
                        Vormista ost
                    </button>
                </div>
            </div>
        )
    }
}
