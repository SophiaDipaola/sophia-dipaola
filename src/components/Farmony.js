import React from 'react'

function Farmony() {
    return (
        <div>
        <h1 className="ind-proj-head">Farmony</h1><br />
        <div className="ind-proj">
            
            <div className="proj-desc-div">
            <h4 className="proj-desc">Farmony is a social media website for promoting accessibility to affordable health foods for low income families through community cultivation and providing a virtual farmers market.</h4><br />
            <p className="proj-stats">
            Eleven day sprint to build out full MERN application from the ground up
            <br />
            Created API, used MongoDB to store user and urban garden information
            <br />
            Built robust UI/UX and complex functionality with React and CSS
            <br />
            Set up authentication for secure user experience</p>
            <br />
            <h3 className="tech-head">Teachnolgoies Used</h3>
            <p>React.js | HTML | CSS | MongoDB</p>
            <hr />
            <a className="code-view" href="https://farmony-2.herokuapp.com/">View Live Demo</a>
            <a className="code-view" href="https://github.com/SophiaDipaola/Farmony-frontend">View Front-End Code</a>
            <a className="code-view" href="https://github.com/SophiaDipaola/Farmony-backend">View Back-End Code</a>
            
            </div>
            <div className="proj-img-div">
            <img className="proj-img" src="https://i.imgur.com/wHKJagx.png" alt="farmony-homepage" />
            {/* <img className="proj-img" src="https://i.imgur.com/t5BZJYt.png" alt="farmony-gardenlist" />
            <img className="proj-img" src="https://i.imgur.com/MugP5jj.png" alt="farmony-profile" />
            <img className="proj-img" src="https://i.imgur.com/k0JOJwq.png" alt="farmony-buyboard" />
            <img className="proj-img" src="https://i.imgur.com/dw8vRTJ.png" alt="farmony-team" /> */}
            </div>
        </div>
        </div>
    )
}

export default Farmony
