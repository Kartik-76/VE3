import "../css/Main.css";


import backgroundImg from "../assets/background.jpg";

import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    <div className="home">
        <div className="mask">
            <img src={backgroundImg} alt="VE3" className="background-img" />
        </div>
        <div className="content">
            <h1>VE3 Assessment</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure quos est commodi quasi explicabo, deserunt voluptatum!</p>
            <div>
                <Link to="/modules" className="btn btn-outline-primary">Enter</Link>
            </div>
        </div>

    </div>
    </>
  )
}

export default Home