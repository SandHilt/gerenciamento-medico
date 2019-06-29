import React from "react";

const LinkExternal = props => {
    const onlyProps = Object.assign({}, props, { children: null });
    return (
        <a {...onlyProps} target="_blank" rel="noopener noreferrer">
            {props.children}
        </a>
    );
};

export default LinkExternal;
