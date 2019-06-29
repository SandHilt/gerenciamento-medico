import React, { useState } from "react";
import TextField, { HelperText, Input } from "@material/react-text-field";
import MaterialIcon from "@material/react-material-icon";

const LoginFieldItem = ({ helperTextContent, typeInput, name, label }) => {
    const [value, setValue] = useState("");
    let helperText;

    if (helperTextContent) {
        helperText = <HelperText>{helperTextContent}</HelperText>;
    }

    return (
        <TextField
            {...{ label, helperText }}
            trailingIcon={<MaterialIcon icon="trash" />}
            onTrailingIconSelect={() => setValue("")}
        >
            <Input
                {...{ id: name, name }}
                type={typeInput}
                value={value}
                onChange={({ currentTarget: { value } }) => setValue(value)}
            />
        </TextField>
    );
};

export default LoginFieldItem;
