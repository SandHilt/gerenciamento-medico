import React from "react";

const LinkExternal = ({ children, ...props }) => {
    return (
        <a {...props} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    );
};

export default LinkExternal;
