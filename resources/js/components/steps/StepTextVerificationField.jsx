import React, { useState, useEffect } from "react";
import StepTextField from "./StepTextField";

const loadValidationScript = (typeOfValidation = null) => {
    switch (typeOfValidation) {
        case "cpf":
            return import("@brazilian-utils/is-valid-cpf");
        case "cep":
            return import("@brazilian-utils/is-valid-cep");
        case "phone":
            return import("@brazilian-utils/is-valid-phone");
    }

    return null;
};

const StepTextVerificationField = ({ typeOfValidation, ...props }) => {
    const [isValid, setValid] = useState(true);
    // const [value, setValue] = useState(null);

    let onBlur;
    const validRequest = loadValidationScript(typeOfValidation);

    if (validRequest) {
        onBlur = ({ currentTarget: { value } }) => {
            validRequest.then(({ default: validTest }) => {
                const isValid = validTest(value);

                // if (isValid) {
                //     setValue(value);
                // }

                setValid(isValid);
            });
        };
    }

    // if (typeOfValidation === "cep") {
    //     useEffect(() => {
    //         if (isValid) {
    //             import("cep-promise").then(({ default: searchCEP }) => {
    //                 searchCEP(value).then(console.log);
    //             });
    //         }
    //     }, [isValid]);
    // }

    return <StepTextField {...{ isValid, onBlur }} {...props} />;
};

export default StepTextVerificationField;
