// Stateless component boilerplate

import React from "react";

const StatelessComponent = (props) => {
    return (
        <div className="nav-controls">
            <a href="/feldman/chapter-eight/one" className="previous">
                <svg
                    focusable="false"
                    className="pe-icon--chevron-back-24"
                    role="img"
                    aria-label="audio"
                >
                    <use xlinkHref="#chevron-back-24" />
                </svg>
            </a>

            <a href="/feldman/chapter-eight/two" className="next">
                <svg
                    focusable="false"
                    className="pe-icon--chevron-next-24"
                    role="img"
                    aria-label="audio"
                >
                    <use xlinkHref="#chevron-next-24" />
                </svg>
            </a>
        </div>
    );
}

export default StatelessComponent