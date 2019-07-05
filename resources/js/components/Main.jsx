import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Headline4 } from "@material/react-typography";
import { Grid, Row, Cell } from "@material/react-layout-grid";

import Footer from "./Footer";
import Menu from "./Menu";
import Content from "./Content";

const Main = () => {
    const data = {
        phone: "+552125453564",
        email: "cadastromedico@copador.com.br",
        website: "https://www.ipnet.cloud",
    };

    const [activeIndex, setActiveIndex] = useState(0);
    const [isRegister, setRegisterMode] = useState(false);

    const home = () => {
        setActiveIndex(0);
        setRegisterMode(false);
    };

    const handleActiveTabsUpdate = (index) => {
        if (index === 2) {
            home();
        } else {
            setActiveIndex(index);
        }
    };

    const handleNextStep = () => {
        if (isRegister) {
            setActiveIndex(activeIndex + 1);
        } else {
            setActiveIndex(3);
            setRegisterMode(true);
        }
    };

    return (
        <Grid tag="main" id="App">
            <Row className="section" tag="header">
                <Cell id="Container_CopaDor" align="middle" desktopColumns={4}>
                    <img
                        className="Logo Logo__CopaDor"
                        src="storage/images/Logo_CopaDor.png"
                        alt="Logo do Copa D'or"
                    />
                </Cell>
                <Cell align="middle" id="MainTitle" desktopColumns={8}>
                    <Headline4>Gerenciamento do Corpo Clínico</Headline4>
                </Cell>
                <Menu
                    {...{
                        activeIndex,
                        setActiveIndex,
                        isRegister,
                        handleActiveTabsUpdate,
                    }}
                />
            </Row>
            <Row tag="section" className="section">
                <Content
                    {...{
                        isRegister,
                        activeIndex,
                        setActiveIndex,
                        handleNextStep,
                        data,
                    }}
                />
            </Row>
            <Footer {...{ data }} />
        </Grid>
    );
};

export default Main;

if (document.getElementById("root")) {
    ReactDOM.render(<Main />, document.getElementById("root"));
}
