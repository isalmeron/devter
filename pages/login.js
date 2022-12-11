import Head from 'next/head'
import styled from 'styled-components'
import { userContext } from '../context/user';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { AuthErrorCodes } from "firebase/auth";
import Link from 'next/link';

const errorCodeToMessage = (code) => {
  switch (code) {
    case AuthErrorCodes.CREDENTIAL_MISMATCH:
    case AuthErrorCodes.USER_DELETED:
      return 'La constraseña o el correo no son válidos.';
    default: return 'Hubo un error vuelva a intentar más tarde.'
  }
}

const LoginWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginContainer = styled.div`
  border: 1px solid #DADDDB;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 70%;
  border-radius: 24px;
  padding: 10em;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LoginEmail = styled.input.attrs(() => ({
  type: "text",
  name: 'email',
}))`
  min-width: 20em;
  margin: 2em;
  padding: 0.5em;
  border-radius: 16px;
  border: 1px solid #0000003b;
  outline: none;
  transition: all ease 0.2s;

  &:hover {
    box-shadow: 0 10px 10px 1px rgba(0,0,0, 0.2);
  }
`;

const LoginPassword = styled.input.attrs(() => ({
  type: "password",
  name: 'password',
}))`
  min-width: 20em;
  margin: 2em;
  padding: 0.5em;
  border-radius: 16px;
  border: 1px solid #0000003b;
  outline: none;
  transition: all ease 0.2s;

  &:hover {
    box-shadow: 0 10px 10px 1px rgba(0,0,0, 0.2);
  }
`;

const LoginButton = styled.button`
  background-color: #1993FF;
  color: #FFFFFF;
  border-radius: 16px;
  padding: 1em;
  margin: 1em;
  border: none;
  cursor: pointer;
  width: 250px;
  transition: all ease 0.2s;

  &:hover {
    background-color: #1166B2;
  }
`;

const ErrorMessage = styled.div`
  color: #CC0000;
  font-size: 0.85rem;
  text-align: center;
  font-weight: 500;
`

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState();
  const { user, logIn } = useContext(userContext);
  const router = useRouter();

  useEffect(() => {
    if (user?.isAuthenticated) router.replace('/');
  }, [user])

  const onSubmit = () => {
    setError(undefined)
    logIn(email, password).catch((error) => {
      console.log("There was an error: ", errorCodeToMessage(error.code))
      setError(errorCodeToMessage(error.code))
    });
  }

  return (
    <>
      <Head>
        <title>Iniciar sesión</title>
      </Head>
      <LoginWrapper>
        <LoginContainer>
          <h1>Inicio</h1>
          <FormContainer>
            <FormGroup>
              <div>Correo: </div>
              <div>
                <LoginEmail onChange={(event) => setEmail(event.target.value)} value={email} />
              </div>
            </FormGroup>
            <FormGroup>
              <div>Contraseña: </div>
              <LoginPassword onChange={(event) => setPassword(event.target.value)} value={password} />
            </FormGroup>
            {error ? <ErrorMessage>{error}</ErrorMessage> : undefined}
          </FormContainer>
          <LoginButton onClick={onSubmit}>Iniciar Sesión</LoginButton>
          <div>Aún no tienes cuenta? <Link href="/signup">Regístrate aquí</Link></div>
        </LoginContainer>
      </LoginWrapper>
    </>
  )
}

Login.getLayout = function getLayout(page) {
  return page;
}

export default Login;
