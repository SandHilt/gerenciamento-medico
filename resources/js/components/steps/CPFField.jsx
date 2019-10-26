import React, { useState } from "react";
import StepTextField from "./StepTextField";
import isValidCpf from "@brazilian-utils/is-valid-cpf";

const CPFField = () => {
    const [valid, setValid] = useState(true);

    const onBlur = ({ currentTarget: { value: cpf } }) => {
        setValid(isValidCpf(cpf));
    };

    return (
        <StepTextField
            type="number"
            helperTextContent="Somente números."
            id="CPF"
            label="CPF"
            maxLength={11}
            {...{ onBlur }}
            isValid={valid}
        />
    );
};

export default CPFField;
