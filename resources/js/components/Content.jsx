import React, { useEffect, useState } from "react";
import Card from "@material/react-card";
import { Cell } from "@material/react-layout-grid";
import { Headline2 } from "@material/react-typography";

const Login = React.lazy(() => import("./Login"));
const Register = React.lazy(() => import("./Register"));

const Step0 = React.lazy(() => import("./steps/Step0"));
const Step1 = React.lazy(() => import("./steps/Step1"));
const Step2 = React.lazy(() => import("./steps/Step2"));
const Step3 = React.lazy(() => import("./steps/Step3"));
const Step4 = React.lazy(() => import("./steps/Step4"));

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
            // const authentication = [
            //     <Login />,
            //     <Register {...{ handleNextStep }} />,
            // ].map((el, i) => (
            //     <Cell
            //         key={i + 1}
            //         desktopColumns={6}
            //         tabletColumns={6}
            //         hidden={activeIndex != i}
            //     >
            //         <Card hidden={isRegister} className="CardItem">
            //             {el}
            //         </Card>
            //     </Cell>
            // ));
            const authentication = [];
            /**
             * Offset para elementos da autenticacao
             */
            authentication.push(
                <Cell key={2} desktopColumns={3} tabletColumns={1} />
            );

            let el;
            switch (activeIndex) {
                case 0:
                    el = <Login />;
                    break;

                case 1:
                    el = <Register {...{ handleNextStep }} />;
                    break;
            }

            authentication.push(
                <Cell key={activeIndex} desktopColumns={6} tabletColumns={6}>
                    <Card className="CardItem">
                        <React.Suspense
                            fallback={<Headline2>Aguarde...</Headline2>}
                        >
                            {el}
                        </React.Suspense>
                    </Card>
                </Cell>
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

                setContent(
                    <React.Suspense
                        fallback={<Headline2>Aguarde...</Headline2>}
                    >
                        {stepContent}
                    </React.Suspense>
                );
            }
        }
    }, [activeIndex]);

    return <React.Fragment>{content}</React.Fragment>;
};

export default Content;
