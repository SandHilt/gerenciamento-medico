import React from "react";
import { Body1, Headline5 } from "@material/react-typography";
import { CardActionButtons } from "@material/react-card";
import Button from "@material/react-button";

const Register = ({ nextStep }) => {
    return (
        <React.Fragment>
            <header>
                <Headline5>Quero me credenciar</Headline5>
            </header>
            <Body1>
                Para participar do processo de credenciamento do Hospital Copa
                D'Or, será necessário efetuar um cadastro no sistema.
            </Body1>
            <Body1>
                Um código de cadastro será exigido para que o médico possa
                iniciar o cadastro. Caso você já possua o código, clique em
                "Quero me credenciar".
            </Body1>
            <CardActionButtons>
                <Button raised onClick={nextStep}>
                    Quero me credenciar
                </Button>
            </CardActionButtons>
        </React.Fragment>
    );
};

export default Register;
