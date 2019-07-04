import React from "react";

import Button from "@material/react-button";
import { CardActionButtons } from "@material/react-card";
import LoginFieldItem from "./LoginFieldItem";

const LoginField = () => (
    <form method="POST">
        <LoginFieldItem
            label="Usuário"
            helperTextContent="Insira seu usuário."
            typeInput="text"
            name="user"
            icon="person"
        />
        <LoginFieldItem
            label="Senha"
            helperTextContent="Insira sua senha."
            typeInput="password"
            name="password"
            icon="lock"
        />
        <CardActionButtons>
            <Button type="submit" raised>
                Entrar
            </Button>
        </CardActionButtons>
    </form>
);
export default LoginField;
