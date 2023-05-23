import Head from "next/head";
import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import Link from "next/link";
import Nav from "components/Nav/Nav";
import Button from "components/Button/Button";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "@/firebase/app";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";

const columnasEmpresa = [
  { field: "id", headerName: "ID", width: 150 },
  {
    field: "nombre",
    headerName: "Nombre",
    width: 250,
  },
  {
    field: "rfc",
    headerName: "RFC",
    width: 150,
  },
  {
    field: "razonSocial",
    headerName: "Razón Social",
    width: 250,
  },
  {
    field: "periodoCalculo",
    headerName: "Periodo cálculo",
    width: 150,
  },
  {
    field: "regimen",
    headerName: "Regimen",
    width: 250,
  },
  {
    field: "direccionCompleta",
    headerName: "Dirección",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 250,
    cellClassName: "addressCell",
    valueGetter: (params) =>
      `${params.row.direccion.calle} ${params.row.direccion.numeroExt}-${params.row.direccion.numeroInt}
      ${params.row.direccion.colonia}
      ${params.row.direccion.estado} ${params.row.direccion.codigoPostal} ${params.row.direccion.pais}
      `,
  },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TableContainer = styled.div`
  width: 100%;
  height: 750px;

  & .addressCell {
    white-space: pre-line !important;
  }
`;

function Empresas({ empresas }) {
  return (
    <Container>
      <Head>
        <title>Sistema de contabilidad - Empresas</title>
      </Head>
      <Nav title="Mis Empresas">
        <Link href="/empresa">
          <Button color="primary" startIcon="add">
            Agregar
          </Button>
        </Link>
      </Nav>
      <TableContainer>
        <DataGrid
          rows={empresas}
          columns={columnasEmpresa}
          getRowHeight={(params) => {
            return 100;
          }}
        />
      </TableContainer>
    </Container>
  );
}

export const getServerSideProps = async (ctx) => {
  const session = await getServerSession(ctx.req, ctx.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const empresasSnapShot = await getDocs(collection(firestore, "empresas"));
  const rows = [];
  empresasSnapShot.forEach((doc) => {
    const empresa = doc.data();

    rows.push({
      id: doc.id,
      nombre: empresa.nombre,
      rfc: empresa.rfc,
      razonSocial: empresa.razonSocial,
      direccion: empresa.direccion,
      periodoCalculo: empresa.periodo.calculo,
      regimen: empresa.regimen,
    });
  });

  return {
    props: {
      empresas: rows,
    },
  };
};

export default Empresas;
