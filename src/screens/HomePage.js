import React, { Component } from 'react'
import '../Styles/HomePage.css'
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
                                <h1>TheDevPiyush</h1>
                            </div>
                            <div className="subtitle">
                                <h2>Hello, I'm Piyush, I'm a Full Stack Developer for Web & Mobile.</h2>
                            </div>
                        </div>
                    </div>

                    <div className="my-brief">
                        <ul>
                            <li className='mybrief-list'>I'm from Patna, India &nbsp;
                                <i class="fa  fa-location-dot" aria-hidden="true"></i></li>
                            <li className='mybrief-list'>Currently in College pursuing degree in Computer Science.
                                &nbsp;
                                <i class="fa fa-sticky-note" aria-hidden="true"></i>
                            </li>
                            <li className='mybrief-list'>Working and learning by developing personal projects. &nbsp;
                                <i class="fa fa-wrench" aria-hidden="true"></i>
                            </li>
                        </ul>
                    </div>

                    <div className="rowHome">
                        <div className="half-container g1">
                            <div className='card-title'>Tech Stack</div>

                            {/* <div className="seperator">
                                <div className="tech-title">Web</div>
                                <div className="border-line"></div>
                            </div> */}
                            <div className="tag">
                                <span className='data-bubble'>
                                    <span>
                                        <img className='logos'
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ZYtHv2OLXmthRPbkmENZRXuqBVDwlsrZ1A&s" alt="" />
                                    </span>
                                    MongoDB
                                </span>
                                <span className='data-bubble'>
                                    <span>
                                        <img className='logos' src="data:image/png;base64,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" alt="" />
                                    </span>
                                    Express.Js
                                </span>
                                <span className='data-bubble'>
                                    <span>
                                        <img src="https://static-00.iconduck.com/assets.00/react-icon-512x512-u6e60ayf.png" alt="" className="logos" />
                                    </span>
                                    React.Js
                                </span>
                                <span className='data-bubble'>
                                    <span>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmw5uQYOHj5lRPNum_qXUzje-7HQDNUKxJig&s" alt="" className="logos" />
                                    </span>
                                    Node.Js
                                </span>
                                <span className='data-bubble'>
                                    <span>
                                        <img src="https://thumbs.dreamstime.com/b/html-css-js-icon-set-web-development-logo-icon-set-html-css-javascript-programming-symbol-html-css-js-icon-set-web-178080904.jpg" alt="" className="logos" />
                                    </span>
                                    HTML, CSS, Js
                                </span>
                            </div>


                            {/* <div className="seperator">
                                <div className="tech-title">Mobile</div>
                                <div className="border-line"></div>
                            </div> */}
                            <div className="tag">
                                <span className='data-bubble'>
                                    <span>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQij9uDL_BAEPp_gqSI8ug_CJCjLdyw4oLDUw&s" alt="" className="logos" />
                                    </span>
                                    React Native
                                </span>
                                <span className='data-bubble'>
                                    <span>
                                        <img src="https://cdn.prod.website-files.com/5ee12d8d7f840543bde883de/5ef3a1148ac97166a06253c1_flutter-logo-white-inset.svg" alt="" className="logos" />
                                    </span>
                                    Flutter
                                </span>
                            </div>


                            {/* <div className="seperator">
                                <div className="tech-title">Languages I've worked with</div>
                                <div className="border-line"></div>
                            </div> */}
                            <div className="tag">
                                <div className="data-bubble">
                                    <span>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png" alt="" className="logos" />
                                    </span>
                                    JavaScript
                                </div>
                                <div className="data-bubble">
                                    <span>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX9KYoFpX9v-HF45IjK17OC4jhT19I55y0Fw&s" alt="" className="logos" />
                                    </span>
                                    Python
                                </div>
                                <div className="data-bubble">
                                    <span>
                                        <img src="
                                        https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLUqVsC42zgrIqA2-jtTXYsKk-1Ug2i8nxcA&s" alt="" className="logos" />
                                    </span>
                                    GoLang
                                </div>
                                <div className="data-bubble">
                                    <span>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png" alt="" className="logos" />
                                    </span>
                                    C / C++
                                </div>

                                <div className="data-bubble">
                                    <span>
                                        <img src="https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png" alt="" className="logos" />
                                    </span>
                                    Firebase
                                </div>
                            </div>
                        </div>



                        <div className="half-container g2">
                            <div className='card-title'>Tools</div>
                            <div className="tag">
                                <div className="data-bubble">
                                    <span>
                                        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" className="logos" />
                                    </span>
                                    GitHub
                                </div>
                                <div className="data-bubble">
                                    <span>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1024px-Visual_Studio_Code_1.35_icon.svg.png" alt="" className="logos" />
                                    </span>
                                    VS Code
                                </div>
                                <div className="data-bubble">
                                    <span>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtw4mcx0jNF7uREt7cC1nmb2bGzErmrz0smw&s" alt="" className="logos" />
                                    </span>
                                    Android Studio
                                </div>
                            </div>

                            <div className="tag">
                                <div className="data-bubble">
                                    <span>
                                        <img src="https://static.vecteezy.com/system/resources/previews/021/059/827/non_2x/chatgpt-logo-chat-gpt-icon-on-white-background-free-vector.jpg" alt="" className="logos" />
                                    </span>
                                    ChatGPT
                                </div>
                            </div>
                            <div className="tag">

                                <div className="data-bubble">
                                    <span>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ55Y8wsPygSifBi3WJ9x_Bz26JygRwkJtVMw&s" alt="" className="logos" />
                                    </span>
                                    Unity 3D
                                </div>

                                <div className="data-bubble">
                                    <span>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/2503px-Blender_logo_no_text.svg.png" alt="" className="logos" />
                                    </span>
                                    Blender
                                </div>


                            </div>

                        </div>

                        <div className="half-container g3">
                            <div className='card-title'>Projects</div>
                            <div className="tag">
                                <span className='data-bubble'>Chat App</span>
                                <span className='data-bubble'>E-Commerce App</span>
                                <span className='data-bubble'>Bots</span>
                                <Link id='link-projects' to="/projects">
                                    <span className='data-bubble'>View More <i class="fa fa-arrow-right" aria-hidden="true"></i></span>
                                </Link>
                            </div>
                        </div>
                    </div >
                </div >

            </>
        )
    }
}
