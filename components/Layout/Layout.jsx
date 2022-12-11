import styled from 'styled-components';
import Sidebar from '../SideBar/Sidebar';

const Container = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-areas: "sidebar main";
    grid-template-columns: 300px 1fr;
`

const Main = styled.main`
    grid-area: main;
    padding: 0 1rem;
`;

export default function Layout({ children }) {
    return (
        <Container>
            <Sidebar></Sidebar>
            <Main>
                {children}
            </Main>
        </Container>
    )
}