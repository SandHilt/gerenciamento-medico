import React, { useState } from "react";
import TextField, { HelperText, Input } from "@material/react-text-field";
import MaterialIcon from "@material/react-material-icon";
import Button from "@material/react-button";

const LoginField = () => {
    let [user, setUser] = useState("");
    let [pass, setPass] = useState("");

    return (
        <form>
            <TextField
                label="Usuário"
                helperText={<HelperText>Insira seu usuário.</HelperText>}
                trailingIcon={<MaterialIcon icon="user" />}
                onTrailingIconSelect={() => setUser("")}
            >
                <Input
                    type="text"
                    id="user"
                    name="user"
                    value={user}
                    onChange={({ currentTarget: { value } }) => setUser(value)}
                />
            </TextField>
            <TextField
                label="Senha"
                helperText={<HelperText>Insira sua senha.</HelperText>}
                trailingIcon={<MaterialIcon icon="password" />}
                onTrailingIconSelect={() => setPass("")}
            >
                <Input
                    type="password"
                    id="password"
                    name="password"
                    value={pass}
                    onChange={({ currentTarget: { value } }) => setPass(value)}
                />
            </TextField>
            <Button type="submit" outlined>
                Entrar
            </Button>
        </form>
    );
};

export default LoginField;
