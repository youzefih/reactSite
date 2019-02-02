import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import logo from './face.png'

class Resume extends Component {
  render() {
    return(
      <div>
       
          
            <h1>         . . . . . . . . . . . . . . .</h1>
            <h2>Education</h2>

            <Education
                 startYear={2016}
                 endYear={2019}
                 schoolName="San Diego State University - BS in CS"
                 schoolDescription="Courses taken include :  Data Structures, Algorithms, Operating Systems, Assembly, Computer design, Computer logic, Programming languages, Machine Learning, Systems programming, Database implementation, Computer vision, Artificial Intelligence"
                  />
            

               
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
                startYear={2017}
                endYear={2019}
                jobName="MaximoLimo - Web developer"
                jobDescription="Built site from scratch using Javascript, react, html/css. Maintained site, updated, managed client database using Sql."
                />

              <Experience
                startYear={2016}
                endYear={2017}
                jobName="YMCA - Lifeguard"
                jobDescription="performed basic lifeguarding duties such as CPR/AED, basic rescues and kept the pool deck safe"
                />
               
                <Experience
              startYear={2016}
              endYear={2017}
              jobName="Hollister - Brand Representative"
              jobDescription="Brand representative, performed sales, talked to customers , cash register and money handling."
              />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                      skill="Python"
                      progress={100}
                      />
                      <Skills
                      skill="Java"
                      progress={100}
                      />
              <Skills
                skill="javascript"
                progress={80}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={100}
                  />
                  <Skills
                    skill="React"
                    progress={70}
                    />
                  
                      <Skills
                      skill="C/C++"
                      progress={60}
                      />
                      <Skills
                      skill="SQL"
                      progress={40}
                      />
                  
                  <h2>Languages</h2>
              <ul>
                  <li>English    - Fluent</li>
                  <li>French     - Native Speaker</li>
                  <li>Spanish    - Fluent</li>
                  <li>Moroccan   - Native Speaker</li> </ul>

          
        
      </div>
    )
  }
}

export default Resume;
