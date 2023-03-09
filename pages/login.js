import Head from 'next/head'
import styled from 'styled-components'
import { userContext } from '../context/user';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { AuthErrorCodes } from "firebase/auth";
import Link from 'next/link';
import Button from "components/Button/Button";

const errorCodeToMessage = (code) => {
  switch (code) {
    case AuthErrorCodes.CREDENTIAL_MISMATCH:
    case AuthErrorCodes.USER_DELETED:
    case AuthErrorCodes.INVALID_EMAIL:
    case AuthErrorCodes.INTERNAL_ERROR:
    case AuthErrorCodes.INVALID_PASSWORD:
    case AuthErrorCodes.USER_DELETED:
      return "La constraseña o el correo no son válidos.";
    default:
      return "Hubo un error vuelva a intentar más tarde.";
  }
};

const LoginWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginContainer = styled.div`
  border: 1px solid #dadddb;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 70%;
  border-radius: 24px;
  padding: 1.5rem;
  gap: 3rem;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

const FormGroup = styled.div`
  display: grid;
  grid-template-columns: 6rem 1fr;
  align-items: center;
  gap: 1rem;
`;

const LoginEmail = styled.input.attrs(() => ({
  type: "text",
  name: "email",
}))`
  min-width: 20rem;
  padding: 0.8rem;
  border-radius: 8px;
  border: 1px solid #0000003b;
  outline: none;
  transition: all ease 0.2s;
  grid-column: 2;
  transition: box-shadow ease-in-out 300ms;

  &:hover,
  &:focus {
    box-shadow: 0 10px 10px 1px rgba(0, 0, 0, 0.2);
  }
`;

const LoginPassword = styled.input.attrs(() => ({
  type: "password",
  name: "password",
}))`
  min-width: 20rem;
  padding: 0.8rem;
  border-radius: 8px;
  border: 1px solid #0000003b;
  outline: none;
  transition: all ease 0.2s;
  grid-column: 2;
  transition: box-shadow ease-in-out 300ms;

  &:hover,
  &:focus {
    box-shadow: 0 10px 10px 1px rgba(0, 0, 0, 0.2);
  }
`;

const ErrorMessage = styled.div`
  color: #cc0000;
  font-size: 1rem;
  text-align: center;
  font-weight: 500;
`;

const SignupContainer = styled.span`
  margin: 2rem 0;
`;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const { user, logIn } = useContext(userContext);
  const router = useRouter();

  useEffect(() => {
    if (user?.isAuthenticated) router.replace("/");
  }, [user]);

  const onSubmit = () => {
    setError(undefined);
    logIn(email, password);
  };

  return (
    <>
      <Head>
        <title>Iniciar sesión</title>
      </Head>
      <LoginWrapper>
        <LoginContainer>
          <h1>Iniciar sesión</h1>
          <FormContainer>
            <FormGroup>
              <label htmlFor="email">Correo: </label>
              <LoginEmail
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />
            </FormGroup>
            <FormGroup>
              <label>Contraseña: </label>
              <LoginPassword
                onChange={(event) => setPassword(event.target.value)}
                value={password}
              />
            </FormGroup>
            {error ? <ErrorMessage>{error}</ErrorMessage> : undefined}

            <Button color="primary" onClick={onSubmit}>
              Iniciar Sesión
            </Button>
          </FormContainer>
          <SignupContainer>
            Aún no tienes cuenta?{" "}
            <Link href="/signup">
              <Button variant="text">Regístrate aquí</Button>
            </Link>
          </SignupContainer>
        </LoginContainer>
      </LoginWrapper>
    </>
  );
}

Login.auth = false;

export default Login;
