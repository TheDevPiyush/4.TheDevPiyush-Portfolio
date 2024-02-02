import React, { Component } from 'react'
import '../Styles/HomePage.css'

export default class HomePage extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        document.title = "TheDevPiyush Home"

        return (
            <>
                <div className="parent">
                    <div className="heading">
                        <div className="heading-curve">
                            <div className="title">
                                Welcome to TheDevPiyush
                            </div>
                            <div className="subtitle">
                                Hello visitor, I'm Piyush, I'm a computer science student,
                                <br />
                                and a ReactJs Web developer as well.
                            </div>

                        </div>

                    </div>
                    <div className="brief-curve">
                        <div className="techTitle">Technologies I work with</div>
                        <div className="techDetails">
                            <div className="detailCard">
                                <div className="big">Python</div>
                                Harnessing the power of Python, I build robust and scalable applications. From web development to data analysis, Python is my go-to language for its versatility and readability.
                            </div>

                            <div className="line"></div>

                            <div className="detailCard">
                                <div className="big">HTML, CSS, Js</div>
                                Proficient in the trifecta of web development, I create captivating and responsive user interfaces. HTML structures, CSS styles, and JavaScript functionality work harmoniously to deliver seamless user experiences.
                            </div>

                            <div className="line"></div>

                            <div className="detailCard">
                                <div className="big">ReactJS</div>
                                Elevating web development with ReactJS, I develop dynamic and interactive user interfaces. React's component-based architecture allows for modular, reusable code, resulting in efficient and maintainable applications.
                            </div>

                            <div className="line"></div>

                            <div className="detailCard">
                                <div className="big">React Native</div>
                                Extending my expertise to mobile app development, I leverage React Native to create cross-platform applications. This framework enables me to deliver native-like experiences on both iOS and Android platforms, saving time and resources.

                            </div>
                            <div className="line"></div>

                            <div className="detailCard">
                                <div className="big">Flutter</div>
                                Embracing the power of Dart and Flutter, I craft visually stunning and high-performance mobile applications. Flutter's single codebase for iOS and Android ensures a consistent and delightful user experience across devices.
                            </div>
                        </div>

                    </div>

                    <div className="upper">
                        <div className="exitCurve">
                            To know more about my projects, Please Visit my Projects section, It has some of my best projects.
                        </div>
                    </div >
                </div>

            </>
        )
    }
}
