import React from "react";
import "./App.css";
import Welcome from "./components/welcome";
import Hello from "./components/hello";

function App() {
    return ( <
        div >
        <
        h1 > CLass component with props < /h1>  
		<h1 > App Component < /h1> 
		<Welcome user = "Mark" location = "Pune" / >
        <
        Welcome user = "Smith"
        location = "Delhi" / >
        <
        Welcome user = "Watson"
        location = "Chennai" / >
        <
        h1 > Function component with props < /h1>{" "} <
        Hello user = "Stone"
        location = "India" / >
        <
        Hello user = "Shaw"
        location = "USA" / >
        <
        Hello user = "Stacy"
        location = "UK" / >
        <
        /div>
    );
}

export default App;