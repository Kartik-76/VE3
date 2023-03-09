import React,  {useEffect} from 'react'
import "../css/Navbar.css"
import { Link, useLocation } from 'react-router-dom'
const Navbar = () => {
  let location = useLocation();
  useEffect(()=>{
    console.log(location?.pathname);
  },[location]);
  return (
    <>
    

        
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link  className="navbar-brand" to="/">VE3</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link   className={`nav-link ${location.pathname==="/"?"active": ""}`}  to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link  className={`nav-link ${location.pathname==="/modules"?"active": ""}`} to="/modules">Modules</Link>
        </li>
        <li className="nav-item">
          <Link  className={`nav-link ${location.pathname==="/about"?"active": ""}`} to="/about">About</Link>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>

    
    </>
  )
}

export default Navbar