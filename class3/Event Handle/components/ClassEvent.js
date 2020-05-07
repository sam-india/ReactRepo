import React, { Component } from "react";

class ClassEvent extends Component {
    constructor() {
        super();
        this.state = {
            name: "Mark",
        };
    }

    clickHandler() {
        // this.setState({
        //   name: "Smith",
        // });
        console.log(this);
    }

    render() {
        return ( <
            div >
            <
            h1 > { this.state.name } < /h1>{" "} <
            button className = "btn btn-primary"
            onClick = { this.clickHandler } >
            Click { " " } <
            /button>{" "} <
            /div>
        );
    }
}

export default ClassEvent;