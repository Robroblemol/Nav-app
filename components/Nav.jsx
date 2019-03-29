import React,{Component} from 'react'
import { Link } from "react-router-dom";

import './nav.css'

export default class Nav extends Component {

    render(){
        return(
            <nav>
                <ul>
                    <li><Link to="/">Hejme</Link></li>
                    <li><Link to="/about">Pri nin</Link></li>
                    <li><Link to="/contact">Kontacto</Link></li>
                </ul>
            </nav>
        )
    }
}

