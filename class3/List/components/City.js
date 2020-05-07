import React, { Component } from "react";

class City extends Component {
    city = ["Delhi", "Mumbai", "Pune", "Pune", "Pune"];
    render() {
        return ( <
            div > { " " } {
                /* <h2> {this.city[0]} </h2> <h2> {this.city[1]} </h2>{" "}
                                            <h2> {this.city[2]} </h2>{" "} */
            } { " " } {
                this.city.map((c) => ( <
                    h2 > { c } < /h2>
                ))
            } { " " } <
            /div>
        );
    }
}

export default City;