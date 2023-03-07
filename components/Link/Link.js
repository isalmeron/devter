import styled from "styled-components";
import classnames from "classnames";
import Link from "next/link";
import PropTypes from "prop-types";

const StyledLink = styled.a.attrs((props) => ({
  bgColor:
    props.theme.colors.actions?.[props.color]?.background ||
    props.theme.colors.actions.default.background,
  bgHover:
    props.theme.colors.actions?.[props.color]?.hover ||
    props.theme.colors.actions.default.hover,
}))`
  box-shadow: none;
  color: ${({ theme }) => theme.colors.actions.link.background};
  cursor: pointer;
  font-size: 1em;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2em;
  padding: 0.3em;
  text-align: center;
  text-decoration: none;

  &.sm {
    font-size: 0.9em;
  }

  &.lg {
    font-size: 1.1em;
  }

  &:hover {
    text-decoration-line: underline;
    text-decoration-thickness: 1px;
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.actions.disabled.background};
    pointer-events: none;
    cursor: not-allowed;
  }

  /* Colors */
  &.button {
    background-color: #e0e0e0;
    border-radius: 6px;
    border: none;
    box-shadow: none;
    color: #3f3f3f;
    cursor: pointer;
    font-style: normal;
    font-weight: 500;
    line-height: 1.2em;
    min-width: 250px;
    padding: 1em 1.5em;
    text-align: center;

    &:hover {
      background-color: #1166b2;
      color: #ffffff;
    }

    &.default {
      &:hover,
      &:focus {
        background-color: #aeaeae;
      }
    }

    &.primary {
      background-color: #2962ff;
      box-shadow: 0px 2px 3px rgba(41, 98, 255, 0.2);
      color: #ffffff;

      &:hover,
      &:focus {
        background-color: #0039cb;
      }
    }

    &.secondary {
      background-color: #455a64;
      box-shadow: 0px 2px 3px rgba(69, 90, 100, 0.2);
      color: #ffffff;

      &:hover,
      &:focus {
        background-color: #1c313a;
      }
    }

    &.danger {
      background-color: #d32f2f;
      box-shadow: 0px 2px 3px rgba(211, 47, 47, 0.2);
      color: #ffffff;

      &:hover,
      &:focus {
        background-color: #9a0007;
      }
    }

    /* Variants */
    &.outline {
      background-color: transparent;
      border: 1px solid #3d5afe;
      color: #3d5afe;

      &:hover,
      &:focus {
        background-color: rgba(41, 98, 255, 0.1);
      }
    }

    /* States */
    &:disabled {
      background-color: #e0e0e0;
      color: #9e9e9e;
      pointer-events: none;
      cursor: not-allowed;
      box-shadow: none;
    }

    &[data-disable-shadow="true"] {
      box-shadow: none;
    }

    /* Sizes */
    &.sm {
      padding: 6px 12px;
    }

    &.lg {
      padding: 12px 25px;
    }
  }

  .material-icons {
    margin: auto 0.7em auto 0.3em;
    color: inherit;
    font-size: inherit;
    vertical-align: middle;
    line-height: inherit;
  }
`;

export default function CustomLink({
  buttonStyle,
  children,
  color,
  disabled,
  disableShadow,
  endIcon,
  href,
  size,
  startIcon,
  variant,
  ...linkProps // Other anchor props like aria's, etc
}) {
  return (
    <Link href={href} passHref>
      <StyledLink
        {...linkProps}
        className={classnames({
          button: buttonStyle,
          [size]: size,
          [color]: color,
          [variant]: variant,
        })}
        color={color}
        variant={variant}
        disabled={disabled}
        data-disable-shadow={disableShadow}
      >
        {startIcon && <span className="material-icons md-14">{startIcon}</span>}
        {children}
        {endIcon && <span className="material-icons md-14">{endIcon}</span>}
      </StyledLink>
    </Link>
  );
}

CustomLink.propTypes = {
  buttonStyle: PropTypes.oneOf(["button"]),
  children: PropTypes.node,
  color: PropTypes.oneOf(["default", "primary", "secondary", "danger"]),
  disabled: PropTypes.bool,
  disableShadow: PropTypes.bool,
  endIcon: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["sm", "lg", "xl"]),
  startIcon: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.oneOf(["outline", "text"]),
};
