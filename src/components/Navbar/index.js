import React, { useState } from "react";
import { Link as LinkR } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { Bio } from "../../data/constants";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: all 0.8s ease;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
  text-decoration: none;
  align-items: center;

  @media screen and (max-width: 640px) {
    padding: 0;
  }
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 80%;
  height: 100%;
  padding: 0 6px;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const GithubButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

export const Span = styled.div`
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + 99};
  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;

const MobileMenuLinks = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavContainer>
        <NavLogo
          to="/"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20",
              cursor: "pointer",
            }}
          >
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavItems>
        <ButtonContainer>
          <GithubButton href={Bio.github} target="_blank">
            GitHub Profile
          </GithubButton>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileMenuLinks
              href="#about"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              About
            </MobileMenuLinks>
            <MobileMenuLinks
              href="#skills"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Skills
            </MobileMenuLinks>
            <MobileMenuLinks
              href="#experience"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Experience
            </MobileMenuLinks>
            <MobileMenuLinks
              href="#projects"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Projects
            </MobileMenuLinks>
            <MobileMenuLinks
              href="#education"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Education
            </MobileMenuLinks>
            <MobileMenuLinks
              href="#contact"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Contact
            </MobileMenuLinks>
            <GithubButton
              style={{
                padding: "10px 16px",
                background: `${theme.primary}`,
                color: "white",
                width: "max-content",
              }}
              href={Bio.github}
              target="_blank"
            >
              GitHub Profile
            </GithubButton>
          </MobileMenu>
        )}
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
