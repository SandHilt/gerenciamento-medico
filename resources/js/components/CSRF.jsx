import React from "react";

const CSRF = () => {
    const value = document.head.querySelector("meta[name='csrf-token']")
        .content;

    return <input type="hidden" name="_token" {...{ value }} />;
};

export default CSRF;
