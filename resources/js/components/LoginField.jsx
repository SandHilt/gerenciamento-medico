import React from "react";

import Button from "@material/react-button";
import { CardActionButtons } from "@material/react-card";
import LoginFieldItem from "./LoginFieldItem";
import CSRF from "./CSRF";

const LoginField = () => (
    <form method="POST">
        <CSRF />
        <LoginFieldItem
            label="Usuário"
            helperTextContent="Insira seu usuário."
            typeInput="text"
            name="user"
            icon="person"
            disabled
        />
        <LoginFieldItem
            label="Senha"
            helperTextContent="Insira sua senha."
            typeInput="password"
            name="password"
            icon="lock"
            disabled
        />
        <CardActionButtons>
            <Button disabled type="submit" raised>
                Entrar
            </Button>
        </CardActionButtons>
    </form>
);
export default LoginField;
