import React, { Component } from "react";

class Auth extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: true,
        };
    }

    render() {
        return this.state.isLoggedIn && < h2 > Welcome Mark < /h2>
    }
}

export default Auth;