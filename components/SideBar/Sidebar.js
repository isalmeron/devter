import styled from 'styled-components';
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { userContext } from '../../context/user';

const Aside = styled.aside`
    grid-area: sidebar;
    display: flex;
    flex-direction: column;
    padding: 4rem 1rem 0.5rem;
    background-color: #cfe2f3;
    color: #4c4c4c;
`;

const Menu = styled.ul`
    list-style: none;
    flex: 1;

    a {
        border-radius: 8px;
        text-decoration: none;
        padding: 0.75rem;
        display: block;
        font-size: 1rem;
        transition: all ease 0.2s;

        &:hover {
            box-shadow: 0px 0px 45px -4px rgba(0,0,0,0.2);
            font-size: 1.1rem;
        }
    }
`;

const LogoutContainer = styled.div`
    min-height: 50px;
`

const LogoutButton = styled.button`
    font-size: 1rem;
    height: 40px;
    width: 100%;
    border-radius: 8px;
    background-color: #cfe2f3;
    border: 1px solid #d3e1f1;
    cursor: pointer;
    box-shadow: -6px -6px 15px 0px rgba(231,	244,	253, 0.65),
      6px 6px 15px 0px rgba(78,	91,	100, 0.3);

    &:hover {
        background-color: #bacbda;
    }
`

export default function Sidebar() {
  const router = useRouter();
  const { user, logOut } = useContext(userContext);
  const signOut = () => {
    logOut().then(() => {
      router.replace('login');
    });
  }

  return (
    <Aside>
      <Menu>
        <li>
          <Link href="/">Inicio</Link>
        </li>
        <li>
          <Link href="/empresas">Empresas</Link>
        </li>
        <li>
          <Link href="/empleados">Empleados</Link>
        </li>
        <li>
          <Link href="/nominas">Nominas</Link>
        </li>
      </Menu>
      <LogoutContainer>
        <LogoutButton onClick={signOut}>
          Cerrar Sesión
        </LogoutButton>
      </LogoutContainer>
    </Aside>
  )
}