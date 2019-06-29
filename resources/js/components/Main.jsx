import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Headline4 } from '@material/react-typography';
import { Grid, Row, Cell } from '@material/react-layout-grid';
import Card, { CardPrimaryContent } from '@material/react-card';
import Login from './Login';
import Register from './Register';
import Footer from './Footer';
import Menu from './Menu';
import Step0 from './steps/step0';

const Main = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isRegister, setRegisterMode] = useState(false);
    const [step, setStep] = useState(-1);
    const [content, setContent] = useState(null);

    /**
     * Para entrar no modo de registro
     */
    useEffect(() => {
        if (!isRegister) {
            /**
             * Parte inicial para autenticação
             */
            const authentication = [
                <Login />,
                <Register {...{ setRegisterMode, setStep }} />,
            ].map((el, i) => (
                <Cell
                    key={i + 1}
                    desktopColumns={6}
                    tabletColumns={6}
                    hidden={activeIndex != i}
                >
                    <Card hidden={isRegister} tag='article'>
                        <CardPrimaryContent className='CardItem'>
                            {el}
                        </CardPrimaryContent>
                    </Card>
                </Cell>
            ));
            /**
             * Offset para elementos da autenticacao
             */
            authentication.unshift(
                <Cell key={0} desktopColumns={3} tabletColumns={1} />
            );

            setContent(authentication);
        } else {
            if (step >= 0) {
                switch (step) {
                    case 0:
                        setContent(<Step0 />);
                        break;
                    default:
                        break;
                }
            }
        }
    }, [isRegister, step, activeIndex]);

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
            <Row className='section'>{content}</Row>
            <Footer />
        </Grid>
    );
};

export default Main;

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
