import React, { Component } from "react";

class User extends Component {
    constructor() {
        super();
        this.state = {
            message: "Hello Mark!!",
        };
    }

    onUpdateMessage() {
        this.setState({
            message: 'Hello from State'
        })
    }

    render() {
        return ( <
            div >
            <
            h1 > { this.state.message } < /h1>{" "} <
            button onClick = {
                () => this.onUpdateMessage() }
            className = "btn btn-primary" > Click Here < /button>{" "} <
            /div>
        );
    }
}

export default User;