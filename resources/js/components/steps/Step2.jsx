import React from "react";
import { Cell, Row } from "@material/react-layout-grid";
import NextStepButton from "../NextStepButton";
import { Headline5 } from "@material/react-typography";
import StepTextField from "./StepTextField";

const Step2 = ({ handleNextStep }) => (
    <React.Fragment>
        <Cell columns={12}>
            <Headline5>Dados comerciais</Headline5>{" "}
        </Cell>
        <Cell tag="form">
            <StepTextField
                type="number"
                helperTextContent="Somente números."
                id="CEP"
                label="CEP"
                maxLength={8}
            />
        </Cell>
        <NextStepButton {...{ handleNextStep }} />
    </React.Fragment>
);

export default Step2;
