import React from "react";
import Grid from '@material-ui/core/Grid';

function Selene() {
  return (
    <div>
      <Grid container direction="column" justify="center" alignItems="center">
        <h1 className="ind-proj-head">Selene</h1>
        <br />
        <Grid item className="ind-proj">
          <div className="proj-desc-div">
            <h4 className="proj-desc">
              Selene is a self-care centered beauty products ecommerce website.
            </h4>
            <br />
            <p className="proj-stats">
              {" "}
              5 day sprint to build out full stack application from the ground
              up
              <br />
              Built ecommerce functionality with Django cart
              <br />
              Built robust UI/UX and complex functionality with Django and CSS
              <br />
              Set up authentication for secure user experience
            </p>
            <br />
            <h3 className="tech-head">Teachnolgoies Used</h3>
            <p>Django | Python | CSS | HTML | PostgresSQL</p>
            <hr />
            <a className="code-view" href="https://seleneshop.herokuapp.com/">
              View Live Demo
            </a>
            <a className="code-view" href="https://github.com/BrownMY/Selene">
              View Code
            </a>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Selene;
