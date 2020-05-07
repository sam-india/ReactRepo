import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import ClassEvent from "./components/ClassEvent";
import ClickEventBind from "./components/ClickEventBind";

function App() {
    return ( <
        div >
        <
        h2 > App Component < /h2> <ClickEventBind / >
        <
        /div>
    );
}

export default App;