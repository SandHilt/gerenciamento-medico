import React from "react";
import StepTextField from "./StepTextField";

const StepTextConfirmationField = ({
    prefix = "Confirmar",
    id,
    label,
    ...props
}) => (
    <React.Fragment>
        <StepTextField {...props} {...{ label, id }} />
        <StepTextField
            {...props}
            label={`${prefix} ${label}`}
            id={`confirm_${id}`}
        />
    </React.Fragment>
);

export default StepTextConfirmationField;
