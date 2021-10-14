import React from 'react';
import styled from 'styled-components';


export default function AboutMeStory() {
  const StoryContainer = styled.div`
  display:flex;
  margin-left:30%;
  border:2px solid black;
  margin-right:5%;
  background-color: #AABFF4;
  `;
  return (
    <>
    <h1 style={{ textAlign: 'center' }}>About me</h1>
      <StoryContainer>
        <div>
        <p>Prior to becoming a software engineer, I've worked in the food industry at some of the major food companies in the US. If you've had Sour Patch kids, Triden, Swedish Fish, I've worked with it at some point. However, most of my positions were contract positions which often led me to have a lot of downtime </p>
          <p>That being said, in between jobs, I found myself trying to learn something new, which was how I fell into coding. After my last position working in the food industry, I was asked what I was going to do next, I said I was going to finally go into the tech industry. I started off with learning data science and Python, only to find that it wasn't something that I was good at, I really liked web development since that was what I started with so I stuck with that. </p>
          <p>
            When everything was shaken up thanks to the pandemic, I had a lot more free time on my hands. At that point, I figured the self-taught route was no longer feasible for me and I needed some accountability and structure. I enrolled in General Assembly's Software Engineering Immersive where I learned about full-stack web development in the span of 12 weeks, and haven't looked back since! After months of hard work I managed to get a position as a junior software developer, which I am still working as today.
          </p>
          <p>
            While I love coding, it's not the only thing I enjoy! I love playing video games, and I attend various pop-culture conventions such as New York Comic Con, Anime NYC, and AnimeNEXT, where I volunteer at. I also serve as a member of the Board of Directors for the parent company that runs AnimeNEXT. I'm also a competitive powerlifter in the USAPL, so you can also catch me lifting at random gyms in the area! :) 
          </p>
        </div>
      </StoryContainer>
      </>
  )
}