import React from 'react';
import Slideshow from './Slideshow';
import MainCards from './MainCards';
import Moviecard from './Moviecard';


const Home = () =>{

    return(
        <>
            <div className="container-fluid">
                <div className="home-body">
                    <Slideshow />
                    <MainCards />
                    <Moviecard />
                </div>
            </div>
        </>
    )
}

export default Home;