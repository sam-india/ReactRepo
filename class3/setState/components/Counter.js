import React, { Component } from "react";

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
        };
    }

    increment() {
        //this.state.counter = this.state.counter + 1;
        this.setState({
            counter: this.state.counter + 1
        })
        console.log(this.state.counter);
    }

    render() {
        return ( <
            div >
            <
            h1 > Counter: { this.state.counter } < /h1> <
            button onClick = {
                () => this.increment()
            } > Increment < /button> < /
            div >
        );
    }
}

export default Counter;