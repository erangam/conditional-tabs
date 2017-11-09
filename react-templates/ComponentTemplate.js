// Stateless component boilerplate

import React from "react";

const StatelessComponent = (props) => {
    return (
        <div className="image">
            <img src="#" alt="google map"/>
            <span className="title">{props}</span>
        </div>
    );
}

export default StatelessComponent