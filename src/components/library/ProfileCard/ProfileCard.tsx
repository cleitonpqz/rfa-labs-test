import React from "react";
import styled from "styled-components";
import BellComponent from "../Bell/Bell";
import UserProfile from "../UserProfile/UserProfile";
import { Divider } from "../../../assets/images";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  width: 291px;
  height: 48px;
  margin-right: 32px;
  padding: 0px;
`;

const ProfileCard: React.FC = () => {
  return (
    <Wrapper>
      <UserProfile showChevron />
      <Divider />
      <BellComponent />
    </Wrapper>
  );
};

export default ProfileCard;
