import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import City from "./components/City";
import CityFunctionComponent from "./components/CityFunctionComponent";

function App() {
    return ( <
        div >
        <
        h2 > App Component < /h2> <City / >
        <
        br / >
        <
        CityFunctionComponent / >
        <
        /div>
    );
}

export default App;