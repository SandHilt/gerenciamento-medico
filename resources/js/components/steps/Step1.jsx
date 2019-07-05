import React, { useState, useEffect } from "react";
import TextField, { Input, HelperText } from "@material/react-text-field";
import NextStepButton from "../NextStepButton";
import { Cell } from "@material/react-layout-grid";
import { Body1, Headline4, Subtitle1 } from "@material/react-typography";
import { parsePhoneNumberFromString as parsePhone } from "libphonenumber-js";
import { Button } from "@material/react-button";
import Select, { Option } from "@material/react-select";
import MaterialIcon from "@material/react-material-icon";

const Step1 = ({ handleNextStep, data: { phone, email } }) => {
    const [code, setCode] = useState("");
    const [isValidCode, setValidatyCode] = useState(true);

    const [content, setContent] = useState(null);

    /**
     * Campos
     */
    const [name, setName] = useState("");
    const [genre, setGenre] = useState("M");

    /**
     * Alguma validação
     */
    const validate = () => {
        if (code == 18837) {
            setValidatyCode(true);
        } else {
            setValidatyCode(false);
        }
    };

    const handleChangeGenre = ({ currentTarget: { value } }) => {
        return setGenre(value);
    };

    useEffect(() => {
        if (isValidCode) {
            setContent(
                <React.Fragment>
                    <Cell columns={12}>
                        <Headline4>Preencha os campos abaixo:</Headline4>
                        <Subtitle1>Todos os campos são obrigatórios.</Subtitle1>
                    </Cell>
                    <Cell>
                        <TextField
                            outlined
                            label="Nome completo"
                            trailingIcon={<MaterialIcon icon="person" />}
                            helperText={
                                <HelperText>
                                    Seu nome completo sem abreviações.
                                </HelperText>
                            }
                        >
                            <Input
                                required
                                value={name}
                                onChange={({ currentTarget: { value } }) =>
                                    setName(value)
                                }
                                type="text"
                                maxLength={255}
                            />
                        </TextField>
                    </Cell>
                    <Cell>
                        <Select
                            required
                            outlined
                            label="Sexo"
                            value={genre}
                            onChange={(e) => handleChangeGenre(e)}
                        >
                            <Option value="M">Masculino</Option>
                            <Option value="F">Feminino</Option>
                        </Select>
                    </Cell>
                    <Cell>
                        <TextField
                            leadingIcon={<MaterialIcon icon="event" />}
                            required
                            outlined
                            label="Data de nascimento"
                        >
                            <Input type="date" />
                        </TextField>
                    </Cell>
                    <Cell>
                        <TextField label="Ano de formatura">
                            <Input
                                type="number"
                                min={new Date().getFullYear() - 100}
                                max={new Date().getFullYear()}
                            />
                        </TextField>
                    </Cell>
                </React.Fragment>
            );
        }
    }, [isValidCode, name, genre]);

    return (
        <React.Fragment>
            <Cell desktopColumns={4}>
                <TextField
                    outlined
                    label="Código para o cadastro"
                    helperText={
                        <HelperText>
                            O código deve ser um número de 5 dígitos.
                        </HelperText>
                    }
                >
                    <Input
                        required
                        name="code"
                        type="number"
                        value={code}
                        onChange={({ currentTarget: { value } }) =>
                            setCode(value)
                        }
                        max={10 ** 6 - 1}
                        disabled={isValidCode}
                    />
                </TextField>
                <Button
                    onClick={() => validate()}
                    disabled={isValidCode}
                    raised
                >
                    Validar
                </Button>
            </Cell>
            <Cell desktopColumns={8}>
                <Body1>
                    Caso você não possua o código para cadastro, entre em
                    contato com o cadastro médico no telefone{" "}
                    <a href={`tel:${phone}`}>
                        {parsePhone(phone).formatNational()}
                    </a>{" "}
                    ou no e-mail <a href={`mailto:${email}`}>{email}</a>
                </Body1>
            </Cell>
            {content}
            <Cell columns={12}>
                <NextStepButton outlined disabled {...{ handleNextStep }}>
                    Próximo
                </NextStepButton>
            </Cell>
        </React.Fragment>
    );
};

export default Step1;
