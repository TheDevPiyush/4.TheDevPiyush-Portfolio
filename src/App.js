import React, { Component } from 'react'
import HomePage from './screens/HomePage'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import AboutPage from './screens/AboutPage'
import ContactPage from './screens/ContactPage'
import ProjectPage from './screens/ProjectPage'
import './App.css'
import Error404 from './screens/Error404'
import NotificationPage from './screens/NotificationPage'
export default class App extends Component {

    render() {
        return (
            <>

                <BrowserRouter>
                    <div className="same">

                        <div className="box">
                            <div className="navbar">
                                <Navbar />
                            </div>
                            <div className="pages">
                                <Routes>
                                    <Route exact path="/" element={<HomePage />} />
                                    <Route path="/home" element={<Navigate replace to="/"/>} />
                                    <Route exact path="/about" element={<AboutPage />} />
                                    <Route exact path="/projects" element={<ProjectPage />} />
                                    <Route exact path="/contact" element={<ContactPage />} />
                                    <Route exact path="/notification" element={<NotificationPage />} />
                                    <Route exact path='*' element={<Error404 />} />
                                </Routes>
                            </div>
                        </div >
                    </div>

                </BrowserRouter>

            </>
        )
    }
}
