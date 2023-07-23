import React from "react";

const imageulr="https://image.tmdb.org/t/p/w500/";

function MovieCard({original_title,vote_average,poster_path,popularity}){
    
    const image=`https://image.tmdb.org/t/p/w500/${poster_path}`
    if(image!==undefined){
    return(
        <div className="movie-card">
            <img src={imageulr+poster_path} alt="" />
            <p>{original_title}</p>
          
        </div>
    )
    }
       
}

export default MovieCard;