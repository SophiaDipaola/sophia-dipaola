import React from 'react'

function Lavender() {
    return (
        <div>
           <h1 className="ind-proj-head">Lavender Recovery</h1><br />
           <div className="ind-proj">
           <div className="proj-desc-div">
            <p className="proj-desc"><b>Lavender Recovery is a social media website that creates an empowering, supportive, safe space committed to raising the voices of queer recovering addicts and alcoholics.</b></p><br />
<p className="proj-stats">Five day sprint to build out full Express application from the ground up
<br />
Used EJS and CSS to produce styled, full functionality
<br />
Used PostgreSQL to store all user data<br />
Set up authentication for secure user experience</p>
<br />
            <h3>Teachnolgoies Used</h3>
            <p>Express | EJS | HTML | CSS | PostgreSQL | Node.js</p>
            <hr />
            <a className="code-view" href="https://lavender-recovery.herokuapp.com/">View Live Demo</a>
            <a className="code-view" href="https://github.com/SophiaDipaola/Lavender-Recovery">View Code</a>
            </div>
            <div className="proj-img-div">
           <img className="proj-img"  src="https://i.imgur.com/PeWSamq.png" alt="lavender-homepage"/>
           {/* <img className="proj-img" src="https://i.imgur.com/ClsZRAC.jpg" alt="lavender-profile"/>
           <img className="proj-img" src="https://i.imgur.com/gi3aSnf.jpg" alt="lavender-newpost"/> */}
           </div>
        </div>
        </div>
    )
}

export default Lavender
