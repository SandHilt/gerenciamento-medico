import React, { useState } from "react";
import TopAppBar, {
    TopAppBarSection,
    TopAppBarRow,
    TopAppBarFixedAdjust
} from "@material/react-top-app-bar";
import TabBar, { Tab } from "@material/react-tab-bar";

const Menu = ({ activeIndex, setActiveIndex }) => {
    const handleActiveTabsUpdate = newIndex => setActiveIndex(newIndex);

    const tabsInMenu = ["Entrar", "Registre-se"].map((palavra, index) => (
        <Tab minWidth isMinWidthIndicator key={index}>
            <span className="mdc-tab__text-label">{palavra}</span>
        </Tab>
    ));

    return (
        <React.Fragment>
            <TopAppBar id="Menu">
                <TopAppBarRow>
                    <TopAppBarSection align="end">
                        <TabBar
                            activeIndex={activeIndex}
                            handleActiveIndexUpdate={handleActiveTabsUpdate}
                        >
                            {tabsInMenu}
                        </TabBar>
                    </TopAppBarSection>
                </TopAppBarRow>
            </TopAppBar>
            <TopAppBarFixedAdjust />
        </React.Fragment>
    );
};

export default Menu;
