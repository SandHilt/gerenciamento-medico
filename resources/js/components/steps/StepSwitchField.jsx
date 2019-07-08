import React, { useState } from "react";
import Switch from "@material/react-switch";
import { Cell } from "@material/react-layout-grid";
import { Subtitle1 } from "@material/react-typography";
import List, { ListItem, ListItemText } from "@material/react-list";

const StepSwitchField = ({
    id,
    label,
    pair = [{ label: "Não" }, { label: "Sim" }],
    defaultValue = false,
    desktopColumns,
    tabletColumns,
}) => {
    const [value, setValue] = useState(defaultValue);
    const [content, setContent] = useState(null);

    const handleChange = ({ target: { checked } }) => {
        const index = checked ? 1 : 0;
        const el = pair[index];
        if (el.children) {
            setContent(el.children);
        } else {
            if (content) {
                setContent(null);
            }
        }

        setValue(checked);
    };

    return (
        <Cell {...{ desktopColumns, tabletColumns }}>
            <Subtitle1>{label}</Subtitle1>
            <List checkboxList selectedIndex={[]}>
                <ListItem>
                    <Switch
                        nativeControlId={id}
                        checked={value}
                        onChange={handleChange}
                    />
                    <ListItemText primaryText={pair[value ? 1 : 0].label} />
                </ListItem>
            </List>
            {content}
        </Cell>
    );
};

export default StepSwitchField;
