import React, { Component } from 'react'

export class EventBind extends Component {
constructor(props)
{  super(props)
    this.state={
        message:'hello'

    }
}



    changemessage()
    { 
        this.setState(
           { message: 'fuck off'}
        )
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.changemessage.bind(this)}>click me</button>
            </div>
        )
    }
}

export default EventBind
