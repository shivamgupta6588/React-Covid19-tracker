import React, { Component } from 'react'

export class ClassClick extends Component {


     clickme()
    {console.log("button is clicked")}
    render() {
        return (
            <div>
                <button onClick={this.clickme}>click me</button>
            </div>
        )
    }
}

export default ClassClick
