import Head from 'next/head'
import styled from 'styled-components'
import { userContext } from '../context/user';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';

const validateCredentials = (email, password) => {
  const emailRegex = /^\S+@\S+(\.\S+)+$/
  const passwordRegex = /^[A-Za-z0-9#$%&]{8,15}$/

  const isValidEmail = emailRegex.test(email)
  const isValidPassword = passwordRegex.test(password)

  return isValidEmail && isValidPassword;
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

const InfoParagraph = styled.p`
  text-align: center;
  margin: 1rem 0;

`

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
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
  const { user, registerUser } = useContext(userContext);
  const router = useRouter();

  useEffect(() => {
    if (user?.isAuthenticated) router.replace('/');
  }, [user])

  const onSubmit = () => {
    setError(undefined)
    const validCredentials = validateCredentials(email, password)

    if (!validCredentials) {
      setError('El correo o la contraseña no cumplen con los requisitos.')
      return
    }

    registerUser(email, password).catch((error) => {
      console.log("There was an error: ", error.code)
      setError('Hubo un error al crear tu cuenta, contacta al administrador.')
      setEmail('')
      setPassword('')
    });
  }

  return (
    <>
      <Head>
        <title>Registro</title>
      </Head>
      <LoginWrapper>
        <LoginContainer>
          <h1>Registro de cuenta</h1>
          <InfoParagraph>Ingresa los datos de tu nueva cuenta al sistema de facturación.</InfoParagraph>
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
            <div><small>La contraseña debe ser entre 8-15 caracteres.</small></div>
            {error ? <ErrorMessage>{error}</ErrorMessage> : undefined}
          </FormContainer>
          <LoginButton onClick={onSubmit}>Registrar</LoginButton>
          <div>Ya tienes cuenta? <Link href="/login">Inicia sesión</Link></div>
        </LoginContainer>
      </LoginWrapper>
    </>
  )
}

Login.getLayout = function getLayout(page) {
  return page;
}

export default Login;
