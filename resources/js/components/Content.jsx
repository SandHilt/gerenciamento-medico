import React, { useEffect, useState } from "react";
import Step0 from "./steps/Step0";
import Card from "@material/react-card";
import { Cell } from "@material/react-layout-grid";
import Login from "./Login";
import Register from "./Register";

const Content = ({ isRegister, activeIndex, nextStep }) => {
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
                <Register {...{ nextStep }} />,
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
                let content;

                switch (step) {
                    case 0:
                        content = <Step0 />;
                        break;
                    case 1:
                        content = <div>Primeiro</div>;
                        break;
                    default:
                        break;
                }
                // const nextButton = (
                //     <Cell>
                //         <Button raised onClick={nextStep}>
                //             Continuar
                //         </Button>
                //     </Cell>
                // );

                setContent(content);
            }
        }
    }, [activeIndex]);

    return <React.Fragment>{content}</React.Fragment>;
};

export default Content;
