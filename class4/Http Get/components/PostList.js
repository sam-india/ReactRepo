import React, { Component } from 'react';
import axios from 'axios';

class PostList extends Component {
    
    constructor(){
        super()

        this.state = {
            posts : [],
            error: ''
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts2s')
            .then(response => {
                this.setState({posts: response.data})
                console.log(response)
            })
            .catch(error => {
                console.log(error.stack)
                this.setState({error: 'Error if fetching data from api'})
            })
    }

    render() { 
        const { posts, error } = this.state;
        return ( 
            <div>
                <h1>Post List</h1>
                {
                    posts.length ?
                    posts.map(post => <div key={post.id} >{ post.title }</div>):
                    null
                }
                {
                    error ? <div>{error}</div>: null
                }
            </div>
         );
    }
}
 
export default PostList;