import React from "react";
import { Body1 } from "@material/react-typography";
import { Row, Cell } from "@material/react-layout-grid";
import LinkExternal from "./LinkExternal";
import { parsePhoneNumberFromString as parsePhone } from "libphonenumber-js";

const Footer = ({ data: { phone, email, website } }) => (
    <Row tag="footer">
        <Cell tag="figure" desktopColumns={6} align="middle">
            <figcaption>
                <Body1>Desenvolvido por </Body1>
            </figcaption>
            <LinkExternal href={website}>
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
                <a href={`tel:${phone}`}>
                    {parsePhone(phone).formatNational()}
                </a>{" "}
                ou no e-mail <a href={`mailto:${email}`}>{email}</a>
            </Body1>
        </Cell>
    </Row>
);

export default Footer;
