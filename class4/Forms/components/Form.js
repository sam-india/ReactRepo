import React, { Component } from 'react';

class Form extends Component {
    
    constructor(){
        super()
        this.state = {
            username : '',
            email: ''
        }
    }

    usernameChangeHandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    emailChangeHandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    render() { 
        return ( 
        <form >
            <h1>{this.state.username}, {this.state.email}</h1>
            <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" value={this.state.username} onChange={this.usernameChangeHandler}/>
            </div>
            <div className="form-group">
                <lable>Email</lable>
                <input type="text" className="form-control" value={this.state.email} onChange={this.emailChangeHandler} />
            </div>
        </form>
        );
    }
}
 
export default Form;