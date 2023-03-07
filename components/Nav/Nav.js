import styled from "styled-components";

const NavBar = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 80px;
  gap: 1em;
  align-items: center;
  width: 100%;
  margin: 2.5em 0;
  border-bottom: 1px dotted #c0c0c0;
`;

const Title = styled.h1`
  grid-column: 2 / 3;
  justify-self: center;
`;

const Actions = styled.div`
  grid-column: 3;
  justify-self: end;
`;

export default function Nav({ title, children }) {
  return (
    <NavBar>
      <Title>{title}</Title>
      <Actions>{children}</Actions>
    </NavBar>
  );
}
