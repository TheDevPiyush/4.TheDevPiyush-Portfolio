import React, { useEffect, useState } from 'react';

const AboutPage = () => {
    const [currentYear] = useState(new Date().getFullYear());
    const [pythonStartYear] = useState(2019);
    const [htmlCssJsStartYear] = useState(2019);
    const [reactJsStartYear] = useState(2020);
    const [reactNativeStartYear] = useState(2022);


    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "TheDevPiyush - About";
    }, []);

    return (
        <>
            <div className="parent">
                <div className="heading">
                    <div className="heading-curve">
                        <div className="title">
                            <h1>About</h1>
                        </div>
                        <div className="subtitle">
                            <h2>This is about me, the technologies I work on, the experience I have and my goals.</h2>
                        </div>
                    </div>
                </div>

                <div className="welcomeText">
                    Welcome to my portfolio! I'm a passionate developer with a diverse skill set and a deep love for crafting digital experiences. From Python to React.js, I've honed my skills over the years to become proficient in various technologies. Let me take you through a glimpse of my journey:
                </div>

                <div className="brief-curve">
                    <div className="techTitle">Experience in Crafting Digital Solutions</div>
                    <div className="techDetails">
                        <div className="detailCard">
                            <div className="big">Python ({currentYear - pythonStartYear} years):</div>
                            <ul>
                                <li>Started programming journey with Python.</li>
                                <li>Versatility used for backend dev, data analysis, and automation.</li>
                                <li>Clean syntax and vast ecosystem enabled efficient solution building.</li>
                            </ul>
                        </div>

                        <div className="line"></div>

                        <div className="detailCard">
                            <div className="big">HTML/CSS/JavaScript ({currentYear - htmlCssJsStartYear} years):</div>
                            <ul>
                                <li>Mastery in web development trio: HTML, CSS, and JavaScript.</li>
                                <li>Crafted responsive and visually appealing websites.</li>
                                <li>Ensured seamless user experiences across devices.</li>
                            </ul>
                        </div>

                        <div className="line"></div>

                        <div className="detailCard">
                            <div className="big">React.js ({currentYear - reactJsStartYear} years):</div>
                            <ul>
                                <li>Immersed in React's component-based architecture.</li>
                                <li>Proficient in state management paradigms and virtual DOM.</li>
                                <li>Go-to choice for frontend development, from SPAs to complex interfaces.</li>
                            </ul>
                        </div>

                        <div className="line"></div>

                        <div className="detailCard">
                            <div className="big">React Native ({currentYear - reactNativeStartYear} years):</div>
                            <ul>
                                <li>Extended expertise to cross-platform mobile development.</li>
                                <li>Built high-performance mobile apps for iOS and Android.</li>
                                <li>Leveraged React Native's declarative syntax and reusable components.</li>
                            </ul>
                        </div>
                        <div className="line"></div>
                    </div>
                </div>
                <div className="detailCard space">
                    <div className="big">Current Focus: React.js and Web Development ({currentYear - reactJsStartYear} years):</div>
                    <ul>
                        <li>Mastering React.js for {currentYear - reactJsStartYear} years, focusing on web development.</li>
                        <li>Commitment to creating seamless user experiences and robust web apps.</li>
                        <li>Continuously exploring new methodologies and technologies.</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default AboutPage;
