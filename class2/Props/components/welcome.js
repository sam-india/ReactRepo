import React, { Component } from "react";

class Welcome extends Component {
    render() {
        return ( < div >
            <
            p >

            Welcome { this.props.user } - from { this.props.location } { " " }

            <
            /p> <
            /div>
        );
    }
}

export default Welcome;