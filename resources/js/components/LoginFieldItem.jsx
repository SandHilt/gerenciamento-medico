import React, { useState } from 'react';
import TextField, { HelperText, Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

const LoginFieldItem = ({
    helperTextContent,
    icon,
    typeInput,
    name,
    label,
}) => {
    const [value, setValue] = useState('');
    let helperText, iconContent;

    if (helperTextContent) {
        helperText = <HelperText>{helperTextContent}</HelperText>;
    }

    if (icon) {
        iconContent = <MaterialIcon {...{ icon }} />;
    }

    return (
        <React.Fragment>
            <TextField
                {...{ label, helperText }}
                trailingIcon={<MaterialIcon icon='delete' />}
                leadingIcon={iconContent}
                onTrailingIconSelect={() => setValue('')}
            >
                <Input
                    maxLength={255}
                    {...{ id: name, name }}
                    type={typeInput}
                    value={value}
                    onChange={({ currentTarget: { value } }) => setValue(value)}
                />
            </TextField>
        </React.Fragment>
    );
};

export default LoginFieldItem;
