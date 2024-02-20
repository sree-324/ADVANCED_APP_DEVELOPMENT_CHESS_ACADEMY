import '../assets/css/Mainpage.css';
import fp from '../assets/game-of-chess.webp'; // Import your background image

function FrontPage() {
  return (

    <div className="mp-container">
    <img src={fp} style={{width:`900px`, height:`700px`}}/>
     
      <div className="options">
        <div className="optionA">
          <div className="circle-shadow">
            <button>Admin</button>
          </div>
        </div>
        <div className="optionU">
          <div className="circle-shadow">
            <button>User</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
