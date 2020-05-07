import React, { Component } from "react";

class ClickEventBind extends Component {
    constructor() {
        super();
        this.state = {
            message: "This is state",
        };
        this.clickEventHandler = this.clickEventHandler.bind(this);
    }

    //   clickEventHandler() {
    //     console.log(this);
    //     this.setState({
    //       message: "This is updated state",
    //     });
    //   }

    clickEventHandler = () => {
        console.log(this);
        this.setState({
            message: "This is updated state",
        });
    };

    render() {
        return ( <
            div >
            <
            h1 > { this.state.message } < /h1>{" "} { /* <button onClick={this.clickEventHandler.bind(this)}> Click </button> */ } { " " } { /* <button onClick={() => this.clickEventHandler()}> Click </button>{" "} */ } { " " } { /* <button onClick={this.clickEventHandler}> Click </button>{" "} */ } { " " } <
            button onClick = { this.clickEventHandler } > Click < /button> <
            /div>
        );
    }
}

export default ClickEventBind;