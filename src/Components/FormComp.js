import React, { Component } from 'react';

class FormComp extends Component {

    constructor(props)
    {
        super(props)
        this.state={
            username:''
        }
    }
    UserChange=(event)=>
    {
         this.setState({username:event.target.value})

    }
    render() {
        return (
            <form>
            <div>
              <label>Username  </label>
              <input type='text' value = {this.state.username} onChange={this.UserChange}/>
            </div>
            </form>
        );
    }
}

export default FormComp;