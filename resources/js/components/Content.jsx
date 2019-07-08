import React, { useEffect, useState } from "react";
import Card from "@material/react-card";
import { Cell } from "@material/react-layout-grid";
import Login from "./Login";
import Register from "./Register";

import Step0 from "./steps/Step0";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";

const Content = ({ isRegister, activeIndex, handleNextStep, data }) => {
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
                <Register {...{ handleNextStep }} />,
            ].map((el, i) => (
                <Cell
                    key={i + 1}
                    desktopColumns={6}
                    tabletColumns={6}
                    hidden={activeIndex != i}
                >
                    <Card hidden={isRegister} className="CardItem">
                        {el}
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
            const step = activeIndex - 3;

            if (step >= 0) {
                let stepContent;

                switch (step) {
                    case 0:
                        stepContent = <Step0 {...{ handleNextStep }} />;
                        break;
                    case 1:
                        stepContent = <Step1 {...{ handleNextStep, data }} />;
                        break;
                    case 2:
                        stepContent = <Step2 {...{ handleNextStep }} />;
                        break;
                    case 3:
                        stepContent = <Step3 {...{ handleNextStep }} />;
                        break;
                    case 4:
                        stepContent = <Step4 {...{ handleNextStep }} />;
                        break;
                    default:
                        break;
                }

                setContent(stepContent);
            }
        }
    }, [activeIndex]);

    return <React.Fragment>{content}</React.Fragment>;
};

export default Content;
