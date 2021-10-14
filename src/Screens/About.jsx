import React from 'react';
import styled from 'styled-components'
import LargeCards from './LargeCard'
import SmallCard from '../Components/SmallCard'
import { Link } from "react-router-dom";


const TestHeader = styled.h1`
text-align:center
`

const ProfileImg = styled.img`
display:flex;
border-radius:50%;
margin-left:1500px;
border: 2px solid black;
height:300px;
`

const PhotoContainer = styled.div`
display:flex;
justify-content:flex-end;
margin-left:-1500px;
`

const ButtonContainer = styled.div`
display:flex;
justify-content:center;
`;

const StyledButtons = styled.button`
background-color:#1C9DE5;
color:white;
height:4rem;
width:15rem;
margin-top:20px;
font-size:20px;
margin-right:20px;
`;

const SmallCardContainer = styled.div`
display:flex;
justify-content:flex-end;
margin-top:-60px;
`;

export default function About() {
  return (
    <>
      <div className='profile-container' style={{display:'flex', marginTop:'150px'}}>
      <LargeCards />
      <PhotoContainer>
      <ProfileImg src="https://i.ibb.co/zGh7CrS/47378608-10213492774901053-3667866864937074688-n.jpg" alt="47378608-10213492774901053-3667866864937074688-n" border="0"/>
        </PhotoContainer>
      </div>
      <ButtonContainer>
        <a href='https://forms.gle/AeaS2vn2A3axN1pF8'>
          <StyledButtons>Contact me!</StyledButtons>
          </a>
        <Link exact to ='/resume'>
          <StyledButtons>Resume</StyledButtons>
        </Link>
      </ButtonContainer>
      <SmallCardContainer>
        <SmallCard/>
      </SmallCardContainer>
    </>
  )
}