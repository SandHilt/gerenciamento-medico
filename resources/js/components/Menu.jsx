import React from "react";
import TabBar, { Tab } from "@material/react-tab-bar";

const Menu = ({ activeIndex, setActiveIndex }) => {
    const handleActiveTabsUpdate = newIndex => setActiveIndex(newIndex);

    const tabsInMenu = ["Entrar", "Registre-se"].map((palavra, index) => (
        <Tab key={index}>
            <span className="mdc-tab__text-label">{palavra}</span>
        </Tab>
    ));

    return (
        <TabBar
            activeIndex={activeIndex}
            handleActiveIndexUpdate={handleActiveTabsUpdate}
        >
            {tabsInMenu}
        </TabBar>
    );
};

export default Menu;
