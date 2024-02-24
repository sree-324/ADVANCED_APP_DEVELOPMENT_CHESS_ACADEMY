import { useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import "../assets/css/Navbar.css";
import { IoMdContact } from "react-icons/io";
import { Link } from "react-router-dom";
// import logo from "../assets/logo2.jfif"; 
import { TbChessRookFilled } from "react-icons/tb";
import { Button } from "@mui/material";
import { AiOutlineLogout } from "react-icons/ai";



function Navbar() {
    const navRef = useRef();
    const [showMenu, setShowMenu] = useState(false);


    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

   

    return (
        <div className="navbarout">
            <div>
                <TbChessRookFilled />
            </div>                   
            <header>
                <button className="buttonA" onClick={toggleMenu}>
                    <FaBars />    
                </button>
                
                <nav ref={navRef} className={showMenu ? "responsive_nav" : ""}>
                <Link to='/homepage'>Home</Link>
                    <Link to='/achieve'>Achievements</Link>
                    <Link to='/courses'>Courses</Link>
                 
                    <Link to='/classes'>Services</Link>
                    <Link to='/contact'>Contact</Link>

                </nav>
                
                
                <div>
                    
                <Link to='/profile'><IoMdContact style={{fontSize:"34px",color:'white'}}/></Link>
                <Link to='/login'><Button><AiOutlineLogout style={{fontSize:"30px",color:'white'}}/></Button></Link> 
                </div>

            </header>
        </div>
    );
}

export default Navbar;
