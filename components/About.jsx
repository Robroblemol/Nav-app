import React,{Component} from 'react'

export default class About extends Component {
//    constructor(props){
//        super(props)
//    }
    componentDidMount(){
        document.body.style.backgroundColor = "goldenrod"
    }
    render(){
        return(
            <div>
                <h1>Pri nin</h1>
                <p>ĉi-tiu retejo estas pri cio nin </p>
            </div>
        )
    }
}

