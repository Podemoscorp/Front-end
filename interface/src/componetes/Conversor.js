import React, {Component} from 'react'

export default class Conversor extends Component{
    
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div className="coversor">
                <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
                <input type="text"></input>
                <input type="button" value="converter"></input>
                <h2>valor convertido</h2>
            </div>
        )
    }
}