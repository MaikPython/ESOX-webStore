import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom";

import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { PersistGate } from 'redux-persist/integration/react'
import { ToastContainer, toast } from 'react-toastify';
import Router from './components/Router.jsx'


const {store, persistor} = configureStore()

class App extends React.Component{
    constructor(props){
        super(props)
        // this.handleCookie = this.handleCookie.bind(this)
    }
   
    handleLogOut = () => {
        this.setState({
            user: {
                email       : null,
                _id         : null,
                createdAt   : null
            },            
            token: null,
        })
    }

    render(){
        return(
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ToastContainer enableMultiContainer position={toast.POSITION.BOTTOM_LEFT} />
                    <BrowserRouter>                       
                        <Router />
                    </BrowserRouter>
            </PersistGate>
        </Provider>
        )
    }
}

const node = document.getElementById("app")


ReactDOM.render(
    <App />,
    node
)

