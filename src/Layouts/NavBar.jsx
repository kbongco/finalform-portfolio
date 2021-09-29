import React from 'react';
import styled from 'styled-components'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


export default function NavBar(props) {
  const TopDiv = styled.div`
  color: black
  font-size:24px
  `

  const IconContainer = styled.div`
  display:flex
  justify-content:center
  `

  const DivContainer = styled.div`
  height: 100%;  width: 20%;  position: fixed; z-index: 1; top: 0; left: 0; background-color:#F5EEEE; transition: .5s ease; overflow-x: hidden; padding-top: 20px; display: flex; flex-direction: column; align-items: center;
  `

  const TextContainer = styled.div`
  background-color:#F5EEEE
  color:black
  `

  const LinkText = styled.div`\
  width: 100%
  background-color:#98B0EE
  border-bottom:2px solid black
  `
  return (
    <>
    <DivContainer>
      <TextContainer>
        <h4>Kathleen Bongco</h4>
        <h5>Front End Developer</h5>
        <LinkedInIcon />
        <GitHubIcon/>
        </TextContainer>
        <LinkText>
          <p>About Me</p>
        </LinkText>
        <LinkText>
          <p>Experience</p>
        </LinkText>
        <LinkText>
          <p>Projects/Skills</p>
        </LinkText>
        <LinkText>
          <p>Resume</p>
        </LinkText>
        <LinkText>
          <p>Contact Me</p>
        </LinkText>
    </DivContainer>
    </>
  )
}
