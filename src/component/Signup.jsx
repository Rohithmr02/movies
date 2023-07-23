import React from "react";
import { Link } from "react-router-dom";

function Signup(){
    return(
        <div className="signup-container">
            
         <div className="signup-form">
         <h1>Register</h1>
         <form action="">
            <input 
            type="text" 
            placeholder="Enter your name"
            required
            />
            <input 
            type="email" 
            placeholder="Enter your email"
            required
            />
            <input
            type="password"
            placeholder="Enter your password"
            />
            <input 
            type="password" 
            placeholder="Re-Enter your password"
            />
            <input type="submit" value="Register" id="signupbutton" />
            <p>If you have account <Link to='/login'>Login</Link></p>
         </form>
         
         </div>
         <div className="signup-content">
            <h1>Register here <span>to enjoy your time</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempore dolorum necessitatibus ipsum unde quia nobis quod fugiat architecto assumenda cupiditate porro, odio delectus nam. Ipsum optio ullam itaque illo iste esse id. Tempora totam non facere esse rem odit corporis, facilis ad nostrum explicabo quis velit minima ut natus?</p>
         </div>
        </div>
    )
}

export default Signup;