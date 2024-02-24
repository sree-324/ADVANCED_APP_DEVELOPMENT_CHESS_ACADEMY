
import '../assets/css/Mainpage.css'; // Import CSS file for styling
import { Link } from 'react-router-dom';
const MainPage = () => {
  return (
    <div className="main-page">
      <h1>Rookie Academy</h1>
      <div className="button-container">
        <button className="admin-button"><Link to='/alogin'>Admin</Link></button>
        <button className="user-button"><Link to='/login'>User</Link></button>
      </div>
      
    </div>
  );
};

export default MainPage;
