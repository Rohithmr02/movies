import React from "react";
import { Link } from "react-router-dom";

function Login(){
    return(
        <div className="Login-container">
            
         <div className="Login-form">
         <h1>Login</h1>
         <form action="">
            <input 
            type="email" 
            placeholder="Enter your email"
            required
            />
            <input
            type="password"
            placeholder="Enter your password"
            />
            <input type="submit" value="Login" id="Loginbutton" />
            <p>If you not have account <Link to='/signup'>Register</Link></p>
         </form>
         
         </div>
         <div className="Login-content">
            <h1>Login here <span>to enjoy your time</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempore dolorum necessitatibus ipsum unde quia nobis quod fugiat architecto assumenda cupiditate porro, odio delectus nam. Ipsum optio ullam itaque illo iste esse id. Tempora totam non facere esse rem odit corporis, facilis ad nostrum explicabo quis velit minima ut natus?</p>
         </div>
        </div>
    )
}

export default Login;