import React, { Component } from 'react'

export default class AboutPage extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        document.title = "TheDevPiyush - About"

        return (
            <>
                <div className="parent">
                    <div className="heading">
                        <div className="heading-curve">
                            <div className="title">
                                About
                            </div>
                            <div className="subtitle">
                                This is about me, the technologies I work on, the experience I have and my expectations.
                            </div>

                        </div>

                    </div>

                    <div className="welcomeText">
                        Welcome to my portfolio! I'm a passionate developer with a diverse skill set and a deep love for crafting digital experiences. With a journey spanning from Python to Flutter, I've honed my skills over the years to become proficient in various technologies. Let me take you through a glimpse of my journey:
                    </div>

                    <div className="brief-curve">
                        <div className="techTitle">Experience in Crafting Digital Solutions</div>
                        <div className="techDetails">
                            <div className="detailCard">
                                <div className="big">Python (4 years):</div>
                                My journey into the realm of programming began with Python. Over the past two years, I've delved into its versatility, leveraging its power for backend development, data analysis, and automation tasks. Python's clean syntax and vast ecosystem have enabled me to build robust solutions efficiently.
                            </div>

                            <div className="line"></div>

                            <div className="detailCard">
                                <div className="big">HTML/CSS/JavaScript (5 years):</div>
                                As I ventured into web development, mastering the trio of HTML, CSS, and JavaScript became paramount. Over three years, I've crafted responsive and visually appealing websites, ensuring seamless user experiences across devices. From laying the foundation with HTML to styling with CSS and adding interactivity with JavaScript, I've enjoyed every step of the journey.
                            </div>

                            <div className="line"></div>

                            <div className="detailCard">
                                <div className="big">React.js (4 years):</div>
                                My passion for web development led me to React.js, a library that revolutionized the way I build user interfaces. Over the past four years, I've immersed myself in React's component-based architecture, state management paradigms, and virtual DOM. From single-page applications to complex web interfaces, React.js has been my go-to choice for frontend development.
                            </div>

                            <div className="line"></div>

                            <div className="detailCard">
                                <div className="big">React Native (3 years):</div>
                                With mobile applications becoming increasingly prevalent, I ventured into React Native to extend my expertise to the realm of cross-platform mobile development. Over the past three years, I've leveraged React Native's declarative syntax and reusable components to build high-performance mobile apps for iOS and Android platforms. It's been an exciting journey, bridging the gap between web and mobile development seamlessly.

                            </div>
                            <div className="line"></div>

                            <div className="detailCard">
                                <div className="big">Flutter (2 years):</div>
                                Flutter caught my attention with its promise of building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase. Over the past two years, I've dived into Flutter, embracing its widget-based architecture and hot reload functionality. Flutter's fast development cycles and expressive UI components have empowered me to create stunning applications across multiple platforms.
                            </div>
                            <div className="line"></div>

                        </div>
                    </div>
                    <div className="detailCard space">
                        <div className="big">Current Focus: React.js and Web Development (5 years):</div>
                        With five years of dedicated experience, my current focus revolves around mastering React.js and advancing my expertise in web development. This journey has been defined by a commitment to creating seamless user experiences and architecting robust web applications. Continuously exploring new methodologies and technologies, I strive to push the boundaries of what's achievable in the dynamic realm of web development.
                    </div>

                </div>

            </>
        )
    }
}
