import React, { useState } from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import res from "../../assets/PDF/res.pdf";




  

function Resume() {


  const [resume, setResume]=useState(false);

  function toggleResume(){
    if(resume==false){
      setResume(true)
    }else{
      setResume(false)
    }
  }
// href="/../../assets/PDF/resume.pdf"
  if(resume==true){
    return (
      <div>
        <Button variant="text" onClick={toggleResume}>Close</Button>
      <div sx={{width:"50vw", height:"50vh"}}>

        yoyo
      
      </div>
      </div>

    );

  }else{
    return (
      <section >
        <div className="aboutDiv">
          <div className="row center">
          <p><a className="link hover" href={res} download="Resume" target="blank">Download</a> my full resume.</p>
          </div>
          <div className="row even">
            <div className="skillList">
              <h3 className="row center">Front-end</h3>
              <ul className="skills">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>MUI</li>
              </ul>

            </div>
            <div className="skillList">
              <h3 className="row center">Back-end</h3>
              <ul className="skills">
                <li>APIs</li>
                <li>NodeJS</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
              </ul>
              
            </div>
            <div className="skillList">
              <h3 className="row center">Other</h3>
              <ul className="skills">
                <li>C++</li>
                <li>Python</li>
                <li>Excel VBA</li>
              </ul>
              
            </div>
          </div>
          
          
          
        </div>
      </section>
    );

  }


  
}

export default Resume;
