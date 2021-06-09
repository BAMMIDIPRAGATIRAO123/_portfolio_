import React from 'react'

function Resume() {
    return (
        <div className="resume">
            <h4>EDUCATION</h4>
            <div className="resume-pic1"></div>
            <div className="data">
                <h5 className="institute">Sri Sairam College of Engineering Bangalore</h5>
                <h6><i>Computer Science Engineering (2023)</i></h6>
                <h6>HAB59 2020 National level hackathon 2nd position winner with app #INCLUDE and team sudo-s.</h6>
                <h6>Innovathon 2K21 Hackathon by SSCE 2nd position with Team-Zee and project G-Quiz.</h6>
                <hr></hr>
            </div>
            <div className="resume-pic2"></div>
            <div className="data">
                <h5 className="institute">St.Francis Pre Unniversity College Bangalore</h5>
                <h6><i>Mathematics and Computer Science (2019)</i></h6>
                <h6>C programming, 2nd position winner of football tournament.</h6>
            </div>
            <h5 className="institute1">SKILLS</h5>
            <div className="skill">
                <button className="skillset">App Development</button>
                <button className="skillset">Flutter</button>
                <button className="skillset">SQL</button>
                <button className="skillset">C++</button>
                <button className="skillset">Python</button>
            </div>
        </div>
    )
}

export default Resume
