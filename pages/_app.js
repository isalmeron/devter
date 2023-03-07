import Layout from 'components/Layout/Layout';
import GlobalStyles from "styles/global";
import UserProvider from "context/user";
import WithAuth from "auth/WithAuth";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";

function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout =
    Component.getLayout ||
    (() => (
      <ThemeProvider theme={theme}>
        <UserProvider>
          <WithAuth>
            <GlobalStyles />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </WithAuth>
        </UserProvider>
      </ThemeProvider>
    ));

  // Enables some pages like the login to use their custom layout without sidebar
  return getLayout(
    <ThemeProvider theme={theme}>
      <UserProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </UserProvider>
    </ThemeProvider>
  );
}

export default MyApp
