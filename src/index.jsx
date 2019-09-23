import React from 'react'
import ReactDOM from 'react-dom'

import {handMade} from './../data/Data.jsx'
import Header from './components/Header.jsx'
import ItemList from './components/ItemList.jsx'



console.log(handMade);


const node = document.getElementById("app")
  
 const App = () =>{
     return(
         <>
            <Header />
            <ItemList handMade = {handMade} />
         </>
     )
 }

ReactDOM.render(
    <App />,
    node
)

