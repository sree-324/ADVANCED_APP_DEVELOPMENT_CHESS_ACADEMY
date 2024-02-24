import { Link } from 'react-router-dom';
import '../assets/css/Sidebar.css'; // Importing external CSS file
import { AiOutlineLogout } from "react-icons/ai";


const Sidebar = () => {
  return (
    <div className="sidebar">
        
    
      <ul className="sidebar-links">
        <li>
          <Link to="/workshops">Workshops</Link>
        </li>
        <li>
          <Link to="/seminar">Seminar</Link>
        </li>
        <li>
          <Link to="/recruitment">Recruitment</Link>
        </li>
        <li>
          <Link to="/tournaments">Tournaments</Link>
        </li>
        <div className='tree'>
        <li>
          <Link to="/logout"><img src="https://res.cloudinary.com/dv3xtovhk/image/upload/v1708529729/log-removebg-preview_q5glyy.png" width="60px" height="60px"/></Link>
        </li>
        
        </div>
      </ul>
    </div>
    
  );
};

export default Sidebar;