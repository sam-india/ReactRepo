import React from "react";

const Hello = (props) => {
    console.log(props);
    return ( <
        p >
        Welcome { props.user } - { props.location } <
        /p>
    );
};

export default Hello;