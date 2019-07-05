import React from "react";
import { Cell } from "@material/react-layout-grid";
import { Button } from "@material/react-button";

const NextStepButton = ({ children, handleNextStep, ...props }) => {
    return (
        <Cell>
            <Button {...props} onClick={handleNextStep}>
                {children}
            </Button>
        </Cell>
    );
};

export default NextStepButton;
