import { useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import "../../assets/css/Navbar.css";
import { IoMdContact } from "react-icons/io";
import { Link } from "react-router-dom";
import { TbChessRookFilled } from "react-icons/tb";
import { Button } from "@mui/material";
import { AiOutlineLogout } from "react-icons/ai";

function AdminNavbar() {
    const navRef = useRef();
    const [showMenu, setShowMenu] = useState(false);
    const [showAboutDropdown, setShowAboutDropdown] = useState(false);
    const [showEventsDropdown, setShowEventsDropdown] = useState(false);
    const [showMoreDropdown, setShowMoreDropdown] = useState(false);
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const toggleAboutDropdown = () => {
        setShowAboutDropdown(!showAboutDropdown);
    };

    const toggleEventsDropdown = () => {
        setShowEventsDropdown(!showEventsDropdown);
    };

    const toggleMoreDropdown = () => {
        setShowMoreDropdown(!showMoreDropdown);
    };

    const toggleProfileDropdown = () => {
        setShowProfileDropdown(!showProfileDropdown);
    };

    return (
        <div className="navbarout">
            <header>
                <div>
                    <TbChessRookFilled style={{ color: 'white', marginBottom: '0px', fontSize: '25px' }} />
                    <h3 style={{ marginLeft: '28px',marginTop:'-32px' }}>ROOKIE</h3>
                </div>
                <nav ref={navRef} className={showMenu ? "responsive_nav" : ""}>
                    <div className="dropdown">
                        <Link to='#' onClick={toggleAboutDropdown}>About</Link>
                        {showAboutDropdown && (
                            <div className="dropdown-content">
                                <Link to="/achieve">Achievements</Link>
                                <Link to="/team">Our Team</Link>
                            </div>
                        )}
                    </div>
                    <div className="dropdown">
                        <Link to='#' onClick={toggleEventsDropdown}>Events</Link>
                        {showEventsDropdown && (
                            <div className="dropdown-content">
                                <Link to="/workshops">Workshops</Link>
                                <Link to="/tournaments">Tournaments</Link>
                            </div>
                        )}
                    </div>
                    <Link to='/admincourses'>Learn</Link>
                    <Link to='/classes'>Live Classes</Link>
                    <div className="dropdown">
                        <Link to='#' onClick={toggleMoreDropdown}>More</Link>
                        {showMoreDropdown && (
                            <div className="dropdown-content">
                                <Link to="/feed">Feedback</Link>
                                <Link to="/contact">Contact Us</Link>
                            </div>
                        )}
                    </div>
                    <div className="dropdown">
                        <Button onClick={toggleProfileDropdown}><IoMdContact style={{ fontSize: "34px", color: 'white' }} /></Button>
                        {showProfileDropdown && (
                            <div className="dropdown-content">
                                <Link to="/profile">Profile</Link>
                                <Link to="/login"><AiOutlineLogout style={{ fontSize: "30px", color: 'white' }} /></Link>
                            </div>
                        )}
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default AdminNavbar;
