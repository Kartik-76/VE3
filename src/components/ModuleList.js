import "../css/Main.css";


import backgroundImg from "../assets/background.jpg";

import React from 'react'
import { Link } from "react-router-dom";



const ModuleList = () => {
    
  return (
    
    
    
    <>
    <div className="home">
        <div className="mask">
            <img src={backgroundImg} alt="VE3" className="background-img" />
        </div>
        <div className="content">
            <h1>Modules</h1>
            
            <div >
                <Link to="/modules/module_one" className="btn btn-outline-primary d-flex p-2 my-3 ">Module 1</Link>
                <Link to="/modules/module_two" className="btn btn-outline-primary d-flex p-2 my-3">Module 2</Link>
                <Link to="/modules/module_three" className="btn btn-outline-primary d-flex p-2 my-3">Module 3</Link>
                <Link to="/modules/module_four" className="btn btn-outline-primary d-flex p-2 my-3">Module 4</Link>
                <Link to="/modules/module_five" className="btn btn-outline-primary d-flex p-2 my-3">Module 5</Link>
                
            </div>
        </div>

    </div>
    </>
    
    
  )
}

export default ModuleList