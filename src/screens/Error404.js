import React, { Component } from 'react'

export default class Error404 extends Component {
  render() {
    document.title = "Not Found"
    return (
      <div style={{ textAlign: 'center', width: "100%", marginTop: "15%" }}>

        <h1>
          <strong>
            Error 404
            <i class="fa fa-plus" style={{margin:"15px", rotate:"45deg", fontSize:'larger'}} aria-hidden="true"></i>
          </strong>
          <br />
          We tried but the page you are looking for doesn't exists.
        </h1>
      </div>
    )
  }
}
