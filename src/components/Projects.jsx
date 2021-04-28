import React from "react";
import Grid from "@material-ui/core/Grid";


const Projects = () => {
  return (
    <div>
      <Grid
        container
        justify="center"
        alignItems="center"
        className="proj-container"
      >
        <Grid item md={12}>
          <h1 className="ind-proj-head">Projects</h1>
        </Grid>

        <Grid item md={6} sm={12} className="img-hover-zoom--brightness">
          <a href="/selene">
            {/* <div class="left-ind" id="selene">
              <p class="p-tag">Selene</p> */}
              <img
                class="img-home"
                src="https://i.imgur.com/SqoDhkg.png"
                alt="selene-homepage"
              />
            {/* </div> */}
          </a>
        </Grid>

        <Grid item md={6} sm={12} className="img-hover-zoom--brightness">
          <a href="/farmony">
            {/* <div class="left-ind" id="farmony">
              <p class="p-tag">Farmony</p> */}
              <img
                class="img-home"
                src="https://i.imgur.com/wHKJagx.png"
                alt="farmony-homepage"
              />
            {/* </div> */}
          </a>
        </Grid>

        <Grid item md={6} sm={12} className="img-hover-zoom--brightness">
          <a href="/lavender">
            {/* <div class="left-ind" id="lavender">
              <p class="p-tag">Lavender Recovery</p>  */}
               <img
                class="img-home"
                src="https://i.imgur.com/PeWSamq.png"
                alt="lavender-homepage"
              />
            {/* </div> */}
          </a>
        </Grid>

        <Grid item md={6} sm={12} className="img-hover-zoom--brightness">
          <a href="/mindwholeness">
            {/* <div class="left-ind" id="mindwholeness">
              <p class="p-tag">The MindWholeness Podcast</p> */}
              <img
                class="img-home"
                src="https://i.imgur.com/7xybxnL.jpg"
                alt="mind-homepage"
              />
            {/* </div> */}
          </a>
        </Grid>
      </Grid>


    </div>
  );
};

export default Projects;
