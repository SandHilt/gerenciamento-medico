import React, { useEffect, useState } from 'react';
import Step0 from './steps/step0';
import Card, { CardPrimaryContent } from '@material/react-card';
import { Cell } from '@material/react-layout-grid';
import Login from './Login';
import Register from './Register';

const Content = ({ isRegister, setRegisterMode, activeIndex }) => {
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
                    <Card hidden={isRegister}>
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

    return <React.Fragment>{content}</React.Fragment>;
};

export default Content;
