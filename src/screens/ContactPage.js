import React, { Component } from 'react'
import '../Styles/ContactPage.css'
export default class ContactPage extends Component {
  render() {
    document.title = "TheDevPiyush - Contact"

    return (
      <>
        <div className="contactTitle">
          Contact Me
        </div>
        <div className='parentContact'>
          <div className="formContainer">
            <form action="">
              <input type="text" required name='name' placeholder='Name' />
              <input type="email" required name='email' placeholder='Email' />
              <input type="text" required name='subject' placeholder='Feedback' />
              <button id='contactBtn' type='submit'>Send</button>
            </form>
          </div>

        </div>
      </>

    )
  }
}
