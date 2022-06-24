import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from '@mui/material/Button';

function Contact(){

  const [status, setStatus]=useState(1);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xvyzs3h', 'template_08h4yzc', form.current, 'PZY1JqcUe_mZFEx5Q')
      .then((result) => {
          console.log(result.text);
          setStatus(2)
      }, (error) => {
          console.log(error.text);
          setStatus(3)
    });




  };

  if(status==1){
    return (
      <div className="form-style-5">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
      </div>
    );
  }else if(status==2){
    return (
      <div className="row center">
        <div>
        <p className="row center">message sent</p> 
        <div className="row center">
        <Button variant="text" onClick={()=>{setStatus(1)}}>Send another Message</Button>

        </div>
       
        </div>
       
      </div>
    );
  }else if(status==3){
    return (
      <div>
       <p>Oopsie, message not sent. </p> 
      </div>
    );
  }

  
};

export default Contact;


