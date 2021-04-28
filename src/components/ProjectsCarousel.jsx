import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ProjectsCarousel = () => {
    
        return (
            <div className="caro">
            <Carousel>
                <div>
                    <img className="port-img" src="https://i.imgur.com/wHKJagx.png" />
                    <a href="/farmony" className="legend">Learn more about Farmony</a>
                </div>
                <div>
                    <img className="port-img" src="https://i.imgur.com/SqoDhkg.pngg" />
                    <a href="/selene" className="legend">Learn more about Selene</a>
                </div>
                <div>
                    <img className="port-img" src="https://i.imgur.com/7xybxnL.jpg" />
                    <a href="/mindwholeness" className="legend">Learn more about The MindWholeness Podcast</a>
                </div>
                <div>
                    <img className="port-img" src="https://i.imgur.com/PeWSamq.png" />
                    <a href="/lavender" className="legend">Learn more about Lavender Recovery</a>
                </div>
            </Carousel>
            </div>
        );
        }
    



export default ProjectsCarousel;