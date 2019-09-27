import React from "react"

// import {handMade} from "./../data/Data.jsx"
// import {indusMade} from "./../data/Data.jsx"
import Header from "./components/Header.jsx"
import ItemList from "./components/ItemList.jsx"


class Homepage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            items: [],
            selectedCategory: "Käsitöölandid"
        }
    }

    componentDidMount(){
        console.log("mount");
        this.fetchItems()
    }

    fetchItems = () => { 
        fetch("http://localhost:9000/api/items")
        .then(res=>{
            console.log(res, "responded");
            return res.json()
        }).then(items=>{
            console.log(items, "items")
            this.setState({
                items
            })
        })
        .catch(err=>{   
            console.log(err, "error");
            
        })
    }

    handleDropdown(){
       this.setState({
           selectedCategory: event.target.value
       }
       )
    }

    getVisibleItems = () =>{
        return this.state.items.filter( item => item.category === this.state.selectedCategory )
    }
    
    render(){
    console.log(this.state) 
    return(

    <div>
        <Header />
        <select onChange={this.handleDropdown.bind(this)}>
            <option value="Käsitöölandid">Käsitöö</option>
            <option value="Leechid">Tehasetöö</option>
        </select>
        <ItemList handMade = {this.getVisibleItems()} />
    </div>
  )
}
}
export default Homepage