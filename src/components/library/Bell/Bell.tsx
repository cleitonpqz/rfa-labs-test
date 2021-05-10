import React from "react";
import styled from "styled-components";
import { BellIcon } from "../../../assets/images";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;

  position: relative;
`;

const BlueCircle = styled.div`
  position: absolute;
  left: 58.33%;
  right: 0%;
  top: 0%;
  bottom: 58.33%;
  background: #0346f2;
  border: 2px solid #ffffff;
  border-radius: 100px;
`;

const InnerCircle = styled.div`
  position: absolute;
  left: 75%;
  right: 16.67%;
  top: 16.67%;
  bottom: 75%;
  background: #ffffff;
  border-radius: 100px;
`;

const NotificationCircle: React.FC = () => {
  return (
    <>
      <BlueCircle />
      <InnerCircle />
    </>
  );
};

interface BellProps {
  showNotification?: boolean;
}

const defaultProps: BellProps = {
  showNotification: true,
};

const Bell: React.FC<BellProps> = ({ showNotification }: BellProps) => {
  return (
    <Wrapper>
      <BellIcon />
      {showNotification && <NotificationCircle />}
    </Wrapper>
  );
};

Bell.defaultProps = defaultProps;

export default Bell;
