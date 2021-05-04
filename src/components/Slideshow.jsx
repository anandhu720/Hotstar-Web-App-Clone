import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import slide1 from '../images/slider-badag.jpg';
import slide2 from '../images/slider-badging.jpg' ;
import slide3 from '../images/slider-scale.jpg'
import slide4 from '../images/slider-scales.jpg' ;

const Slideshow = () =>{
    return(
        <>
        <div className="Slideshow">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={slide1} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item ">
                        <img src={slide2} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item ">
                        <img src={slide3} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item ">
                        <img src={slide4} class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>       
        </>
    )
}


export default Slideshow;