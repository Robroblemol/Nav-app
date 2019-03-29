import React,{ Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
 

import Nav from './Nav'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import '../style.css'

export default class App extends Component {
    render(){ 
        return (
        <div id = "app-container">
            <Router>
                <div>
                    <Nav />
                    {/* con el parametro exact para que no sigamostrando el home */}
                    <Route exact path="/" component = {Home}/>
                    <Route path="/contact" component = {Contact}/>
                    <Route path="/about" component = {About}/>

                </div>
            </Router>
        </div>
        )
    }
}