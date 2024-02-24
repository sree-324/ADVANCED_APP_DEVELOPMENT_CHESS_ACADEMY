
import "../assets/css/Achieve.css";
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import winner from '../assets/winner.jfif';

const Achieve = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="courses-container">
      <div>
            <h1 className="ahead">2023</h1>
            <table className="achievements-table">
          
          <tbody>
            <tr>
              <td><br></br>A Rookie of our academy has won 1st National award.<br></br>She has been gifted with Black Mahindra Thar by the Grand Master.</td>
              <td><br></br>Appreciated by Indian Master for being Number 1 in India<br></br> in terms of maximum ranking.</td>
            </tr>
          </tbody>
        </table>
        </div>
        

      </div>
      <br></br>
      <br></br>
      <div className="aimage">
        <img src={winner} width={'700px'}/>
        </div>
        <br></br>
        <div className="adescription">
            <h1>OUR REMARKABLE JOURNEY!!!</h1><br></br>
        <h2>!!Over the years, our chess academy has achieved remarkable success and recognition within the chess community. In 2021, we proudly produced three national chess champions, showcasing the effectiveness of our training programs and the dedication of our students.!!</h2>
        <br></br>
          <b><h2>The following year, in 2022, our academy reached new heights by securing the top position in the highly competitive Online Chess League. This achievement not only demonstrated our students' exceptional skills but also highlighted our academy commitment to excellence in both traditional and online chess formats.</h2></b>
          <br></br><h2>In 2023, our efforts were further validated when we received the prestigious Best Chess Academy Award. This recognition reaffirmed our position as a leading institution in chess education and inspired us to continue striving for excellence in all aspects of our academy.</h2>

        </div>
    </div>
  );
};

export default Achieve;
