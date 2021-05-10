/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactNode } from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #1a1e2c;
`;

interface TitleProps {
  children?: ReactNode;
}

const defatulProps = {
  children: "",
};

const Title: React.FC<TitleProps> = ({ children, ...props }: TitleProps) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

Title.defaultProps = defatulProps;

export default Title;
