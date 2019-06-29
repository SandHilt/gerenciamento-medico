import React, { useState } from "react";

import Button from "@material/react-button";
import LoginFieldItem from "./LoginFieldItem";

const LoginField = () => (
    <form>
        <LoginFieldItem
            label="Usuário"
            helperTextContent="Insira seu usuário."
            typeInput="text"
            name="user"
        />
        <LoginFieldItem
            label="Senha"
            helperTextContent="Insira sua senha."
            typeInput="password"
            name="password"
        />
        <Button type="submit" outlined>
            Entrar
        </Button>
    </form>
);
export default LoginField;
