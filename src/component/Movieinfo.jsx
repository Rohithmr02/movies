import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";



function Movieinfo(){
   const {idd}=useParams();
   
   const [item,setItem]=useState({
    id:10
   });
   
   
    useEffect(()=>{

        const urlid=`https://api.themoviedb.org/3/movie/${idd}?api_key=c483dfae4ea25d73f7a2e638a292e36a&append_to_response=videos,images`
         Axios.get(urlid)
        .then(res=>res.data)
        .then(data=>setItem(data))
         .catch(e=>console.log(e))
         console.log(item);
        
    },[])
    
    const imageulr=`https://image.tmdb.org/t/p/w500/${item.poster_path}`;
    const round=Math.floor(item.popularity);
    const rateround=Math.floor(item.vote_average).toFixed(1)
    return(
        <div className="movie-info">
        <div className="movieinfo-content">
            <div className="content-image">
        <img src={imageulr} alt="" />
        </div>
        <div className="content-rating">
         <h1>{item.original_title}</h1>   
        <p>Rating : {rateround} ★</p>
        <p>Popularity : {round}</p>
        <p>Release Date : {item.release_date}</p>
        </div>
        </div>
         <div className="overview-content">
            <div className="overview-para">
                <h3>Overview</h3>
         <p>{item.overview}</p>
         
         
         <h4>Visit me to Watch the movie : <a href={item.homepage}>More details</a></h4>
         </div>
        </div>
        </div>
    )
}

export default Movieinfo