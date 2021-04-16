import React from 'react';

const About = () => {
    return (
        <div className="about-div">

<div className="bio-pic">
                <img className="pic" src="https://i.imgur.com/CgYedfh.jpg" alt="" />
            </div>
            
             <div className="about">
                <h2 className="about-head">
                Hello! I am Sophia!
                </h2>
            <p className="about-p">
                <b>With a background in the arts, I have always been fascianted with the process of creating something out of nothing.<br/> There is nothing more magical than seeing the direct manifestation of an idea come to life. <br/>
                I'm a front-end engineer with strength in React, CSS, Javascript, Django, and MongoDB.<br/>
I contribute a unique perspective due to my capacity to easily access creativity and logic.<br/>
I feel comfortable with my innate ability of being both big vision and detail oriented.<br/>
 bring passion, lateral thinking and a knack for creation to the table.</b>
 </p>
            <br/>
            <h2 className="tech-head">Technical Skills</h2>
            <p className="tech"><b>JavaScript | HTML | CSS | React.js | Python<br/>
            EJS | Node.js | Express.js | Django | PostgreSQL <br/>Sequelize | ORM | MongoDB | REST APIs | pymongo | Square Space, Git Hub</b></p>
            </div>

          
        </div>
    );
}

export default About;
