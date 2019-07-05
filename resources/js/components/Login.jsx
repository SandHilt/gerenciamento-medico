import React from "react";
import { Headline5, Body1 } from "@material/react-typography";
import LoginField from "./LoginField";

export default function Login() {
    return (
        <React.Fragment>
            <header>
                <Headline5>Acesse a área do médico</Headline5>
            </header>
            <Body1>
                Médicos já credenciados ao Corpo Clínico do Hospital Copa D'Or
                ou em processo de credenciamento podem acessar a área do médico.
            </Body1>
            <Body1>
                Se você se encaixa em um desses casos, preencha os campos abaixo
                para acessar.
            </Body1>
            <LoginField />
        </React.Fragment>
    );
}
