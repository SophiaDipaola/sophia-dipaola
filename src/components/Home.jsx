import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import Media from './Media'



const Home = () => {
    
    return (
        <div className="home-page">
            
                <div className="home-head">
                <h1 className="name">Sophia Di Paola</h1>
                <h5 className="front">Front-End Developer</h5>
                </div>
                
           
            
            <div className="menu">
                <div className="label"><b>Get in touch!</b></div>
                <div className="spacer"></div>
                <div className="item"><span><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/sophiadipaola"><LinkedInIcon /></a></span></div>
                <div className="item"><span><a target="_blank" rel="noreferrer" href="https://github.com/SophiaDipaola"><GitHubIcon /></a></span></div>
                <div className="item"><span><a target="_blank" rel="noreferrer" href="mailto:sophiadipaola@gmail.com"><AlternateEmailIcon /></a></span></div>
            </div>
            
            
            
          
        </div >

    );
}

export default Home;
