import styled from "styled-components";

const PrimaryButton = styled.button.attrs((props) => ({
  type: props.type || 'button',
}))`
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

export default function Button({ children, onClick, type }) {
  return (
    <PrimaryButton onClick={onClick} type={type}>{children}</PrimaryButton>
  )
}