import Layout from 'components/Layout/Layout';
import GlobalStyles from '../styles/global';
import UserProvider from '../context/user';
import WithAuth from 'hooks/WithAuth';

function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || (() => (
    <>
      <UserProvider>
        <WithAuth>
          <GlobalStyles />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </WithAuth>
      </UserProvider>
    </>
  ))

  // Enables some pages like the login to use their custom layout without sidebar
  return getLayout(
    <UserProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </UserProvider>);
}

export default MyApp
