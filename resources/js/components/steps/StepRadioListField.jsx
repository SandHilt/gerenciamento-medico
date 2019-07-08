import React, { useState } from "react";
import { Cell } from "@material/react-layout-grid";
import List, { ListItem, ListItemText } from "@material/react-list";
import Radio, { NativeRadioControl } from "@material/react-radio";
import { Subtitle1 } from "@material/react-typography";

const StepRadioListField = ({ label, listItem, field, defaultValue }) => {
    const [content, setContent] = useState(null);
    const [value, setValue] = useState(defaultValue);

    const handleChange = ({ currentTarget: { value } }) => {
        setValue(value);
        const index = listItem.findIndex(({ name }) => name === value);
        const el = listItem[index];
        if (el.children) {
            setContent(el.children);
        } else {
            if (content) {
                setContent(null);
            }
        }
    };

    return (
        <Cell>
            <Subtitle1>{label}</Subtitle1>
            <List radioList>
                {listItem.map(({ name }, key) => (
                    <ListItem {...{ key }}>
                        <Radio>
                            <NativeRadioControl
                                {...{ name }}
                                checked={value === name}
                                value={name}
                                id={`${name}-${field}`}
                                onChange={handleChange}
                            />
                        </Radio>
                        <ListItemText primaryText={name} />
                    </ListItem>
                ))}
            </List>
            {content}
        </Cell>
    );
};

export default StepRadioListField;
