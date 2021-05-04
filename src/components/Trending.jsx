import React from 'react';
import movies from '../movies.js';
import {Link} from 'react-router-dom';



const Trending = () =>{
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <h4 className="movie-heading">Trending</h4>
                {movies.map((movie,key)=>movie.type === 'trending'?
                    <div className="col-lg-3 col-md-6 col-6">
                        <div className="card movie-card">
                            <Link to={'/detail/'+movie.id} >
                                <img src={movie.cardImg} class="card-img-top" alt="..." id={movie.id}/>
                            </Link>
                        </div> 
                    </div>:null
                )}
            </div>
        </div>
        </>
    )
}

export default Trending;