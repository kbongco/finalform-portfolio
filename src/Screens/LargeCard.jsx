import React from 'react';
import styled from 'styled-components';

export default function LargeCards() {
  const CardContainer = styled.div`
  display:flex;
  margin-left:30%;
  border: 2px solid black;
  margin-right:5%;
  background-color:#AABFF4;
  `;
  
  return (
    // <div className='container'>
    <CardContainer>
    <div style={{ color: 'black' }}>
        <h2>Hi I'm Kathleen and I'm a front end
             web developer!
    </h2>
    <div>
    I’m a former food scientist, turned software engineer! I am currently working at Verizon as a junior software developer, working on redesigns and making things accessible for all. 
    </div>
      </div>
      </CardContainer>
      // </div>
  )
}