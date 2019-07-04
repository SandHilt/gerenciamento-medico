import React from "react";
import Card from "@material/react-card";
import { Cell } from "@material/react-layout-grid";
import {
    Headline5,
    Body1,
    Headline4,
    Subtitle1,
} from "@material/react-typography";

const Step0 = () => {
    /**
     * Dados que podem ser providos por uma API Restful
     * e pegos via Axios/Fetch API.
     */
    const data = {
        header: {
            title: "Como funciona",
            text:
                "Para participar do processo de credenciamento e tornar-se membro credenciado ao corpo clínico do Hospital Copa D'Or, é necessário passar por algumas etapas.",
        },
        cards: [
            {
                title: "Dados para cadastro",
                text:
                    "O médico preencherá um cadastro, informando dados pessoais, comerciais e a categoria em que deseja se credenciar. Após essa etapa o médico receberá uma senha de acesso e nome de usuário para fazer o upload dos documentos necessários e acompanhar o processo de credenciamento.",
            },
            {
                title: "Envio de documentos",
                text:
                    'Através do sistema, o médico adiciona seus documentos em sua pasta funcional através do link "Adicionar documentos" que estará disponível no menu da página.',
            },
            {
                title: "Análise dos documentos",
                text:
                    "O Hospital Copa D'Or, através da Gerência do Corpo Clínico e da Diretoria Médica, analisa as informações prestadas, checando na fonte primária a validade dos documentos enviados.",
            },
            {
                title: "Aprovação",
                text:
                    "Os médicos aprovados para determinadas categorias (Contratados, Regulares, Referência e Membros de Equipe Assistente) receberão sua carta de direitos de atuação elaborada pela Gerência do Corpo Clínico baseadas nas informações enviadas e validadas. A concessão dos direitos de atuação é executada conforme determina o Regimento Interno do Corpo Clínico e a Política de Credenciamento do Hospital Copa D'Or.",
            },
            {
                title: "Assinatura dos documentos",
                text:
                    "A carta de atuação gerada será assinada digitalmente pelos Membros das Coordenações Médicas, Diretoria Médica e pelo médico candidato à credenciamento. Neste momento certifique-se de que compreendeu seu conteúdo e objetivo. Ao assinar, o membro credenciado se compromete a seguir as normas institucionais do Corpo Clínico reguladas pelo Regimento Interno do Corpo Clínico.",
            },
            {
                title: "Médio credenciado",
                text:
                    "A partir desse momento o médico se tornará membro credenciado ao Corpo Clínico do Hospital Copa D'Or. Receberá senha de acesso para uso das facilidades oferecidas pelo Hospital nas atividades diárias da prática médica: prescrição digitada, sumário de alta eletrônico, visualização de exames laboratoriais e de imagem além de outras facilidades que estão em desenvolvimento para seu conforto e segurança do seu paciente.",
            },
        ],
    };

    const cards = data.cards.map(({ title, text }, key) => (
        <Cell desktopColumns={4} {...{ key }}>
            <Card className="CardItem">
                <Headline5>{title}</Headline5>
                <Subtitle1>Etapa {key + 1}</Subtitle1>
                <Body1>{text}</Body1>
            </Card>
        </Cell>
    ));

    const header = (
        <Cell tag="header" columns={12}>
            <Headline4>{data.header.title}</Headline4>
            <Body1>{data.header.text}</Body1>
        </Cell>
    );

    return (
        <React.Fragment>
            {header}
            {cards}
        </React.Fragment>
    );
};

export default Step0;
