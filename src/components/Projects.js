import React from 'react';

const Projects = () => {
    return (
        <div>
            <div className="proj-container">
                <h1 className="ind-proj-head">Projects</h1>

                <div className="img-home-div">
                    <a href="/selene">
                        <div class="left-ind" id="selene">
                            <p class="p-tag">Selene</p>
                            <img class="img-home" src="https://i.imgur.com/SqoDhkg.png" alt="selene-homepage" />
                        </div>
                    </a>
                </div>



                <div className="img-home-div">
                    <a href="/farmony">
                        <div class="left-ind" id="farmony">
                            <p class="p-tag">Farmony</p>
                            <img class="img-home" src="https://i.imgur.com/wHKJagx.png" alt="farmony-homepage" />
                        </div>
                    </a>
                </div>
                <div className="img-home-div">
                    <a href="/lavender">
                        <div class="left-ind" id="lavender">
                            <p class="p-tag">Lavender Recovery</p>
                            <img class="img-home" src="https://i.imgur.com/PeWSamq.png" alt="lavender-homepage" />
                        </div>
                    </a>
                </div>



                <div className="img-home-div">
                    <a href="/mindwholeness">
                        <div class="left-ind" id="mindwholeness">
                            <p class="p-tag">The MindWholeness Podcast</p>
                            <img class="img-home" src="https://i.imgur.com/7xybxnL.jpg" alt="mind-homepage" />
                        </div>
                    </a>
                </div>




            </div>
        </div>
    );
}

export default Projects;
