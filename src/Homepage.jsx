import React from "react"
import Header from "./components/Header.jsx"
import ItemList from "./components/ItemList.jsx"
import Footer from "./components/Footer.jsx"
import Checkbox from './components/Checkbox.jsx'
import Dropdown from './components/Dropdown.jsx'


class Homepage extends React.Component{
    constructor(props){
        super(props)
        this.handleCheckBox = this.handleCheckBox.bind(this)
        this.state = {
            items: [],
            allCategories: ["Roolandid", "Leechid"],
            selectedCategories:[],
            selectedCategory: "Leechid"
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
        return this.state.items.filter( item => item.category === this.state.selectedCategories[0] || this.state.selectedCategories[1] ) || this.state.items 
    }

    handleCheckBox(){
        let isChecked = event.target.checked

        if(isChecked){
            this.setState({
                selectedCategories: this.state.selectedCategories.concat(event.target.value),
                selectedCategory: event.target.value
            })
        }

        if(!isChecked){
            this.setState({
                selectedCategories: this.state.selectedCategories.filter(e => e !== event.target.value),
                selectedCategory: event.target.value
            })
        }
    }
    
    render(){
    console.log(this.state.selectedCategories, 'are the selectedcategories')

    return(
    <div>
        <Header />
        <Checkbox handleCheckBox = {this.handleCheckBox}/>
        <Dropdown />
        <ItemList arrayOfItems = {this.getVisibleItems()} />
        <Footer />
    </div>
  )
}
}
export default Homepage