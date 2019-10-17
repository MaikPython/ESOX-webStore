import React from "react"
import Header from "./../components/Header.jsx"
import ItemList from "./../components/ItemList.jsx"
import Footer from "./../components/Footer.jsx"
import Checkbox from './../components/Checkbox.jsx'
import SortDropdown from './../components/SortDropdown.jsx'


class Homepage extends React.Component{
    constructor(props){
        super(props)
        this.handleCheckBox = this.handleCheckBox.bind(this)
        this.state = {
            items: [],
            allCategories: ["Roolandid", "Leechid"],
            selectedCategories:[],
            sortDirection: 1
        }     
    }

    componentDidMount(){
        this.fetchItems()
    }

    fetchItems = () => { 
        fetch("/api/items")
        .then(res=>{
            return res.json()
        }).then(items=>{
            this.setState({
                items
            })
        })
        .catch(err=>{   
            console.log(err, "error");        
        })
    }

    getVisibleItems = () =>{
        return this.state.items
        .filter( item => item.category === this.state.selectedCategories[0] || this.state.selectedCategories[1])
        .sort((a,b) =>{
            switch(this.state.sortDirection){
                case -1: return b.price - a.price
                case 1: return a.price - b.price
            }
        })

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
    return(
    <div>
        <Header />
        <Checkbox handleCheckBox = {this.handleCheckBox}/>
        <SortDropdown 
        direction = {this.state.sortDirection}
        onChange = {this.handleSortDropdown}
        />
        <ItemList arrayOfItems = {this.getVisibleItems()} />
        <Footer />
    </div>
  )
}
}

export default Homepage