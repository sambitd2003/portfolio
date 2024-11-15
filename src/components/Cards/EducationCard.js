import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 650px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 12px 16px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;
  border: 0.1px solid #306ee8;
  box-shadow: rgba(23, 92, 230, 0.15) 0 4px 24px;

  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }

  @media screen and (max-width: 768px) {
    padding: 10px;
    gap: 8px;
    width: 300px;
  }
`;

const Top = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
`;

const Logo = styled.img`
  height: 50px;
  background-color: #000;
  border-radius: 10px;
  margin-top: 4px;

  @media screen and (max-width: 768px) {
    height: 40px;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + 99};

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Degree = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};

  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Span = styled.span`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  max-width: 100%;
  text-overflow: ellipsis;
`;

const Grade = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const EducationCard = ({ academics }) => {
  return (
    <Card>
      <Top>
        <Logo src={academics.img} />
        <Body>
          <Name>{academics.school}</Name>
          <Degree>{academics.degree}</Degree>
          <Date>{academics.date}</Date>
        </Body>
      </Top>
      <Grade>Grade: {academics.grade}</Grade>
      <Description>
        <Span>{academics.desc}</Span>
      </Description>
    </Card>
  );
};

export default EducationCard;
