import React from "react";
import styled from "styled-components";

const TextInput = styled.input.attrs((props) => ({
  type: props.type || "text",
}))`
  margin: 2em;
  padding: 0.7em;
  border-radius: 16px;
  border: 1px solid #0000003b;
  outline: none;

  &.error {
    box-shadow: 0 0 3px 1px rgba(214, 0, 0, 0.3);
  }
`;

export const TextField = React.forwardRef(({ value, onChange, type, error, ...rest }, ref) => (
  <TextInput
    ref={ref}
    type={type}
    value={value}
    onChange={onChange}
    className={error ? 'error' : ''}
    {...rest}
  />
))