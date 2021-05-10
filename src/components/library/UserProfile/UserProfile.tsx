import React from "react";
import styled from "styled-components";
import { Location } from "@styled-icons/ionicons-sharp/Location";
import { Chevron } from "../../../assets/images";
import Avatar from "../Avatar/Avatar";
import SubTitle from "../SubTitle/SubTitle";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;

  width: 202px;
  height: 48px;
`;

const UserNameAndLocation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  margin: 0px 16px;
`;

const UserName = styled.div`
  width: 98px;
  height: 24px;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;

  color: #1a1e2c;
`;

const ChevronBox = styled.div`
  width: 24px;
  height: 24px;
`;

const UserLocation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
`;

const Icon = styled(Location)`
  width: 16px;
  height: 16px;
  color: #8e94a7;
`;

interface UserProfileProps {
  userName?: string;
  showChevron?: boolean;
  location?: string;
}

const defaultProps = {
  userName: "Annette Black",
  showChevron: false,
  location: "",
};

const UserProfile: React.FC<UserProfileProps> = ({
  userName,
  showChevron,
  location,
}: UserProfileProps) => {
  return (
    <Wrapper>
      <Avatar />
      <UserNameAndLocation>
        <UserName>{userName}</UserName>
        {location && (
          <UserLocation>
            <Icon />
            <SubTitle>{location}</SubTitle>
          </UserLocation>
        )}
      </UserNameAndLocation>
      {showChevron && (
        <ChevronBox>
          <Chevron />
        </ChevronBox>
      )}
    </Wrapper>
  );
};

UserProfile.defaultProps = defaultProps;

export default UserProfile;
