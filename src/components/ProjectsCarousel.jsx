
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ProjectsCarousel = () => {
    
        return (
            <div className="caro">
            <Carousel>
                <div>
                    <img className="port-img" src="https://i.imgur.com/wHKJagx.png" alt="farmony-home"/>
                    <a href="http://sophia-dipaola.herokuapp.com/farmony" className="legend">Learn more about Farmony</a>
                </div>
                <div>
                    <img className="port-img" src="https://i.imgur.com/SqoDhkg.pngg" alt="selene-home"/>
                    <a href="http://sophia-dipaola.herokuapp.com/selene" className="legend">Learn more about Selene</a>
                </div>
                <div>
                    <img className="port-img" src="https://i.imgur.com/7xybxnL.jpg" alt="mindwholeness-home"/>
                    <a href="http://sophia-dipaola.herokuapp.com/mindwholeness" className="legend">Learn more about The MindWholeness Podcast</a>
                </div>
                <div>
                    <img className="port-img" src="https://i.imgur.com/PeWSamq.png" alt="lavender-recovery-home" />
                    <a href="http://sophia-dipaola.herokuapp.com/lavender" className="legend">Learn more about Lavender Recovery</a>
                </div>
            </Carousel>
            </div>
        );
        }
    



export default ProjectsCarousel;