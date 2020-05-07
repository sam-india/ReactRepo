import React, { Component } from 'react';

class Form extends Component {
    
    constructor(){
        super()
        this.state = {
            username : '',
            email: '',
            city: ''
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

    cityChangeHandler = (event) => {
        this.setState({
            city: event.target.value
        })
    }

    submitHandler = (event) => {
        event.preventDefault()
        console.log(`${this.state.username}, ${this.state.email}, ${this.state.city}`)
        
    
    }

    render() { 
        return ( 
        <form onSubmit={this.submitHandler}>
            <h1>{this.state.username}, {this.state.email}, {this.state.city}</h1>
            <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" value={this.state.username} onChange={this.usernameChangeHandler}/>
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="text" className="form-control" value={this.state.email} onChange={this.emailChangeHandler} />
            </div>
            <div className='form-group'>
                <label>City</label>
                <select className='form-control' value={this.state.city} onChange={this.cityChangeHandler}>
                    <option value='delhi'>Delhi</option>
                    <option value='mumbai'>Mumbai</option>
                    <option value='pune'>Pune</option>
                </select>
            </div>
            <input type='submit' value='Submit'/>
           
        </form>
        );
    }
}
 
export default Form;