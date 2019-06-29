import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Headline4, Body2 } from "@material/react-typography";
import { Grid, Row, Cell } from "@material/react-layout-grid";
import Card, { CardPrimaryContent } from "@material/react-card";
import Login from "./Login";
import Register from "./Register";
import Footer from "./Footer";
import Menu from "./Menu";

const Main = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const authentication = [<Login />, <Register />].map((el, i) => (
        <Cell
            key={i}
            desktopColumns={6}
            tabletColumns={6}
            hidden={activeIndex != i}
        >
            <Card>
                <CardPrimaryContent className="item">{el}</CardPrimaryContent>
            </Card>
        </Cell>
    ));

    const offsetContent = <Cell desktopColumns={3} tabletColumns={1} />;

    return (
        <React.Fragment>
            <Menu {...{ activeIndex, setActiveIndex }} />
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
                    {offsetContent}
                    {authentication}
                </Row>
                <Row tag="footer">
                    <Cell desktopColumns={6}>
                        <Footer />
                    </Cell>
                    <Cell desktopColumns={6}>
                        <address>
                            <Body2>
                                Em caso de dúvidas, entre em contato pelo
                                telefone (21) 2545-3564 ou no e-mail
                                cadastromedico@copador.com.br
                            </Body2>
                        </address>
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
