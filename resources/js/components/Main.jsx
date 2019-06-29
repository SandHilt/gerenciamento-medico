import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Headline4 } from "@material/react-typography";
import { Grid, Row, Cell } from "@material/react-layout-grid";
import TopAppBar, {
    TopAppBarRow,
    TopAppBarSection,
    TopAppBarFixedAdjust,
    TopAppBarTitle
} from "@material/react-top-app-bar";
import Card, { CardPrimaryContent } from "@material/react-card";
import TabBar, { Tab } from "@material/react-tab-bar";
import Login from "./Login";
import Register from "./Register";
import Footer from "./Footer";

const Main = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    function handleActiveIndexUpdate(newIndex) {
        setActiveIndex(newIndex);
    }

    const tabs = ["Entrar", "Registre-se"].map(function(palavra, index) {
        return (
            <Tab minWidth isMinWidthIndicator key={index}>
                <span className="mdc-tab__text-label">{palavra}</span>
            </Tab>
        );
    });

    const showContent = [<Login />, <Register />].map(function(el, i) {
        return (
            <Cell
                key={i}
                desktopColumns={6}
                tabletColumns={6}
                hidden={activeIndex != i}
            >
                <Card>
                    <CardPrimaryContent className="item">
                        {el}
                    </CardPrimaryContent>
                </Card>
            </Cell>
        );
    });

    return (
        <React.Fragment>
            <TopAppBar id="Menu">
                <TopAppBarRow>
                    <TopAppBarSection align="end">
                        <TabBar
                            activeIndex={activeIndex}
                            handleActiveIndexUpdate={handleActiveIndexUpdate}
                        >
                            {tabs}
                        </TabBar>
                    </TopAppBarSection>
                </TopAppBarRow>
            </TopAppBar>
            <TopAppBarFixedAdjust />
            <Grid id="App">
                <Row className="section" tag="header">
                    <Cell
                        id="Container_CopaDor"
                        align="middle"
                        desktopColumns={4}
                    >
                        <img
                            className="Logo Logo__CopaDor"
                            src="storage/images/Logo_CopaDor.png"
                            alt="Logo do Copa D'or"
                        />
                    </Cell>
                    <Cell
                        align="middle"
                        className="MainTitle"
                        desktopColumns={8}
                    >
                        <Headline4>Gerenciamento do Corpo Clínico</Headline4>
                    </Cell>
                </Row>
                <Row className="section">
                    <Cell desktopColumns={3} tabletColumns={1} />
                    {showContent}
                </Row>
                <Row className="section">
                    <Cell tag="footer">
                        <Footer />
                    </Cell>
                </Row>
            </Grid>
        </React.Fragment>
    );
};

export default Main;

if (document.getElementById("root")) {
    ReactDOM.render(<Main />, document.getElementById("root"));
}
