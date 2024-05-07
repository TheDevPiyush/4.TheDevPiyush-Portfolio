import React from 'react'
import '../Styles/ContactPage.css'
import { useForm, ValidationError } from '@formspree/react';
import { useEffect } from 'react';
export default function ContactPage() {
  useEffect(() => {
    document.title = "TheDevPiyush - Contact"
  }, [])


  const [state, handleSubmit] = useForm("mwkgldol");

  return (
    <>
      <div className="contactTitle">
        <div className="contitle">
          <h1>Contact</h1>
        </div>
        <div className="subtitleContact">
          <h2>Contact me on Github, Instagram, Mail or Leave your feedback here so that I can reach out to you...</h2>
        </div>
      </div>
      <div className='parentContact'>
        {state.succeeded
          ?

          <center className="confirmation">Thank You for your feedback. I will reach out to you very soon..</center>

          :
          <div className="formContainer">
            <form onSubmit={handleSubmit}>
              <input type="text" required name='name' placeholder='Name' />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <input type="email" required name='email' placeholder='Email' />
              <input type="text" required name='message' placeholder='Feedback' />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <button disabled={state.submitting} id='contactBtn' type='submit'>{"Send"}</button>
            </form>
          </div>
        }

        <div className="socialLogos">

          <a href="https://www.instagram.com/hey.its.piyush" target='_blank' rel='noreferrer'>
            <i className="fa-brands i fa-instagram"></i>
          </a>

          <a href="https://www.github.com/thedevpiyush" target='_blank' rel='noreferrer'>
            <i className="fa-brands i fa-github"></i>
          </a>

          <a href="mailto:piyushdev.developer@gmail.com" target='_blank' rel='noreferrer'>
            <i className="fa-solid i fa-envelope"></i>
          </a>
        </div>
      </div>
    </>

  )
}
