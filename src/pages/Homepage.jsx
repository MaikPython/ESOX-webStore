import React from "react"
import ItemList from "./../components/ItemList.jsx"
import Footer from "./../components/Footer.jsx"
import Checkbox from './../components/Checkbox.jsx'
import SortDropdown from './../components/SortDropdown.jsx'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getItems } from "../reducers/index.js"
import { ItemProps } from "./ShoppingCartPage.jsx"

class Homepage extends React.Component{ 
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        items: PropTypes.arrayOf(PropTypes.shape(ItemProps)).isRequired
    }
    constructor(props){
        super(props)
        this.handleCheckBox = this.handleCheckBox.bind(this)
        this.state = {
            allCategories: ["Roolandid", "Leechid"],
            selectedCategories:['Leechid'],
            sortDirection: 1,
            selected: true
        }     
    }


    componentDidMount(){
        this.props.dispatch(getItems())
    }

    getVisibleItems = () =>{
        return this.props.items
        .filter( item => item.category === this.state.selectedCategories[0] || this.state.selectedCategories[1])
        .sort((a,b) =>{
            switch(this.state.sortDirection){
                case -1: return b.price - a.price
                case 1: return a.price - b.price
            }
        })

    }

    handleDefaultCheckBoxValue = () => {
        this.setState({selected: !this.state.selected});
    }

    handleCheckBox(){
        let isChecked = event.target.checked
        if(isChecked){
            this.setState({
                selectedCategories: this.state.selectedCategories.concat(event.target.value),
            })
        }
        if(!isChecked){
            this.setState({
                selectedCategories: this.state.selectedCategories.filter(e => e !== event.target.value),
            })
        }
    }

    handleSortDropdown = (event) =>{
        console.log(event.target.value)
        this.setState({
            sortDirection: parseInt(event.target.value)
        })
    }




   
    render(){
        console.log(this.props.items, 'are the items')
    return(
    <div>
        <div className="page-wrapper">
            <div className="home-page-selector">
                <Checkbox handleCheckBox = {this.handleCheckBox} selected={this.state.selected} handleDefaultCheckBoxValue={this.handleDefaultCheckBoxValue}/>
                <SortDropdown 
                direction = {this.state.sortDirection}
                onChange = {this.handleSortDropdown}
                />
            </div>
            <ItemList arrayOfItems = {this.getVisibleItems()} />
        </div>
        <Footer />
    </div>
  )
}
}

const mapStateToProps = (store) => {
    console.log(store, 'is the store')
    return {
        items: store.items
    }
}

export default connect(mapStateToProps)(Homepage)