
import { Link } from 'react-router-dom';

const Mnavbar = () => {
  return (
    <nav className="navbar" >
      <ul className="navbar__list">
        <li className="navbar__item"><Link to="/aboutus" className="navbar__link">About Us</Link></li>
        <li className="navbar__item"><Link to="/ourteam" className="navbar__link">Our Team</Link></li>
        <li className="navbar__item"><Link to="/achievements" className="navbar__link">Achievements</Link></li>
        <li className="navbar__item"><Link to="/login" className="navbar__link">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Mnavbar;
