import React, { Component } from 'react'

export default class Error404 extends Component {
  render() {
    document.title = "Not Found"
    return (
      <center >
        <div className="mainErrorDiv">
          <h1>
            <strong style={{ fontSize: 'xx-large' }} >
              Error 404
              <i class="fa-solid fa-cloud-exclamation" style={{ margin: '1em' }}></i>
            </strong>
            <br />
            We tried but the page you are looking for doesn't exist.
          </h1>
        </div>
      </center>
    )
  }
}
