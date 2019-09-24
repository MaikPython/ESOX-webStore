import React from 'react'
import ReactDOM from 'react-dom'

import {handMade} from './../data/Data.jsx'
import {indusMade} from './../data/Data.jsx'
import Header from './components/Header.jsx'
import ItemList from './components/ItemList.jsx'



const node = document.getElementById("app")

     

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            items: handMade
        }
    }
    handleChange(){
        console.log(this.state.items);
        
        switch(event.target.value){
            case "indusMade":{
                this.setState({
                    items: indusMade,
                })
            }
            break
            case "handMade":{
                this.setState({  
                    items: handMade,
                })
            }
            break
        }
    }
    
    render(){
    return(
    <div>
        <Header />
        <select onChange={this.handleChange.bind(this)}>
            <option value="handMade">Käsitöö</option>
            <option value="indusMade">Tehasetöö</option>
        </select>
        <ItemList handMade = {this.state.items} />
    </div>
  )
}
}

ReactDOM.render(
    <App />,
    node
)

