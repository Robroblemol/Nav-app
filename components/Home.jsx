import React,{Component} from 'react'

export default class Home extends Component {
    componentDidMount(){
        document.body.style.backgroundColor = 'tomato'
    }
    render(){
        return(
            <div>
                <h1>Mia Aplikatio</h1>
                <p>Bonvenon al mia Aplikatio</p>
            </div>
        )
    }
}

