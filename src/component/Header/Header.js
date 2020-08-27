import React from 'react';
import logo  from '../../image/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className="header  container-fluid">
        <img src={logo} alt=""/>
            

 <nav className="navbar navbar-expand-lg  navbar-dark bg-dark"> 

  <a className="navbar-brand" href="#">Online Course</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Course
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/Design"> Design</a>
          <a className="dropdown-item" href="/Development">Development</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="/Marketing"> Marketing</a>
          <a className="dropdown-item" href="/Photography"> Photography</a>
        </div>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
         <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
     </form>
      </div>
      </nav>
  </div>
    );
};

export default Header;