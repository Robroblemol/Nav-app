import React,{Component} from 'react'

import Home from './Home'
import '../style.css'

export default class App extends Component {
    render(){
        return (
        <div id = "app-container">
            <Home />
        </div>
        )
    }
}