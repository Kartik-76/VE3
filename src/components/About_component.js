import "../css/Main.css";


import backgroundImg from "../assets/background.jpg";

import React from 'react'
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
    <div className="home">
        <div className="mask">
            <img src={backgroundImg} alt="VE3" className="background-img" />
        </div>
        <div className="content">
            <h1>Kartik Gandhi</h1>
            <p>MERN Stack Developer | Blockchain Enthusiasts</p>
            <div>
            <div className="d-flex justify-content-evenly">
            <Link  to="https://www.linkedin.com/in/kartik-gandhi-311b18216/" target="_blank" className="btn btn-outline-primary">Linkedin</Link>
            <Link to="https://github.com/Kartik-76" target="_blank" className="btn btn-outline-primary">Github</Link>
            <Link to="https://drive.google.com/uc?export=download&id=12tYEJLghqmvQD4Tjhsf2RZ5RBr3VZiR6" className="btn btn-outline-primary">Know More About ME</Link>
            
            </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default About