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
        document.title = "TheDevPiyush - Home"

        return (
            <>
                <div className="parent">
                    <div className="heading">
                        <div className="heading-curve">
                            <div className="title">
                                TheDevPiyush
                            </div>
                            <div className="subtitle">
                                Hello visitor, I'm Piyush, I'm a <span id=''>{<TypingEffect words={['React Dev.', 'Web Dev.', 'CS Student.', 'Freelancer.', 'Leetcoder.']} />
                                }</span>
                            </div>

                        </div>

                    </div>

                    <div className="rowHome">
                        <div className="upper2">
                            <div className="exitCurve3">

                                To know more about my projects, Please Visit my Projects section, It has some of my best projects.

                            </div>
                        </div>
                        <div className="upper">
                            <div className="exitCurve">
                                To know more about my me, Please Visit my About section, You can get some insignts about me and my work.
                            </div>
                        </div>

                        <div className="upper2">
                            <div className="exitCurve2">
                                To get in touch with me, Kindly visit the feedback page to contact me, or you can also leave a feedback there.
                            </div>
                        </div>

                    </div >

                </div>

            </>
        )
    }
}
