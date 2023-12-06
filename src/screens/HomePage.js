import React, { Component } from 'react'
import '../Styles/HomePage.css'

export default class HomePage extends Component {
    render() {
        return (
            <>
                <div className="blackbox">
                    <div className="content">
                        <div className="heading">
                            TheDevPiyush
                        </div>
                        <p id='subtitle'>
                            Web Developer - ReactJs
                            <br />
                        </p>
                        <div id="description">
                            I'm a CSc student, and a part time free lancer. I design and code, complex Web based Applications for my projects and my clients.
                        </div>
                        <div className="explorebtn">
                            <p>
                                Explore Projects
                            </p>
                        </div>
                    </div>
                </div>

                <div className="purplebox">Hello!!!!</div>
            </>
        )
    }
}
