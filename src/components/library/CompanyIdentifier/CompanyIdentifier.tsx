import React from "react";
import styled from "styled-components";
import { Divider, Logo } from "../../../assets/images";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 284px;
  height: 48px;
  padding: 0px;
`;

const IdentifierContainer = styled.div`
  flex: none;
  order: 0;
  flex-grow: 0;
  height: 48px;
`;

const IdentifierWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LogoWrapper = styled.div`
  width: 48px;
  height: 48px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 8px;
`;

const StyledLogo = styled.div`
  margin-top: 5px;
  margin-left: 3px;
`;

const CompanyNameWrapper = styled.div`
  width: 112px;
  height: 16px;
  margin: 16px 8px;

  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  color: #1a1e2c;

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const DividerPosition = styled.div`
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 32px;
`;

const EmptyFrame = styled.div`
  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 0px 32px;
  width: 51px;
  height: 24px;
`;

interface CompanyIdentifierProps {
  companyName: string;
}

const CompanyIdentifier: React.FC<CompanyIdentifierProps> = ({
  companyName,
}: CompanyIdentifierProps) => {
  return (
    <Wrapper>
      <IdentifierContainer>
        <IdentifierWrapper>
          <LogoWrapper>
            <StyledLogo>
              <Logo />
            </StyledLogo>
          </LogoWrapper>
          <CompanyNameWrapper>{companyName}</CompanyNameWrapper>
        </IdentifierWrapper>
      </IdentifierContainer>
      <DividerPosition>
        <Divider />
      </DividerPosition>
      <EmptyFrame />
    </Wrapper>
  );
};

export default CompanyIdentifier;
