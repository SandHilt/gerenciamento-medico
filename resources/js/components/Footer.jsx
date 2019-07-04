import React from "react";
import { Body1 } from "@material/react-typography";
import { Row, Cell } from "@material/react-layout-grid";
import LinkExternal from "./LinkExternal";

const Footer = () => (
    <Row tag="footer">
        <Cell tag="figure" desktopColumns={6} align="middle">
            <figcaption>
                <Body1>Desenvolvido por </Body1>
            </figcaption>
            <LinkExternal href="https://www.ipnet.cloud">
                <img
                    className="Logo Logo__IPNET"
                    src="storage/images/Logo_IPNET.png"
                    alt="Logo da IPNET"
                />
            </LinkExternal>
        </Cell>
        <Cell tag="address" desktopColumns={6} align="middle">
            <Body1>
                Em caso de dúvidas, entre em contato pelo telefone{" "}
                <a href="tel:+552125453564">(21) 2545-3564</a> ou no e-mail{" "}
                <a href="mailto:cadastromedico@copador.com.br">
                    cadastromedico@copador.com.br
                </a>
            </Body1>
        </Cell>
    </Row>
);

export default Footer;
