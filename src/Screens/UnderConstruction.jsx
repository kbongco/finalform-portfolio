import React from 'react';

export default function UnderContruction() {
  return (
  <>
    <h1 style={{textAlign:'center'}}>404! Still Under Contruction!</h1>
      <p style={{ textAlign: 'center', marginLeft: '300px' }}> For now, my projects section is still under construction to be more presentable. However, here is an oversimplified version of some of the projects I've done in table form.</p>
      <div className='container' style={{marginLeft:'300px'}}>
        <table>
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Description</th>
              <th>Technologies used</th>
              <th>Github</th>
              <th>Live Site </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>NookDepot</p>
              </td>
              <td>
                <p>An Etsy clone based off of Nookazon, Amazon, and Etsy themed to Animal Crossing focusing on DIY Items and materials</p>
              </td>
              <td>
                <p>
                  FrontEnd: React<br/>
                  BackEnd: PostGres, Ruby, Ruby on Rails
                </p>
              </td>
              <td>
                <p>
                  <a href ='http://github.com/kbongco/NookDepot'>Github</a>
                </p>
              </td>
              <p>
                <a href='https://nookdepot.netlify.app'>NookDepot</a>
              </p>
            </tr>
            <tr>
              <td>
                <p>This portfolio site</p>
              </td>
              <td>
                <p>Self explanatory, this portfolio site is also a portfolio project. I originally made it with HTML, CSS, JS. </p>
              </td>
              <td>
                <p>
                  FrontEnd:React and Styled Compomnents 
                </p>
              </td>
              <td>
                <p>
                  <a href ='https://github.com/kbongco/finalform-portfolio'>Github</a>
                </p>
              </td>
              <p>
                This site :) 
              </p>
            </tr>
            <tr>
              <td>
                <p>EHR Redesign</p>
              </td>
              <td>
                <p>A collaborative project during my time in General Assembly's Software Engineering Immersive with the UX cohort. A redesign of a non-profit's website.</p>
              </td>
              <td>
                <p>
                  FrontEnd:React<br/>
                  BackEnd: Express, Mongoose, MongoDB, Node.js
                </p>
              </td>
              <td>
                <p>
                  <a href ='https://github.com/kbongco/Eleventh-Hour-Rescue-Redesign'>Github</a>
                </p>
              </td>
              <p>
                <a href='https://elastic-lovelace-0a232e.netlify.app/'>EHR Redesign</a>
              </p>
            </tr>
            <tr>
              <td>
                <p>Rhy-finder</p>
              </td>
              <td>
                <p>A simple CRUD application which is an arcade locator in the NYC metropolitan area. This is specifically for rhythm games .</p>
              </td>
              <td>
                <p>
                  FrontEnd:React<br/>
                  Other libraries and tools: AirTable.
                </p>
              </td>
              <td>
                <p>
                  <a href ='https://github.com/kbongco/Rhy-Finder-'>Github</a>
                </p>
              </td>
              <p>
                <a href='https://rhy-finder.netlify.app'>Rhy-Finder</a>
              </p>
            </tr>
            <tr>
              <td>
                <p>I want 2 lift in NJ </p>
              </td>
              <td>
                <p>A "mobile" app utilizing the React GL library, Yelp API which locates powerlifting/weightlifting friendly gyms in the state of NJ. </p>
              </td>
              <td>
                <p>
                  FrontEnd:React<br/>
                  Other libraries and tools: React GL, Yelp API 
                </p>
              </td>
              <td>
                <p>
                  <a href ='https://github.com/kbongco/I-want-to-lift-in-NJ/'>Github</a>
                </p>
              </td>
              <p>
                <a href='http://iwant2liftinnj.surge.sh/'>I want 2 lift in NJ </a>
              </p>
            </tr>
            <tr>
              <td>
                <p>Sample Submission System</p>
              </td>
              <td>
                <p>One of my early app ideas from when I was working in the food/cosmetics industry. A system used to track samples going in and out of a lab for testing. </p>
              </td>
              <td>
                <p>
                  FrontEnd:HTML/CSS<br/>
                  BackEnd: Python/Flask
                </p>
              </td>
              <td>
                <p>
                  <a href ='https://github.com/kbongco/sampleapp'>Github</a>
                </p>
              </td>
              <p>
                Not live :(
              </p>
            </tr>
            <tr>
              <td>
                <p>Overwatch Data Analysis</p>
              </td>
              <td>
                <p>From my data analysis days, showing my love for video games and Overwatch. I manually collected data from Overwatch's competive season 12 and did an analysis of my performance during the Season </p>
              </td>
              <td>
                <p>
                  Python & Pandas 
                </p>
              </td>
              <td>
                <p>
                  <a href ='https://github.com/kbongco/OWdataanalysis'>Github</a>
                </p>
              </td>
              <p>
                Not live :(
              </p>
            </tr>
          </tbody>
        </table>
      </div>
  </>
  )
}