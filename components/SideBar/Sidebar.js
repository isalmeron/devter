import styled from 'styled-components';
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { userContext } from '../../context/user';

const Aside = styled.aside`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  padding: 4rem 1rem 1rem;
  background-color: #cfe2f3;
`;

const Menu = styled.ul`
  list-style: none;
  flex: 1;

  li[data-active="true"] {
    a {
      box-shadow: 0px 0px 45px -4px rgba(0, 0, 0, 0.2);
      font-size: 1.3rem;
      margin: 0.3rem;
    }
  }

  a {
    border-radius: 8px;
    text-decoration: none;
    padding: 0.75rem;
    display: block;
    font-size: 1.1rem;
    transition: all ease 0.2s;
    font-weight: 500;

    &:hover {
      box-shadow: 0px 0px 45px -4px rgba(0, 0, 0, 0.2);
      font-size: 1.1rem;
    }
  }
`;

const LogoutContainer = styled.div`
  min-height: 50px;
`;

const LogoutButton = styled.button`
  font-size: 1.1rem;
  height: 40px;
  width: 100%;
  border-radius: 8px;
  background-color: #cfe2f3;
  border: 1px solid #d3e1f1;
  cursor: pointer;
  box-shadow: -6px -6px 15px 0px rgba(231, 244, 253, 0.65),
    6px 6px 15px 0px rgba(78, 91, 100, 0.3);

  &:hover {
    background-color: #bacbda;
  }
`;

export default function Sidebar() {
  const router = useRouter();
  const { logOut } = useContext(userContext);

  return (
    <Aside>
      <Menu>
        <li data-active={router.pathname === "/"}>
          <Link href="/">Inicio</Link>
        </li>
        <li data-active={router.pathname === "/empresas"}>
          <Link href="/empresas">Empresas</Link>
        </li>
        <li data-active={router.pathname === "/empleados"}>
          <Link href="/empleados">Empleados</Link>
        </li>
        <li data-active={router.pathname === "/nominas"}>
          <Link href="/nominas">Nominas</Link>
        </li>
      </Menu>
      <LogoutContainer>
        <LogoutButton onClick={logOut}>Cerrar Sesión</LogoutButton>
      </LogoutContainer>
    </Aside>
  );
}