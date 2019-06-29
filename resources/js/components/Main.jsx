import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Headline4 } from '@material/react-typography';
import { Grid, Row, Cell } from '@material/react-layout-grid';

import Footer from './Footer';
import Menu from './Menu';
import Content from './Content';

const Main = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isRegister, setRegisterMode] = useState(false);

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
                <Cell tag='nav' hidden={isRegister}>
                    <Menu {...{ activeIndex, setActiveIndex }} />
                </Cell>
            </Row>
            <Row tag='section' className='section'>
                <Content {...{ isRegister, setRegisterMode, activeIndex }} />
            </Row>
            <Footer />
        </Grid>
    );
};

export default Main;

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
