import React from 'react';
import {FaGithub, FaPhone, FaLinkedin, FaInstagram} from 'react-icons/fa';

function Contact() {
    return (
        <div className="contacts">
            <h4>Contact Me Through</h4>
            <div className="iconset">
                <div className="icon"><FaInstagram/><br></br><div className="id">_.a.s.h.i.k._</div></div>
                
                <div className="icon"><FaGithub/><br></br><div className="id"><a href="https://github.com/Ashik1103">Github</a></div></div>
                
                <div className="icon"><FaLinkedin/><br></br><div className="id"><a href="https://www.linkedin.com/in/sce19cs046/">LinkedIn</a></div></div>
                
                <div className="icon"><FaPhone/><br></br><div className="id">9597642882</div></div>
                
            </div>
        </div>
    )
}

export default Contact
