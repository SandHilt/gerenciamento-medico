import React, { useState, useEffect } from "react";
import TabBar, { Tab } from "@material/react-tab-bar";
import { Cell } from "@material/react-layout-grid";

const Menu = ({ activeIndex, handleActiveTabsUpdate, isRegister }) => {
    const tabsInMenu = ["Entrar", "Registre-se"].map((item, key) => (
        <Tab minWidth hidden={isRegister} isMinWidthIndicator {...{ key }}>
            <span className="mdc-tab__text-label">{item}</span>
        </Tab>
    ));

    const [steps, setSteps] = useState([]);
    const [backTab, setBackTab] = useState([]);

    useEffect(() => {
        setBackTab(
            <Tab
                className="item"
                hidden={!isRegister}
                minWidth
                isMinWidthIndicator
            >
                <span className="mdc-tab__text-label">Voltar</span>
            </Tab>
        );
    }, [isRegister]);

    useEffect(() => {
        const steps = [];

        for (let i = 1; i <= 4; i++) {
            const step = (
                <Tab
                    className="item"
                    minWidth
                    isMinWidthIndicator
                    hidden={activeIndex - 2 - i < 0}
                    key={i}
                >
                    <span className="mdc-tab__text-label">Passo {i}</span>
                </Tab>
            );
            steps.push(step);
        }

        setSteps(steps);
    }, [activeIndex]);

    return (
        <Cell id="Menu" tag="nav" columns={12}>
            <TabBar
                activeIndex={activeIndex}
                handleActiveIndexUpdate={handleActiveTabsUpdate}
            >
                {tabsInMenu}
                {backTab}
                {steps}
            </TabBar>
        </Cell>
    );
};

export default Menu;
