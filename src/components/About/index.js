import React from 'react';
import Typography from '@mui/material/Typography';

const fontA = {
  fontFamily: 'Poiret One',
  fontStyle: "normal",
}

function About() {
  return (
    <section>
      
      <div className="aboutDiv">
      <p className="indent">Software developer with a BS in Mathematics and a certificate in full stack web development,
         both from University of California, Irvine. </p>         
         <p className="indent">Passionate about solving problems, I have written full stack websites using NodeJS, React, Sequelize, Apollo, Express, JawsDB, MongoDB, as well as several smaller programs such as pseudo 3D games (space travel, car racing) in C++, random
            art generators using HTML/JS/CSS, an automatic trading program (when the RobinHood API was still useable) with Python (Jupyter Notebook for development and Anaconda to run the finished script).</p> 
            <p className="indent">I am an effective communicator and team player as demonstrated throughout
             my coding bootcamp, where I kept open and regular communication with my teammates via
              Slack. On one bootcamp project I built the back end for a simple mock casino, which generates outcomes of games, keeps track of earnings, and has timed ad watching and email verification, in a way that is secure
                 from cheating, using a MySQL database. In another project I built the React
                  front end for a form builder which uses a Mongo Atlas database. 
                  In school I wrote several programs involving minimization problems in Matlab and Python, including simple neural networks using Numpy and more complex ones using TensorFlow. </p>
                  <p className="indent">My goal is always to write
                   robust programs that handle every case seamlessly.
                   </p>
      
      </div>
        
      
    </section>
  );
}

export default About;
