import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 330px;
  height: 490px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
  align-items: center;
`;

const Tag = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + 15};
  padding: 2px 8px;
  border-radius: 10px;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 0 2px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  margin-left: 2px;
  color: ${({ theme }) => theme.text_secondary + 80};

  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 99};
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  margin-top: 8px;
  max-width: 100%;
`;

const ProjectCard = ({ project, setOpenModal }) => {
  return (
    <Card onClick={() => setOpenModal({ state: true, project: project })}>
      <Image src={project.image} />
      <Tags>
        {project.tags.map((tag) => (
          <Tag>{tag}</Tag>
        ))}
      </Tags>
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
      </Details>
    </Card>
  );
};

export default ProjectCard;
