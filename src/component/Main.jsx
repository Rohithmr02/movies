import React from "react";
import Axios from 'axios';
import Movieinfo from "./Movieinfo";
import { useState,useEffect } from "react";
import MovieCard from './MovieCard';
import {useNavigate} from 'react-router-dom'


function Main(){
  const navigate=useNavigate();
  const [movie,setMovie]=useState([])
  const [search,setSearch]=useState("")
  const [id,setId] = useState();
 
  var Url="https://api.themoviedb.org/3/movie/popular?api_key=c483dfae4ea25d73f7a2e638a292e36a";
  useEffect(()=>{
   Axios.get(Url)
   .then(res=>res.data).then((data)=>{
    setMovie(data.results)
    console.log(data.results);
   })
  },[])
  const FormHandler=async(e)=>{
    e.preventDefault()
    if(search.trim().length>0){
    try{
    const url=`https://api.themoviedb.org/3/search/movie?api_key=c483dfae4ea25d73f7a2e638a292e36a&query=${search}`
    await Axios.get(url)
    .then(res=>res.data)
    .then((data)=>{
     setMovie(data.results)
     setSearch("")
    })
  }catch(e)
  {
    console.log(e)
  };
}else{
  alert("enter your movie name")
} 
  }

  return (
    <>
    <div className="header">
    <h1>Movie app</h1>
       <form onSubmit={FormHandler}>
      <input type="text"
       placeholder='Enter the movie name'
       value={search}
       onChange={(e)=>setSearch(e.target.value)}
      />
      </form>
      </div>
    {movie.length>0?(
    <div className='page-container'>
   
     {movie.map((item)=>{
       if(item!=undefined){
      return(
        
        <div className="movie-container" onClick={()=> navigate(`/${item.id}`)} key={item.id}>
         <MovieCard  {...item}/>
        </div>
      )
       }
      
     })}
    </div>

    ):(
      <div className='not-found'>
      <h1>Movie not found..!</h1>
      </div>
    )}
    </>
  );
}

export default Main;