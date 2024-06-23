import React, { Component } from 'react'
import '../Styles/HomePage.css'
import TypingEffect from '../components/TypingEffect'
import { Link } from 'react-router-dom'

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
                                <h2>Hello visitor, I'm Piyush, I'm a <span id=''>{<TypingEffect words={['React Dev.', 'MERN Dev.', 'Web Dev.', 'CS Student.', 'Freelancer.', 'Leetcoder.']} />
                                }</span></h2>
                            </div>

                        </div>

                    </div>

                    <div className="rowHome">
                        <div className="half-container g1">
                            <div className='skills'>Skills</div>
                            <div className="tag">
                                <span className='skill-span'>MongoDB</span>
                                <span className='skill-span'>Express.Js</span>
                                <span className='skill-span'>React.Js</span>
                                <span className='skill-span'>Node.Js</span>
                                <span className='skill-span'>MERN</span>
                                <span className='skill-span'>JavaScript</span>
                                <span className='skill-span'>Full Stack Web</span>
                                <span className='skill-span'>Django</span>
                                <span className='skill-span'>Python</span>
                            </div>
                        </div>
                        <div className="half-container g2">
                            <div className='skills'>Tools</div>
                            <div className="tag">
                                <span className='skill-span'>GitHub</span>
                                <span className='skill-span'>VS Code</span>
                                <span className='skill-span'>Android Studio</span>
                                <span className='skill-span'>ChatGPT</span>
                                <span className='skill-span'>Firebase</span>
                            </div>
                        </div>

                        <div className="half-container g3">
                            <div className='skills'>Projects</div>
                            <div className="tag">
                                <span className='skill-span'>Chat App</span>
                                <span className='skill-span'>E-Commerce App</span>
                                <span className='skill-span'>Bots</span>
                                <Link id='link-projects' to="/projects">
                                    <span className='skill-span'>View More <i class="fa fa-arrow-right" aria-hidden="true"></i></span>
                                </Link>
                            </div>
                        </div>


                        {/* <div className="btn-container" style={{
                            width: '100%',
                            textAlign: 'center',
                            paddingBottom: '2em'

                        }}>
                            <a id='resume' href='' target='_blank' style={{
                                fontSize: "1.5rem",
                                backgroundColor: "rgb(98, 42, 214)",
                                padding: '.7em',
                                borderRadius: '40px',
                                fontWeight: 'bold',
                                boxShadow : '0 0 50px 2px rgb(98, 42, 180)',
                                
                            }}>
                                My Resume
                            </a>
                        </div> */}
                    </div >
                </div >

            </>
        )
    }
}
