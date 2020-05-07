import React, { Component } from 'react';
import axios from 'axios';

class PostCreate extends Component {
    constructor(){
        super()
        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value })
    }

    submitHandler = (event) => {
        event.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }


    render() { 
        const {userId, title, body} = this.state 
        return ( 
            <form onSubmit={this.submitHandler}>
                <div>
                    <input type="text" name="userId" value={userId} onChange={this.changeHandler} />
                </div>
                <div>
                    <input type="text" name="title" value={title} onChange={this.changeHandler}/>
                </div>
                <div>
                    <input type="text" name="body" value={body} onChange={this.changeHandler} />
                </div>
                <div>
                    <input type='submit' value='Submit'/>
                </div>
            </form>
         );
    }
}
 
export default PostCreate;