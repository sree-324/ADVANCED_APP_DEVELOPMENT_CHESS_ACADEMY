
import '../assets/css/MainNavbar.css';
import qchess from '../assets/qchess.jpeg';
import Mnavbar from './MainNavbar';
const MainPage = () => {
  return (
    <div>
       <div style={{marginTop:'5%'}}>
        <Mnavbar />
      </div>
      
      <div>
        <img src={qchess} className='mainpageimage'/>
        </div>
       

      </div>
    // <div className="main-page">
    //   <div className='mainh1'>
    //   <h1>Rookie Academy</h1>
    //   <div className="button-container">
    //     <button className="admin-button"><Link to='/alogin'>Admin</Link></button>
    //     <button className="user-button"><Link to='/login'>User</Link></button>
    //   </div>
    //   </div>
    // </div>
  );
};

export default MainPage;
