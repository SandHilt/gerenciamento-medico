import React from "react";
import TabBar, { Tab } from "@material/react-tab-bar";
import { Cell } from "@material/react-layout-grid";

const Menu = ({ activeIndex, handleActiveTabsUpdate, isRegister }) => {
    const tabsInMenu = ["Entrar", "Registre-se"].map((item, key) => (
        <Tab minWidth hidden={isRegister} isMinWidthIndicator {...{ key }}>
            <span className="mdc-tab__text-label">{item}</span>
        </Tab>
    ));

    const steps = [];

    steps.push(
        <Tab key={0} hidden={!isRegister} minWidth isMinWidthIndicator>
            <span className="mdc-tab__text-label">Voltar</span>
        </Tab>
    );

    for (let i = 1; i <= 4; i++) {
        const step = (
            <Tab
                className="item"
                minWidth
                isMinWidthIndicator
                hidden={!isRegister}
                key={i}
            >
                <span className="mdc-tab__text-label">Passo {i}</span>
            </Tab>
        );
        steps.push(step);
    }

    return (
        <Cell tag="nav" columns={12}>
            <TabBar
                activeIndex={activeIndex}
                handleActiveIndexUpdate={handleActiveTabsUpdate}
            >
                {tabsInMenu}
                {steps}
            </TabBar>
        </Cell>
    );
};

export default Menu;
