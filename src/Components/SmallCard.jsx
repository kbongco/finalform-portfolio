import React from 'react';
import styled from 'styled-components';
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiPython } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { DiNodejs } from 'react-icons/di';
import { DiRuby } from 'react-icons/di';
import { DiRor } from 'react-icons/di';
import { DiGit } from 'react-icons/di';


export default function SmallCard() {
  const SmallContainer = styled.div`
  display:flex;
  border: 2px solid black;
  margin-right:5%;
  background-color:#AABFF4;
  `;
  return (
    <div>
      <SmallContainer>
        <div>
          <h3>Technologies I know and Tools I use</h3>
          <DiHtml5 style={{fontSize:'2em',}}/>
          <DiCss3 style={{fontSize:'2em',}}/>
          <DiJavascript style={{fontSize:'2em',}}/>
          <DiReact style={{fontSize:'2em',}}/>
          <DiPython style={{fontSize:'2em',}}/>
          <DiMysql style={{fontSize:'2em',}}/>
          <DiNodejs style={{fontSize:'2em',}}/> 
          <DiRuby style={{fontSize:'2em',}}/>
          <DiRor style={{fontSize:'2em',}}/>
          <DiGit style={{fontSize:'2em',}}/>
        </div>
      </SmallContainer>
      
    </div>
  )
}