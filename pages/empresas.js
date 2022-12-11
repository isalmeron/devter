import Head from "next/head";
import Card from "components/Card/Card";
import styled from "styled-components";

const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`

const H1 = styled.h1`
    margin: 5rem auto;
`

function Empresas() {
    return (
        <Container>
            <Head>
                <title>Sistema de contabilidad - Empresas</title>
            </Head>
            <H1>Mis Empresas</H1>
            <Card></Card>
        </Container>
    )
}

export default Empresas;