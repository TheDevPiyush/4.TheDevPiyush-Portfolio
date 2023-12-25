import React, { Component } from 'react'
import HomePage from './screens/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import AboutPage from './screens/AboutPage'
import ContactPage from './screens/ContactPage'
import ProjectPage from './screens/ProjectPage'

export default class App extends Component {
    render() {
        return (
            <>

                <div className="box" style={{ display: "flex", justifyContent: "flex-start", width: "100vw" }}>

                    <BrowserRouter>
                        <Navbar />
                        <Routes>
                            <Route exact path="/" element={<HomePage />} />
                            <Route exact path="/home" element={<HomePage />} />
                            <Route exact path="/about" element={<AboutPage />} />
                            <Route exact path="/projects" element={<ProjectPage/>} />
                            <Route exact path="/contact" element={<ContactPage />} />
                        </Routes>
                    </BrowserRouter>
                </div>

                {/* <h2>
                    Hello Bro
                </h2> */}

            </>
        )
    }
}
