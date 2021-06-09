import React from 'react';
import { Link } from "react-router-dom";
import {BrowserRouter as Router} from 'react-router-dom';
import Works from '../Works/Works';
import Resume from '../Resume/Resume';
import Contact from '../Contact/Contact';
import About from "../About/About";

function Head() {
    return (
        <div className="head">
            <div className="nav">
                <Router>
                <Link to={"/Head"}>
                    <button className="nav-btn" >Home</button>
                </Link>
                
                <Link to={"/About"}>
                    <button className="nav-btn">About</button>
                </Link>
                
                <Link to={"/Resume"}>
                    <button className="nav-btn" >Resume</button>
                </Link>
                
                <Link to={"/Works"}>
                    <button className="nav-btn">Works</button>
                </Link>
                
                <Link to={"/Contact"}>
                    <button className="nav-btn" >Contact</button>
                </Link>
                </Router>
                
            </div>
            <h2 className="title">HAJA ASHIK S</h2>
            <h4 className="sub">Full Stack Mobile App Developer.</h4>
            <div className="desc">
                I have spent enough time on App development as well as Web development and it seems like my interest on these keep on increasing. I'm fond of using flutter framework for my mobile applications as it feels really interesting for me.
            </div>
            <i ><h3 className="tag">“Tech will transform from something we actively use to a more seamless integrated experience that is ‘on’ all the time.”</h3></i>
        </div>
    )
}

export default Head;
