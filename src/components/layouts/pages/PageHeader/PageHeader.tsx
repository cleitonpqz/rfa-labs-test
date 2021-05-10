import CompanyIdentifier from "components/library/CompanyIdentifier/CompanyIdentifier";
import ProfileCard from "components/library/ProfileCard/ProfileCard";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 112px;
  background: #ffffff;

  border: 0.5px solid #ebebf9;
  box-sizing: border-box;

  box-shadow: 8px 8px 16px 4px rgba(133, 139, 146, 0.06);
  border-radius: 20px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const Identifier = styled.div`
  margin-left: 32px;
`;

const PageHeader: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Identifier>
          <CompanyIdentifier companyName="Bank Website" />
        </Identifier>
        <ProfileCard />
      </Container>
    </Wrapper>
  );
};

export default PageHeader;
