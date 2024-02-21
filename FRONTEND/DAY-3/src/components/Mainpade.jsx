
import '../assets/css/Mainpage.css';
import fp from '../assets/dramatic-chess.avif'; 
import { Link } from 'react-router-dom';
function FrontPage() {
  return (
    <div className="container">
      <div className="image-container">
        <img src={fp} alt="Background" className="background-image" />
        <div className="overlay">
          <h1 className='mph1'>WELCOME TO ROOKie ACADEMY</h1>
          <button><Link to='/login'>LOGIN TO LEARN MORE</Link></button>
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
