import React, { Component } from 'react';


class Register extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            email: '',
            password: '',
            errors: {
                name: '',
                email: '',
                password: ''
            }
        }
    }

    onChangeHandler = (event) => {
        event.preventDefault()
        const { name, value } = event.target
        // let name = event.target.name;
        // let value = event.target.value;

        let errors = this.state.errors;

        switch(name){
            case 'name': 
                errors.name = value.length < 5 ? 'name must be 5 letters' : '';
                break;
            case 'email': 
                errors.email = value.length < 5 ? 'email is invalid' : '';
                break;
            case 'password': 
                errors.password = value.length < 5 ? 'password must be 5 letter long': '';
                break
            default: 
                break;
        }
        this.setState({
            errors, [name]: value
        })
    }

    submitHandler = (event) => {
        event.preventDefault()

    }

    render() { 
        const {errors} = this.state 
        return ( 
            <div>
                <h2>Register</h2>
                <form onSubmit={this.submitHandler} noValidate>
                    <div className='form-group'>
                        <label>Name</label>
                        <input type="text" name='name' className='form-control' onChange={this.onChangeHandler} noValidate/>
                        {errors.name.length > 0 &&  <span className='text-danger'>{errors.name}</span>}
                    </div>
                    <div className='form-group'>
                        <label>Email</label>
                        <input type="text" className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <label>Password</label>
                        <input type="text" className='form-control'/>
                    </div>
                    <input type='submit' className='btn btn-primary' value='Register'/>
                </form>
            </div>
         );
    }
}
 
export default Register;