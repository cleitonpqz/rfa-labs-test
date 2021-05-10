import React, { ReactNode } from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: #8e94a7;
`;

interface SubTitleProps {
  children?: ReactNode;
}

const defatulProps = {
  children: "",
};

const SubTitle: React.FC<SubTitleProps> = ({ children }: SubTitleProps) => {
  return <Wrapper>{children}</Wrapper>;
};

SubTitle.defaultProps = defatulProps;

export default SubTitle;
