import classNames from "classnames";
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const TextInput = styled.input.attrs((props) => ({
  type: props.type || "text",
}))`
  font-size: 1rem;
  line-height: 1.2rem;
  padding: 0.8rem;
  border-radius: 8px;
  border: 1px solid #0000003b;
  outline: none;
  min-width: 20rem;
  position: relative;

  &.error {
    box-shadow: 0 0 3px 1px rgba(214, 0, 0, 0.3);
  }
`;

export const TextField = React.forwardRef(
  ({ value, onChange, type, error, className, ...rest }, ref) => (
    <TextInput
      ref={ref}
      type={type}
      value={value}
      onChange={onChange}
      className={classNames({ error }, className)}
      {...rest}
    />
  )
);

TextField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  error: PropTypes.bool,
  className: PropTypes.string,
};
