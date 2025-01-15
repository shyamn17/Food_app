import { useState,useContext} from "react";
import {Link} from "react-router-dom";
import Logo from "../Assets/logo.jpg"
import useOnline from "../Hooks/useOnline"
import userContext from "../Hooks/userContext";

export const Title=()=>{
    return(
        <a href="/">
        <img className="logo" alt="logo" src={Logo} />
        </a>
    )
}

const Header=()=>{

const [isLoggedIn , setisLoggedIn]=useState(false);

const user=useContext(userContext);

    return(
        <div className="flex">
        <Title />

    <div className="nav-items">
    <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/instamart">InstaMart</Link></li>  
    <li><Link to="/about">About Us</Link></li>  
    <li><Link to="/">Cart</Link></li>  
    <li><Link to="/contact">Contact</Link></li>  

    </ul>
    </div>
    <h3> {useOnline()?"🟢":"⛔"}</h3>
    {user.name}
    {isLoggedIn ? (
    <button onClick={()=>setisLoggedIn(false)}>Logout</button>): 
    <button onClick={()=>setisLoggedIn(true)}>Login </button>}
    </div>
    )
    }

export default Header;