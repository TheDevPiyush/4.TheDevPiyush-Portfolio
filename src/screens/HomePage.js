import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DataBubble from '../components/DataBubble.js';
import '../Styles/HomePage.css';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstLoad: false
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.setState({ firstLoad: true });
    }

    render() {
        document.title = "TheDevPiyush - Portfolio";

        const techStack = [
            {
                imgSrc: 'https://seeklogo.com/images/E/ethereum-logo-EC6CDBA45B-seeklogo.com.png',
                label: 'BlockChain Dev'
            },
            {
                imgSrc: 'https://static-00.iconduck.com/assets.00/react-icon-512x512-u6e60ayf.png',
                label: 'MERN Stack'
            },
            {
                imgSrc: 'https://static-00.iconduck.com/assets.00/nextjs-icon-2048x2048-x6n5t31i.png',
                label: 'Next.Js'
            },

            {
                imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQij9uDL_BAEPp_gqSI8ug_CJCjLdyw4oLDUw&s',
                label: 'React Native'
            },
        ];

        const tools = [
            {
                imgSrc: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
                label: 'GitHub'
            },
            {
                imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF_T_PXm3ME7rJ4IexW1TiQLLZi4Fc7WoomQ&s',
                label: 'IDEs'
            },            {
                imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ55Y8wsPygSifBi3WJ9x_Bz26JygRwkJtVMw&s',
                label: 'Unity 3D'
            },
            {
                imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/2503px-Blender_logo_no_text.svg.png',
                label: 'Blender'
            }
        ];

        const projects = [
            { label: 'Chat App' },
            { label: 'E-Commerce App' },
            { label: 'Bots' }
        ];

        return (
            <div className="parent">
                <div className="heading">
                    <div className="heading-curve">
                        <div className="title">
                            <h1>TheDevPiyush</h1>
                        </div>
                        <div className="subtitle">
                            <h2>Hello, I'm Piyush, I'm a Full Stack Web & Mobile Developer.</h2>
                        </div>
                    </div>
                </div>

                <div className="my-brief">
                    <ul>
                        <li className="mybrief-list">
                            I'm from Patna, India &nbsp;
                            <i className="fa fa-location-dot" aria-hidden="true"></i>
                        </li>
                        <li className="mybrief-list">
                            Currently in College pursuing degree in Computer Science.&nbsp;
                            <i className="fa fa-sticky-note" aria-hidden="true"></i>
                        </li>
                        <li className="mybrief-list">
                            Working and learning by developing personal projects.&nbsp;
                            <i className="fa fa-wrench" aria-hidden="true"></i>
                        </li>
                        <div style={{ border: '2px solid lightgrey', opacity: '0.1', width: '100%' }}></div>

                        <li className="mybrief-list">
                            Currently Intern as a Fullstack and BlockChain Dev at <a href="https://5ire.org" target='_blank' rel='noreferrer'>@5ireChain.</a>&nbsp;
                            <i className="fa fa-laptop" aria-hidden="true"></i>
                        </li>
                    </ul>
                </div>

                <div className="rowHome">
                    <div className="half-container g1">
                        <div className="card-title">Tech Stacks</div>
                        <div className="tag">
                            {techStack.map((item, index) => (
                                <DataBubble key={index} imgSrc={item.imgSrc} label={item.label} />
                            ))}
                        </div>
                    </div>

                    <div className="half-container g2">
                        <div className="card-title">Tools</div>
                        <div className="tag">
                            {tools.map((item, index) => (
                                <DataBubble key={index} imgSrc={item.imgSrc} label={item.label} />
                            ))}
                        </div>
                    </div>

                    {/* <div className="half-container g3">
                        <div className="card-title">Projects</div>
                        <div className="tag">
                            {projects.map((project, index) => (
                                <span key={index} className="data-bubble">
                                    {project.label}
                                </span>
                            ))}
                            <Link id="link-projects" to="/projects">
                                <span className="data-bubble">
                                    View More <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                </span>
                            </Link>
                        </div>
                    </div> */}
                </div>
            </div>
        );
    }
}
