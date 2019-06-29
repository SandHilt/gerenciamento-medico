import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Headline4 } from '@material/react-typography';
import { Grid, Row, Cell } from '@material/react-layout-grid';
import Card, { CardPrimaryContent } from '@material/react-card';
import Login from './Login';
import Register from './Register';
import Footer from './Footer';
import Menu from './Menu';

const Main = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const authentication = [<Login />, <Register />].map((el, i) => (
        <Cell
            key={i}
            desktopColumns={6}
            tabletColumns={6}
            hidden={activeIndex != i}
        >
            <Card tag='article'>
                <CardPrimaryContent className='CardItem'>
                    {el}
                </CardPrimaryContent>
            </Card>
        </Cell>
    ));

    const offsetContent = <Cell desktopColumns={3} tabletColumns={1} />;

    return (
        <Grid tag='main' id='App'>
            <Row className='section' tag='header'>
                <Cell id='Container_CopaDor' align='middle' desktopColumns={4}>
                    <img
                        className='Logo Logo__CopaDor'
                        src='storage/images/Logo_CopaDor.png'
                        alt="Logo do Copa D'or"
                    />
                </Cell>
                <Cell align='middle' id='MainTitle' desktopColumns={8}>
                    <Headline4>Gerenciamento do Corpo Clínico</Headline4>
                </Cell>
                <Cell tag='nav'>
                    <Menu {...{ activeIndex, setActiveIndex }} />
                </Cell>
            </Row>
            {/* <Row tag="nav" className='section'>
            </Row> */}
            <Row className='section'>
                {offsetContent}
                {authentication}
            </Row>
            <Footer />
        </Grid>
    );
};

export default Main;

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
