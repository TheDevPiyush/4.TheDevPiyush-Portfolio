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
        Contact
        <br />
        <div className="subtitleContact">
          Contact me on Github, Instagram, Mail or Leave your feedback here so that I can reach out to you...
        </div>
      </div>
      <div className='parentContact'>
        {state.succeeded
          ?

          <center className="confirmation">Thanks For your feedback.. I will reach out to you very soon..</center>

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
              <input type="text" required name='subject' placeholder='Feedback' />
              <ValidationError
                prefix="Message"
                field="subject"
                errors={state.errors}
              />
              <button disabled={state.submitting} id='contactBtn' type='submit'>Send</button>
            </form>
          </div>
        }
      </div>
    </>

  )
}
