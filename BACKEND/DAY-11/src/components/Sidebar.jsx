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
        <Link to='/'><AiOutlineLogout style={{fontSize:"30px",color:'white',marginLeft:'50px'}}/></Link> 
        </li>
        
        
      </ul>
    </div>
    
  );
};

export default Sidebar;