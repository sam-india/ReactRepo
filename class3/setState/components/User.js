import React, { Component } from "react";

class User extends Component {
    constructor() {
        super();
        this.state = {
            message: "This is message from state",
        };
    }

    buttonClickHandler() {
        this.setState({
            message: "This is updated message from state",
        });
    }

    render() {
        return ( <
            div >
            <
            h1 >
            Welcome { this.props.name }
            and { this.props.email } { " " } <
            /h1>{" "} <
            p > { this.state.message } < /p>{" "} <
            button className = "btn btn-primary"
            onClick = {
                () => this.buttonClickHandler() } >
            Click Me { " " } <
            /button>{" "} <
            /div>
        );
    }
}

export default User;