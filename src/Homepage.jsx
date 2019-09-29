import React from "react"
import Header from "./components/Header.jsx"
import ItemList from "./components/ItemList.jsx"


class Homepage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            items: [],
            selectedCategory: "Roolandid"
        }
    }

    componentDidMount(){
        this.fetchItems()
    }

    fetchItems = () => { 
        fetch("http://localhost:9000/api/items")
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
    return(
    <div>
        <Header />
        <select onChange={this.handleDropdown.bind(this)}>
            <option value="Roolandid">Käsitöö</option>
            <option value="Leechid">Tehasetöö</option>
        </select>
        <ItemList arrayOfItems = {this.getVisibleItems()} />
    </div>
  )
}
}
export default Homepage