import React, { useState } from "react";
import { Cell } from "@material/react-layout-grid";
import { Subtitle1 } from "@material/react-typography";
import List, { ListItemText, ListItem } from "@material/react-list";
import Checkbox from "@material/react-checkbox";

const StepCheckboxListField = ({
    label,
    options,
    tabletColumns,
    desktopColumns,
}) => {
    const [selectedIndex, setIndexes] = useState([]);
    let opts;

    if (options) {
        opts = options.map(({ label, id }, index) => {
            return (
                <ListItem key={index}>
                    <Checkbox {...{ id, name: id }} />
                    <ListItemText primaryText={label} />
                </ListItem>
            );
        });
    }

    return (
        <Cell {...{ desktopColumns, tabletColumns }}>
            <Subtitle1>{label}</Subtitle1>
            <List
                checkboxList
                selectedIndex={selectedIndex}
                handleSelect={(_selectedIndex, allSelected) =>
                    setIndexes(allSelected)
                }
            >
                {opts}
            </List>
        </Cell>
    );
};

export default StepCheckboxListField;
