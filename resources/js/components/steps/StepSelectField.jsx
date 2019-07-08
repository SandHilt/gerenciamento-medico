import React, { useState } from "react";
import Select, { SelectHelperText } from "@material/react-select";
import { Cell } from "@material/react-layout-grid";
import { Subtitle1 } from "@material/react-typography";

const StepSelectField = ({
    defaultValue,
    helperTextContent,
    id,
    label,
    multiple,
    options,
    desktopColumns,
    tabletColumns,
}) => {
    let initalValue = defaultValue;
    let labelText;

    if (multiple) {
        if (!defaultValue) {
            initalValue = [];
        }
        labelText = <Subtitle1>{label}</Subtitle1>;
    }

    const [value, setValue] = useState(initalValue);

    const onChange = ({ currentTarget: { value: newValue } }) => {
        if (multiple) {
            const copyValue = value.slice(0);
            const indexItem = copyValue.findIndex(
                (testValue) => testValue === newValue
            );

            if (indexItem < 0) {
                copyValue.push(newValue);
            } else {
                copyValue.splice(indexItem, 1);
            }

            setValue(copyValue);
        } else {
            setValue(newValue);
        }
    };

    let helperText;
    if (helperTextContent) {
        helperText = <SelectHelperText>{helperTextContent}</SelectHelperText>;
    }

    return (
        <Cell {...{ desktopColumns, tabletColumns }}>
            {labelText}
            <Select
                className={multiple ? "mdc-select--multiple" : ""}
                required
                outlined
                {...{
                    id,
                    helperText,
                    multiple,
                    name: id,
                    onChange,
                    options,
                    value,
                    label: multiple ? null : label,
                }}
            />
        </Cell>
    );
};

export default StepSelectField;
