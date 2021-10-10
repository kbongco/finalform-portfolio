import React from "react";
import styled from "styled-components";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  const TopDiv = styled.div`
  color: black
  font-size:24px
  `;

  const IconContainer = styled.div`
  display:flex
  justify-content:center
  `;

  const DivContainer = styled.div`
    height: 100%;
    width: 20%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #f5eeee;
    transition: 0.5s ease;
    overflow-x: hidden;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const TextContainer = styled.div`
    background-color: #f5eeee;
    color: black;
  `;

  const LinkText = styled.div`
    width: 100%;
    background-color: #98b0ee;
    border-bottom: 2px solid black;
  `;
  const SocialIcons = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom:20px;
  `;
  return (
    <>
      <DivContainer>
        <TextContainer>
          <Link exact to="/">
            <h4>Kathleen Bongco</h4>
          </Link>
          <h5>Front End Developer</h5>
          <div>
            <SocialIcons>
              <LinkedInIcon />
              <GitHubIcon />
            </SocialIcons>
          </div>
        </TextContainer>
        <LinkText>
          <Link exact to="/about-me">
            <p>About Me</p>
          </Link>
        </LinkText>
        {/* <LinkText>
          <Link exact to='/experience'>
            <p>Experience</p>
            </Link>
        </LinkText> */}
        <LinkText>
          <Link exact to="/projects">
            <p>Projects</p>
          </Link>
        </LinkText>
        <LinkText>
          <Link exact to ='/resume'>
            <p>Resume</p>
          </Link>
        </LinkText>
        <LinkText>
          <p>Contact Me</p>
        </LinkText>
      </DivContainer>
    </>
  );
}
