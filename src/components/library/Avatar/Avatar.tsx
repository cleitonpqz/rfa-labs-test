import React from "react";
import styled from "styled-components/macro";
import { AvatarDefault } from "../../../assets/images";

const Wrapper = styled.div`
  width: 48px;
  height: 48px;
`;

const Elipse = styled.div`
  width: 48px;
  height: 48px;

  border: 2px solid #ffffff;
  border-radius: 100px;
`;

const Avatar: React.FC = () => {
  return (
    <Wrapper>
      <Elipse>
        <AvatarDefault />
      </Elipse>
    </Wrapper>
  );
};

export default Avatar;
