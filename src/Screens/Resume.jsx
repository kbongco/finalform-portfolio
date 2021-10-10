import React from 'react';
import FigmaEmbed from 'react-figma-embed';
import styled from 'styled-components'

export default function Resume() {
  const FigmaContainer = styled.div`
  margin-left:450px;
  margin-right:450px;
  `;
  return (
    <>
      <h5 style={{ textAlign: 'center', marginLeft: '450px', marginRight: '450px' }}>I got a little creative with my resume and decided to show my professional experience with a figma file. But if the figma file isn't your style, you can always download my resume <a href='https://docs.google.com/document/d/1bDX3WS03-1KfwKOmX7ZySROrGlA3fvbRp7yjmMLq5OQ/edit?usp=sharing'>here!</a></h5>
      <FigmaContainer>
      <FigmaEmbed url="https://www.figma.com/file/zcxDpOBXEaRrKY55cw5mgF/Untitled?node-id=1%3A2" />
      </FigmaContainer>
    </>
  )
}