import styled from "styled-components";
import classnames from "classnames";
import PropTypes from "prop-types";

const StyledButton = styled.button.attrs((props) => ({
  type: props.type || "button",
  color:
    props.theme.colors.actions?.[props.color]?.color ||
    props.theme.colors.fonts.default,
  bgColor:
    props.theme.colors.actions?.[props.color]?.background ||
    props.theme.colors.actions.default.background,
  bgHover:
    props.theme.colors.actions?.[props.color]?.hover ||
    props.theme.colors.actions.default.hover,
}))`
  background-color: ${(props) => props.bgColor};
  border-radius: 6px;
  border: none;
  box-shadow: none;
  cursor: pointer;
  color: ${(props) => props.color};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2em;
  min-width: 250px;
  padding: 1em 1.5em;
  text-align: center;

  &:hover {
    background-color: ${(props) => props.bgHover};
  }

  /* Variants */
  &.outline {
    background-color: transparent;
    border: 1px solid
      ${(props) => props.theme.colors.actions.outline.background};
    color: ${({ theme }) => theme.colors.fonts.default};

    &:hover,
    &:focus {
      background-color: ${(props) => props.theme.colors.actions.outline.hover};
      color: ${({ theme }) => theme.colors.white};
    }
  }

  &.text {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.actions.link.color};
    box-shadow: none;
    padding: 0.5em;
    min-width: fit-content;

    &:disabled {
      background-color: transparent;
      color: ${({ theme }) => theme.colors.actions.disabled.background};
      pointer-events: none;
      cursor: not-allowed;
    }

    &:hover,
    &:focus {
      text-decoration-line: underline;
      text-decoration-thickness: 1px;
    }
  }

  /* States */
  &:disabled {
    background-color: ${({ theme }) =>
      theme.colors.actions.disabled.background};
    color: ${({ theme }) => theme.colors.actions.disabled.color};
    pointer-events: none;
    cursor: not-allowed;
    box-shadow: none;
  }

  &[data-disable-shadow="true"] {
    box-shadow: none;
  }

  /* Sizes */
  &.sm {
    padding: 0.45em 0.9em;
  }

  &.lg {
    padding: 1.2em 2em;
  }

  &.xl {
    padding: 1.5em 2.8em;
  }

  .material-icons {
    margin: auto 0.7em auto 0.3em;
    color: inherit;
    font-size: inherit;
    vertical-align: middle;
    line-height: inherit;
  }
`;

export default function Button({
  color,
  disabled,
  disableShadow,
  endIcon,
  size,
  startIcon,
  variant,
  children,
  onClick,
  type,
  ...buttonProps // Other button props like role, aria's, etc
}) {
  return (
    <StyledButton
      {...buttonProps}
      className={classnames({
        [variant]: variant,
        [size]: size,
      })}
      color={color}
      disabled={disabled}
      data-disable-shadow={disableShadow}
      type={type}
      onClick={onClick}
    >
      {startIcon && <span className="material-icons md-14">{startIcon}</span>}
      {children}
      {endIcon && <span className="material-icons md-14">{endIcon}</span>}
    </StyledButton>
  );
}

Button.propTypes = {
  color: PropTypes.oneOf(["default", "primary", "secondary", "danger"]),
  variant: PropTypes.oneOf(["outline", "text"]),
  disabled: PropTypes.bool,
  disableShadow: PropTypes.bool,
  endIcon: PropTypes.string,
  startIcon: PropTypes.string,
  size: PropTypes.oneOf(["sm", "lg", "xl"]),
  onClick: PropTypes.func,
  type: PropTypes.string,
  children: PropTypes.node,
};
