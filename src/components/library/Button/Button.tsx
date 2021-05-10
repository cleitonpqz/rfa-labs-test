/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import styled, { css } from "styled-components/macro";

const primary = css`
  background: #0346f2;
  color: #ffffff;
`;

const styles = { primary };

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary";
}

const defaultProps = {
  variant: "primary",
};

const StyledButton = styled.button<Props>`
  border-radius: 12px;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  padding: 12px 24px;
  min-height: 48px;
  border: none;

  ${(props) => props.variant && styles[props.variant]}
`;

const Button: React.FC = ({ variant, ...props }: Props) => {
  return <StyledButton variant={variant} {...props} />;
};

Button.defaultProps = defaultProps;

export default Button;
