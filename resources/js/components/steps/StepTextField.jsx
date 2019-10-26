import React, { useState } from "react";
import { Cell } from "@material/react-layout-grid";
import TextField, { HelperText, Input } from "@material/react-text-field";
import MaterialIcon from "@material/react-material-icon";

const StepTextField = ({
    defaultvalue = "",
    label,
    id,
    icon,
    type = "text",
    helperTextContent,
    desktopColumns,
    tabletColumns,
    maxLength = 255,
    ...props
}) => {
    const [value, setValue] = useState(defaultvalue);

    const onChange = ({ currentTarget: { value } }) => {
        if (value.length <= maxLength) {
            setValue(value);
        }
    };

    let leadingIcon;
    if (icon) {
        leadingIcon = <MaterialIcon {...{ icon }} />;
    }

    return (
        <Cell {...{ desktopColumns, tabletColumns }}>
            <TextField
                outlined
                trailingIcon={<MaterialIcon icon="delete" />}
                onTrailingIconSelect={() => setValue(defaultvalue)}
                {...{ label, leadingIcon }}
                helperText={<HelperText>{helperTextContent}</HelperText>}
            >
                <Input
                    required
                    {...{ value, type, id, name: id }}
                    onChange={onChange}
                    {...props}
                />
            </TextField>
        </Cell>
    );
};

export default StepTextField;
