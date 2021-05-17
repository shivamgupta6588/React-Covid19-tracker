import React, { Component } from 'react'

export default class Stat extends Component {

constructor(props)
{
    super(props);


    this.state={
        count:1
   };
  
    
}

increment(props) {
    this.setState({
        count:this.state.count+10
        })
  }
    render() {
        return (
            <div>
               <h1>hi this is {this.state.count}</h1>
               <h2>{this.state.abc}</h2> 
               <button onClick={()=>this.increment()}>increment</button>
            </div>
        )
    }
}
