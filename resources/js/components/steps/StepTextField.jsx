import React, { useState } from "react";
import { Cell } from "@material/react-layout-grid";
import TextField, { HelperText, Input } from "@material/react-text-field";
import MaterialIcon from "@material/react-material-icon";

const StepTextField = ({
    defaultvalue,
    label,
    id,
    icon,
    type = "text",
    helperTextContent,
    desktopColumns,
    tabletColumns,
    ...props
}) => {
    const [value, setValue] = useState(defaultvalue);

    let trailingIcon;
    if (icon) {
        trailingIcon = <MaterialIcon {...{ icon }} />;
    }

    return (
        <Cell {...{ desktopColumns, tabletColumns }}>
            <TextField
                outlined
                {...{ label, trailingIcon }}
                helperText={<HelperText>{helperTextContent}</HelperText>}
            >
                <Input
                    required
                    {...{ value, type, id, name: id }}
                    onChange={({ currentTarget: { value } }) => setValue(value)}
                    {...props}
                />
            </TextField>
        </Cell>
    );
};

export default StepTextField;
