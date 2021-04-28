import React from 'react'
import Grid from '@material-ui/core/Grid';

function Lavender() {
    return (
        <div>
            <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
           <h1 className="ind-proj-head">Lavender Recovery</h1><br />
           <Grid item className="ind-proj">
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
           
        
        </Grid>
        </Grid>
        </div>
    )
}

export default Lavender
