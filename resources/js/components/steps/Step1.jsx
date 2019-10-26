import { Button } from "@material/react-button";
import { Cell, Row } from "@material/react-layout-grid";
import TextField, { HelperText, Input } from "@material/react-text-field";
import {
    Body1,
    Headline4,
    Headline5,
    Subtitle1,
} from "@material/react-typography";
import { parsePhoneNumberFromString as parsePhone } from "libphonenumber-js";
import React, { useEffect, useState } from "react";

import CSRF from "../CSRF";
import NextStepButton from "../NextStepButton";
import StepCheckboxListField from "./StepCheckboxListField";
import StepSelectField from "./StepSelectField";
import StepSwitchField from "./StepSwitchField";
import StepTextConfirmationField from "./StepTextConfirmationField";
import StepTextField from "./StepTextField";
import StepTextVerificationField from "./StepTextVerificationField";

const Step1 = ({ handleNextStep, data: { phone, email, areas } }) => {
    const [code, setCode] = useState("");
    const [isValidCode, setValidatyCode] = useState(false);

    const [content, setContent] = useState(null);

    /**
     * Alguma validação referente ao codigo
     */
    const codeValidate = () => {
        if (code == 18837) {
            setValidatyCode(true);
        } else {
            setValidatyCode(false);
        }
    };

    const now = new Date();

    const today = now.toISOString().slice(0, 10);
    const yearToday = now.getFullYear();

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
                    <Cell columns={12}>
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
                            <StepTextVerificationField
                                type="number"
                                helperTextContent="Somente números."
                                id="CPF"
                                label="CPF"
                                maxLength={11}
                                typeOfValidation="cpf"
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
                            <StepTextVerificationField
                                type="number"
                                helperTextContent="Somente números."
                                id="CEP"
                                label="CEP"
                                maxLength={8}
                                tabletColumns={2}
                                typeOfValidation="cep"
                            />
                            <StepTextField
                                helperTextContent="Rua, Travessa ou Aveninda."
                                id="end"
                                label="Endereço"
                                desktopColumns={8}
                                tabletColumns={6}
                            />
                            <StepTextField
                                id="end_num"
                                label="Número e complemento"
                            />
                            <StepTextField id="neighborhood" label="Bairro" />
                            <StepTextField id="state" label="Estado" />
                            <StepTextField id="city" label="Cidade" />
                            <StepTextVerificationField
                                desktopColumns={6}
                                id="phone_home"
                                label="Telefone Residencial"
                                helperTextContent="Preencha DDD e número"
                                type="tel"
                                maxLength={11}
                                typeOfValidation="phone"
                            />
                            <StepTextVerificationField
                                desktopColumns={6}
                                id="phone_smartphone"
                                label="Telefone Celular"
                                helperTextContent="Preencha DDD e número"
                                type="tel"
                                maxLength={11}
                                typeOfValidation="phone"
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
                                minLength={8}
                                maxLength={16}
                                helperTextContent="Escolha uma senha entre 8 e 16 caracteres"
                            />
                        </Row>
                    </Cell>
                </React.Fragment>
            );
        }
    }, [isValidCode]);

    return (
        <React.Fragment>
            <Cell tag="form" desktopColumns={6}>
                <CSRF />
                <Row>
                    <Cell desktopColumns={8}>
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
                                maxLength={5}
                                minLength={5}
                                disabled={isValidCode}
                            />
                        </TextField>
                    </Cell>
                    <Cell desktopColumns={4} className="cell-center">
                        <Button
                            onClick={() => codeValidate()}
                            disabled={isValidCode}
                            raised
                        >
                            Validar
                        </Button>
                    </Cell>
                </Row>
            </Cell>
            <Cell desktopColumns={6}>
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
                <NextStepButton raised disabled {...{ handleNextStep }}>
                    Próximo
                </NextStepButton>
            </Cell>
        </React.Fragment>
    );
};

export default Step1;
