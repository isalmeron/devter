import Head from 'next/head'
import styled from 'styled-components'
import { userContext } from '../context/user';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';
import Button from "components/Button/Button";

const validateCredentials = (email, password) => {
  const emailRegex = /^\S+@\S+(\.\S+)+$/;
  const passwordRegex = /^[A-Za-z0-9#$%&]{8,15}$/;

  const isValidEmail = emailRegex.test(email);
  const isValidPassword = passwordRegex.test(password);

  return isValidEmail && isValidPassword;
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
  border-radius: 24px;
  padding: 10rem;
  gap: 3rem;
`;

const InfoParagraph = styled.p`
  text-align: center;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const FormGroup = styled.div`
  display: grid;
  grid-template-columns: 8rem 1fr;
  align-items: center;
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
  grid-column: 2;
  transition: box-shadow ease-in-out 300ms;

  &:hover,
  &:focus {
    box-shadow: 0 10px 10px 1px rgba(0, 0, 0, 0.2);
  }
`;

const ErrorMessage = styled.div`
  color: #cc0000;
  font-size: 0.85rem;
  text-align: center;
  font-weight: 500;
`;

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const { user, registerUser } = useContext(userContext);
  const router = useRouter();

  useEffect(() => {
    if (user?.isAuthenticated) router.replace("/");
  }, [user]);

  const onSubmit = () => {
    setError(undefined);
    const validCredentials = validateCredentials(email, password);

    if (!validCredentials) {
      setError("El correo o la contraseña no cumplen con los requisitos.");
      return;
    }

    registerUser(email, password).catch((error) => {
      console.log("There was an error: ", error.code);
      setError("Hubo un error al crear tu cuenta, contacta al administrador.");
      setEmail("");
      setPassword("");
    });
  };

  return (
    <>
      <Head>
        <title>Registro</title>
      </Head>
      <LoginWrapper>
        <LoginContainer>
          <h1>Registro de cuenta</h1>
          <InfoParagraph>
            Ingresa los datos de tu nueva cuenta al sistema de facturación.
          </InfoParagraph>
          <FormContainer>
            <FormGroup>
              <label htmlFor="email">Correo: </label>
              <LoginEmail
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="password">Contraseña: </label>
              <LoginPassword
                onChange={(event) => setPassword(event.target.value)}
                value={password}
              />
            </FormGroup>
            {error ? <ErrorMessage>{error}</ErrorMessage> : undefined}
          </FormContainer>
          <Button color="primary" onClick={onSubmit}>
            Registrar
          </Button>
          <div>
            Ya tienes cuenta?{" "}
            <Link href="/login">
              <Button variant="text">Inicia sesión</Button>
            </Link>
          </div>
        </LoginContainer>
      </LoginWrapper>
    </>
  );
}

SignUp.getLayout = function getLayout(page) {
  return page;
};

export default SignUp;
