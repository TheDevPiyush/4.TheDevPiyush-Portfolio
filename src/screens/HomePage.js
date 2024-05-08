import React, { Component } from 'react'
import '../Styles/HomePage.css'
import TypingEffect from '../components/TypingEffect'

export default class HomePage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            firstLoad: false
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        this.setState({ firstLoad: true })
    }

    render() {
        document.title = "TheDevPiyush - Portfolio"

        return (
            <>
                <div className="parent">
                    <div className="heading">
                        <div className="heading-curve">
                            <div className="title">
                                <h1>TheDevPiyush - Portfolio</h1>
                            </div>
                            <div className="subtitle">
                                <h2>Hello visitor, I'm Piyush, I'm a <span id=''>{<TypingEffect words={['React Dev.', 'Web Dev.', 'CS Student.', 'Freelancer.', 'Leetcoder.']} />
                                }</span></h2>
                            </div>

                        </div>

                    </div>

                    <div className="rowHome">
                        <div className="upper2">
                            <div className="exitCurve3">
                                Portfolio showcasing my coding projects, skills, and providing a gateway to connect with me..
                            </div>
                        </div>
                        <div className="upper">
                            <div className="exitCurve">
                                For more details on my projects, visit the Projects section showcasing some of my finest work.
                            </div>
                        </div>

                        <div className="upper2">
                            <div className="exitCurve2">
                                To connect with me, please visit the Feedback page to leave your thoughts or contact me directly.
                            </div>
                        </div>

                    </div >

                </div>

            </>
        )
    }
}
