import React from "react";
import styled from "styled-components/macro";
import { Time } from "@styled-icons/boxicons-regular/Time";
import { PlusCircle } from "@styled-icons/evaicons-solid/PlusCircle";
import { Divider, Dragger } from "assets/images";
import SubTitle from "components/library/SubTitle/SubTitle";
import Title from "components/library/Title/Title";
import UserProfile from "components/library/UserProfile/UserProfile";
import Button from "components/library/Button/Button";
import Card from "components/library/Card/Card";

const CardRow = styled(Card)`
  display: flex;
  align-items: center;
  position: relative;
  height: 112px;
`;

const DragElement = styled.div`
  width: 32.34px;
  height: 48px;

  position: relative;
  left: 21.56px;
`;

const DragIcon = styled(Dragger)`
  position: absolute;
  width: 8px;
  height: 16px;
  left: 8px;
  top: 16px;
`;

const TitleDeadline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  width: 270.82px;
  height: 48px;

  position: relative;
  left: 32px;
`;

const RightFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;

  position: relative;
  height: 48px;
  right: 23px;
  margin-left: auto;
`;

const Earning = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  width: 152px;
  height: 44px;
`;

const PotentialEarning = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 104px;
  height: 44px;
`;

const Deadline = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px;
  width: 139px;
`;

const Icon = styled(Time)`
  width: 16px;
  height: 16px;
  color: #8e94a7;
`;

const PlusIcon = styled(PlusCircle)`
  width: 24px;
  height: 24px;
  color: #00d555;
  margin-left: auto;
`;

const CreateButton = styled(Button)`
  margin: 0px 32px;
`;

const EarningValue = styled(Title)`
  font-size: 14px;
`;

const TopCard: React.FC = () => {
  return (
    <CardRow>
      <DragElement>
        <DragIcon />
      </DragElement>
      <TitleDeadline>
        <Title>Individual tax return 2019</Title>
        <Deadline>
          <Icon />
          <SubTitle>16 December 2020</SubTitle>
        </Deadline>
      </TitleDeadline>
      <RightFrame>
        <Divider />
        <UserProfile location="New York, NY" />
        <Divider />
        <Earning>
          <PotentialEarning>
            <EarningValue>$1000</EarningValue>
            <SubTitle>Potential earning</SubTitle>
          </PotentialEarning>
          <PlusIcon />
        </Earning>
        <Divider />
        <CreateButton>Create</CreateButton>
      </RightFrame>
    </CardRow>
  );
};

export default TopCard;
