// Homepage.js

import Navbar from "./Navbar";
import CardContainer from "./CardContainer"; // Assuming you have CardContainer component in a separate file
import Sidebar from "./Sidebar";
import "../assets/css/Homepage.css";
import image1 from "../assets/king.jfif"; // Import images for cards
import image2 from "../assets/knight.jfif";
import trust from "../assets/trust.png";
import image3 from "../assets/queen.jfif";
import image4 from "../assets/bishop.jfif";
import image5 from "../assets/rook.jfif";
import image6 from "../assets/soldier.jfif";
import Feedback from "./Feedback";


function Homepage() {
    
    return (
        <div className="homepage-container">
            <div className="hnav">
            <Navbar />
            </div>
            <div className="container">
      <div className="player-collage">
        <img src={image1} alt="Chess Player 1" />
        <img src={image2} alt="Chess Player 2" />
        <img src={image3} alt="Chess Player 3" />
      </div>
      <div className="quote">
        <p>"Chess is the gymnasium of the mind."</p>
        <p>- Blaise Pascal</p>
      </div>
    </div>
    <div className="founder-container">
      <div className="founder-image">
        <img src={image2} alt="Founder" />
      </div>
      <div className="founder-description">
        <h2>Meet Our Founder</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae metus sed nisi ultricies vestibulum. Nulla facilisi. Suspendisse potenti. Integer luctus, arcu et suscipit congue, ligula neque consequat purus, nec suscipit libero ex a nisi.</p>
        <p>Fusce in vestibulum magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin sit amet ipsum tortor. Mauris id maximus arcu, eget tristique nunc.</p>
      </div>
    </div>
    <div className="homepage-section1">
    <section className="homepage-section1">
      <div className="container1">
        <div className="row">
          <div className="col-md-4">
            <div className="number-section">
              <h3>50+</h3>
              <p>Trainers</p>
            </div>
          </div>
          <div className="col-md-4" >
            <div className="number-section" >
              <h3>20+</h3>
              <p>Champions</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="number-section">
              <h3>15+</h3>
              <p>Branches</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    </div>
            
        </div>
    );
}

export default Homepage;
