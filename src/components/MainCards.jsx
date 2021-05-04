import React from 'react';
import HoverVideoPlayer from 'react-hover-video-player';
import card1 from '../images/viewers-disney.png';
import card2 from '../images/viewers-marvel.png';
import card3 from '../images/viewers-pixar.png';
import card4 from '../images/viewers-starwars.png';
import card5 from '../images/viewers-national.png';
import vid1 from '../videos/1564674844-disney.mp4';
import vid2 from '../videos/1564676115-marvel.mp4';
import vid3 from '../videos/1564676714-pixar.mp4';
import vid4 from '../videos/1608229455-star-wars.mp4';
import vid5 from '../videos/1564676296-national-geographic.mp4';


const MainCards = () =>{
    return(
        <>
            <div className="row">
                <div className="col-lg-2 col-md-6">
                <div class="card main-card">
                    <HoverVideoPlayer
                    className='hovervideoplayer'
                    videoSrc={vid1}
                    overlayTransitionDuration={100000}
                    pausedOverlay={
                        <img src={card1} alt="" className='card-img-top'/>
                    }
                    loadingOverlay={
                        <div className="loading-spinner-overlay" >
                            Loading
                        </div>
                    }
                />
                </div>
                </div>

                <div className="col-lg-2 col-md-6">
                <div class="card main-card">
                    <HoverVideoPlayer
                    className='hovervideoplayer'
                    videoSrc={vid2}
                    overlayTransitionDuration={100000}
                    pausedOverlay={
                        <img src={card2} alt="" className='card-img-top'/>
                    }
                    loadingOverlay={
                        <div className="loading-spinner-overlay" >
                            Loading
                        </div>
                    }
                />
                </div>
                </div>
                <div className="col-lg-2 col-md-6">
                <div class="card main-card">
                    <HoverVideoPlayer
                    className='hovervideoplayer'
                    videoSrc={vid3}
                    overlayTransitionDuration={100000}
                    pausedOverlay={
                        <img src={card3} alt="" className='card-img-top'/>
                    }
                    loadingOverlay={
                        <div className="loading-spinner-overlay" >
                            Loading
                        </div>
                    }
                />
                </div>
                </div>
                <div className="col-lg-2 col-md-6">
                <div class="card main-card">
                    <HoverVideoPlayer
                    className='hovervideoplayer'
                    videoSrc={vid4}
                    overlayTransitionDuration={100000}
                    pausedOverlay={
                        <img src={card4} alt="" className='card-img-top'/>
                    }
                    loadingOverlay={
                        <div className="loading-spinner-overlay" >
                            Loading
                        </div>
                    }
                />
                </div>
                </div>
                <div className="col-lg-2 col-md-6">
                <div class="card main-card">
                    <HoverVideoPlayer
                    className='hovervideoplayer'
                    videoSrc={vid5}
                    overlayTransitionDuration={100000}
                    pausedOverlay={
                        <img src={card5} alt="" className='card-img-top'/>
                    }
                    loadingOverlay={
                        <div className="loading-spinner-overlay" >
                            Loading
                        </div>
                    }
                />
                </div>
                </div>
                
                {/* <div className="col-lg-2 col-md-6">
                <div class="card main-card">
                    <img src={card2} class="card-img-top card-img" alt="..."/>
                </div>
                </div>
                <div className="col-lg-2 col-md-6">
                <div class="card main-card">
                    <img src={card3} class="card-img-top card-img" alt="..."/>
                </div>
                </div>
                <div className="col-lg-2 col-md-6">
                <div class="card main-card">
                    <img src={card4} class="card-img-top card-img" alt="..."/>
                </div>
                </div>
                <div className="col-lg-2 col-md-6">
                <div class="card main-card">
                    <img src={card5} class="card-img-top card-img" alt="..."/>
                </div>
                </div> */}
            </div>
        </>
    )
}


export default MainCards;