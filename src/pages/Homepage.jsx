import React from "react"
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
            sortDirection: 1,
            selected: true
        }     
    }

    componentDidMount(){
        this.fetchItems()
    }

    fetchItems = () => { 
        fetch("/api/v1/items")
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

    handleDefaultCheckBoxValue = () => {
        if(this.state.selected){
        this.setState({
            selectedCategories: "Leechid",
        })
        }
    }

    handleCheckBox(){
        this.setState({selected: !this.state.selected});
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

export default Homepage