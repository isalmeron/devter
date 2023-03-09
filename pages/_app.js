import Layout from 'components/Layout/Layout';
import GlobalStyles from "styles/global";
import UserProvider from "context/user";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  // Use the layout defined at the page level, if available
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <SessionProvider session={session}>
          <GlobalStyles />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default MyApp
