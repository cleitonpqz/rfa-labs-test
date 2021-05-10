import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0px 32px;
`;

interface Props {
  className?: string;
}

const defaultProps = {
  className: "",
};

const Divider: React.FC<Props> = ({ className }: Props) => {
  return (
    <Wrapper className={className}>
      <svg
        width="1"
        height="34"
        viewBox="0 0 1 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.5 1V33"
          stroke="#E7E9F0"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Wrapper>
  );
};

Divider.defaultProps = defaultProps;

export default Divider;
