import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";


function Home(){
    const [currentState,setCurrentState]=useState(0)
    const img1='https://cdn.wallpapersafari.com/63/91/EGjUcK.jpg'
    const img2='https://wallpaperaccess.com/full/5919.jpg'
    const img3='https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/01/best-90s-horror-posters.jpg'
    const images=[img1,img2,img3]
    useEffect(()=>{
        const timer=setTimeout(()=>{
         if(currentState === 2){
            setCurrentState(0)
         }else{
            setCurrentState(currentState+1)
         }
        },5000)
        return ()=>clearTimeout(timer)
    },[currentState])
    return(
        <>
        <Navbar/>
        <div className="slide-container">
         <img src={images[currentState]}  />
        </div>
        <div className="overlay">
            <h1>Welcome <span>to my website</span></h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, temporibus reprehenderit. Molestias, ipsa nihil animi sapiente eius illo consequatur dignissimos.</p>
            <Link to='/signup'><button>Register</button></Link>
        </div>

        </>
    )
}
export default Home;