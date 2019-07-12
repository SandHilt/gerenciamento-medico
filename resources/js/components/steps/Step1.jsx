import React, { useState, useEffect } from "react";
import TextField, { Input, HelperText } from "@material/react-text-field";
import NextStepButton from "../NextStepButton";
import { Cell, Row } from "@material/react-layout-grid";
import {
    Body1,
    Headline4,
    Subtitle1,
    Headline5,
} from "@material/react-typography";
import { parsePhoneNumberFromString as parsePhone } from "libphonenumber-js";
import { Button } from "@material/react-button";

import CSRF from "../CSRF";
import StepSelectField from "./StepSelectField";
import StepTextField from "./StepTextField";
import StepCheckboxListField from "./StepCheckboxListField";
import StepTextConfirmationField from "./StepTextConfirmationField";
import StepSwitchField from "./StepSwitchField";

const Step1 = ({ handleNextStep, data: { phone, email, areas } }) => {
    const [code, setCode] = useState("");
    const [isValidCode, setValidatyCode] = useState(false);

    const [content, setContent] = useState(null);

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

    const today = new Date().toISOString().slice(0, 10);
    const yearToday = new Date().getFullYear();

    const allAreas = areas.map((area, index) => {
        return { label: area, value: `area-${index}` };
    });

    useEffect(() => {
        if (isValidCode) {
            setContent(
                <React.Fragment>
                    <Cell columns={12}>
                        <Headline4>Preencha os campos abaixo:</Headline4>
                        <Subtitle1>Todos os campos são obrigatórios.</Subtitle1>
                    </Cell>
                    <Cell columns={12} tag="form">
                        <Row>
                            <Cell columns={12}>
                                <Headline5>Dados pessoais</Headline5>
                            </Cell>
                            <StepTextField
                                id="name"
                                label="Nome completo"
                                icon="person"
                                helperTextContent="Seu nome completo sem abreviações."
                                type="text"
                                maxLength={255}
                                minLength={3}
                                desktopColumns={8}
                                tabletColumns={12}
                            />
                            <StepSelectField
                                id="genre"
                                defaultValue="M"
                                label="Sexo"
                                options={[
                                    { label: "Masculino", value: "M" },
                                    { label: "Feminino", value: "F" },
                                ]}
                            />
                            <StepTextField
                                id="birthday"
                                label="Data de nascimento"
                                icon="event"
                                defaultvalue={today}
                                max={today}
                                type="date"
                            />
                            <StepTextField
                                type="number"
                                helperTextContent="Somente números."
                                id="RG"
                                label="Registro profissional"
                                maxLength={20}
                            />
                            <StepTextField
                                type="number"
                                helperTextContent="Somente números."
                                id="CPF"
                                label="CPF"
                                maxLength={11}
                            />
                        </Row>
                        <Row>
                            <Cell columns={12}>
                                <Headline5>Formação</Headline5>
                            </Cell>
                            <StepTextField
                                desktopColumns={8}
                                id="interest"
                                label="Qual seu interesse científico?"
                                helperTextContent="Linha de pesquisa de interesse"
                            />
                            <StepTextField
                                id="graduationYear"
                                label="Ano de formatura"
                                type="number"
                                min={yearToday - 100}
                                max={yearToday}
                            />
                            <StepCheckboxListField
                                label="Titulação"
                                options={[
                                    { label: "Pós-graduação", id: "post" },
                                    { label: "Mestrado", id: "master" },
                                    { label: "Doutorado", id: "doctorade" },
                                    {
                                        label: "Títulos de especialista",
                                        id: "specialist",
                                    },
                                ]}
                            />
                            <StepSelectField
                                multiple
                                helperTextContent="Seleciona uma ou mais opções abaixo"
                                label="Área(s) de atuação"
                                options={allAreas}
                            />
                            <StepSwitchField
                                label="Possui título de especialista ou equivalência na área de atuação escolhida?"
                                id="specialist"
                                pair={[
                                    { label: "Não" },
                                    {
                                        label: "Sim",
                                        children: (
                                            <StepTextField
                                                id="specialist_name"
                                                label="Qual especialidade?"
                                            />
                                        ),
                                    },
                                ]}
                            />
                        </Row>
                        <Row>
                            <Cell columns={12}>
                                <Headline5>Contato</Headline5>
                            </Cell>
                            <StepTextField
                                helperTextContent="Como seu nome deve aparecer no crachá? Será utilizado Nome seguido de Sobrenome."
                                id="cracha"
                                label="Nome no Crachá"
                                desktopColumns={8}
                                tabletColumns={12}
                            />
                            <StepTextField
                                type="number"
                                helperTextContent="Somente números."
                                id="CEP"
                                label="CEP"
                                maxLength={8}
                                tabletColumns={2}
                            />
                            <StepTextField
                                helperTextContent="Rua, Travessa ou Aveninda."
                                id="end"
                                label="Endereço"
                                maxLength={255}
                                desktopColumns={8}
                                tabletColumns={6}
                            />
                            <StepTextField
                                id="end_num"
                                label="Número e complemento"
                                maxLength={255}
                            />
                            <StepTextField
                                id="neighborhood"
                                label="Bairro"
                                maxLength={255}
                            />
                            <StepTextField
                                id="state"
                                label="Estado"
                                maxLength={255}
                            />
                            <StepTextField
                                id="city"
                                label="Cidade"
                                maxLength={255}
                            />
                            <StepTextField
                                desktopColumns={6}
                                id="phone_home"
                                label="Telefone Residencial"
                                helperTextContent="Preencha DDD e número"
                                type="tel"
                                maxLength={11}
                            />
                            <StepTextField
                                desktopColumns={6}
                                id="phone_smartphone"
                                label="Telefone Celular"
                                helperTextContent="Preencha DDD e número"
                                type="tel"
                                maxLength={11}
                            />
                        </Row>
                        <Row>
                            <Cell columns={12}>
                                <Headline5>Acesso</Headline5>
                            </Cell>
                            <StepTextConfirmationField
                                type="email"
                                desktopColumns={6}
                                label="E-mail"
                                id="email"
                            />
                            <StepTextConfirmationField
                                type="password"
                                desktopColumns={6}
                                label="Senha"
                                id="password"
                            />
                            {/* <StepSwitchField
                                id="test"
                                label="Tem algo a falar?"
                            /> */}
                            <Cell>
                                <Button type="submit">Submeter</Button>
                            </Cell>
                        </Row>
                    </Cell>
                </React.Fragment>
            );
        }
    }, [isValidCode]);

    return (
        <React.Fragment>
            <Cell tag="form" method="POST" desktopColumns={4}>
                <CSRF />
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
                    onSubmit={() => validate()}
                    disabled={isValidCode}
                    raised
                    type="submit"
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
