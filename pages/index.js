import Head from 'next/head'
import { useSession } from "next-auth/react";

function Home() {
  const { data, status } = useSession();

  return (
    <>
      <Head>
        <title>Sistema de contabilidad - Inicio</title>
        <meta
          name="description"
          content="Sistema de contabilidad y facturación"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>INDEX</div>
    </>
  );
}

export default Home;
