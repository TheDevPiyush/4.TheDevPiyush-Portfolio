import React, { Component } from 'react'
import '../Styles/Navbar.css'
import { BrowserRouter, Link } from 'react-router-dom'
export default class Navbar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            selected: "home"
        }
    }
    componentDidMount(){
        this.selectedFunc("home");
    }
    selectedFunc = (a) => {
        document.getElementById("home").classList.remove("selected")
        document.getElementById("about").classList.remove("selected")
        document.getElementById("projects").classList.remove("selected")
        document.getElementById("contact").classList.remove("selected")
        document.getElementById(a).classList.add("selected")

    }
    render() {
        return (
            <>
                <div className="mainContainer">

                    <div className="iconContainer">

                        <div className="themesContainer">
                            <i className="fas fa-moon icons"></i>
                        </div>

                        <Link to="/">
                            <i id='home' onClick={
                                () => { this.selectedFunc("home") }} className="fa-solid fa-house icons home"></i>
                        </Link>
                        <Link to='/about'>
                            <i id='about' onClick={
                                () => { this.selectedFunc("about") }} className="fa-regular fa-id-card icons about"></i>
                        </Link>
                        <Link to='/projects'>
                            <i id='projects' onClick={
                                () => { this.selectedFunc("projects") }} className="fa fa-puzzle-piece icons projects" aria-hidden="true"></i>
                        </Link>

                        <Link to="/contact">
                            <i id='contact' onClick={
                                () => { this.selectedFunc("contact") }} className="fa-solid fa-comments icons contact"></i>
                        </Link>
                    </div>

                </div>
            </>
        )
    }
}
