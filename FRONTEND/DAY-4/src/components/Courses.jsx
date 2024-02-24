import "../assets/css/Courses.css";
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import level1 from "../assets/war.jfif";
import level2 from "../assets/war.jfif";
import level3 from "../assets/war.jfif";

const Courses = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="courses-container">
        <div>
          <div className="course">
            <img src={level1}  />
            <h3>BEGINNER LEVEL</h3>
            
            <h6 >In this you will be learning the basics of chess .Our trainers will take you to the magic world.</h6>
            <button>ENROLL</button>
          </div>
          <div className="course">
            <img src={level2}  />
            <h3>MEDIUM LEVEL</h3>
            <h6 >In this you will be learning the basics of chess .Our trainers will take you to the magic world.</h6>
            <button>ENROLL</button>          </div>
          <div className="course">
            <img src={level3}  />
            <h3>DIFFICULT LEVEL</h3>
            <h6 >In this you will be learning the basics of chess .Our trainers will take you to the magic world.</h6>
            <button>ENROLL</button>          </div>

        </div>
          <div>
          
          <div className="course">
            <img src={level3}  />
            <h3>PRO LEVEL</h3>
            <h6 >In this you will be learning the basics of chess .Our trainers will take you to the magic world.</h6>
            <button>ENROLL</button>          </div>

         
          <div>
          <div className="course">
            <img src={level3}  />
            <h3>ONE-ON-ONE COURSE</h3>
            <h6 >In this you will be learning the basics of chess .Our trainers will take you to the magic world.</h6>
            <button>ENROLL</button>          </div>
          <div className="course">
            <img src={level3}  />
            <h3>ONE-ON-ONE COURSE</h3>
            <h6 >In this you will be learning the basics of chess .Our trainers will take you to the magic world.</h6>
            <button>ENROLL</button>
                      </div>
          </div>

          </div>
          
          
        
     
      
          </div>
    </div>
  );
};

export default Courses;
