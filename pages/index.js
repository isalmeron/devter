import Head from 'next/head'
import { userContext } from '../context/user';
import { useContext } from 'react';

function Home() {
  const { user } = useContext(userContext);

  return (
    <>
      <Head>
        <title>Sistema de contabilidad - Inicio</title>
        <meta name="description" content="Sistema de contabilidad y facturación" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{user ? user.email : 'Not Logged In'}</h1>
    </>
  )
}

// Home.getInitialProps = async () => {
//   return ({ name: 'Irving' })
// }

export default Home;
