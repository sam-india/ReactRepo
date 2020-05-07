import React, { Component } from "react";

function CityFunctionComponent() {
    const city = ["Delhi", "Mumbai", "Pune"];
    return ( <
        div > {
            city.map((c) => ( <
                h2 > { c } < /h2>
            ))
        } <
        /div>
    );
}

export default CityFunctionComponent;