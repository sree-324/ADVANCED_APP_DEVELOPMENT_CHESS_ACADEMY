import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "../assets/css/Workshops.css";
import trust from '../assets/fundamentalw.jfif'
import chessw from "../assets/chessw.jfif"
import advanced from "../assets/Advanced.jpg"
import seven from "../assets/seven.jfif"
function Workshops(){
    return(
        <div>
            <Navbar />
            <Sidebar />
            <div className="workshop-container">
                <h1 >WORKSHOPS</h1>
                <section className="academySection">
                <h3 style={{ textAlign: "center" }}>Win by attending Our Workshop</h3>
                <br />
                <img src={trust} style={{ marginLeft: '262px' }} alt="trust" />
                <br></br>
                <h1 style={{ textAlign: "center" }}>Join us today and take the first step towards achieving your goals!</h1>
            </section>
            <br></br>
            <section className="academySection">
                <h3 style={{ textAlign: "center" }}>WELCOME TO THE MAGIC</h3>
                <br />
                <img src={chessw} style={{ marginLeft: '300px' }} alt="trust" />
                <br></br>
                <h1 style={{ textAlign: "center" }}>Connect with us to train your child</h1>
            </section>
            <section className="academySection">
                <h3 style={{ textAlign: "center" }}>Workshops</h3>
                <br />
                <img src={advanced} style={{ marginLeft: '262px',width:'150px' }} alt="trust" />
                <br></br>
                <h1 style={{ textAlign: "center" }}>Join us today and take the first step towards achieving your goals!</h1>
            </section>
            <section className="academySection">
                <h3 style={{ textAlign: "center" }}>WELCOME TO THE MAGIC</h3>
                <br />
                <img src={seven} style={{ marginLeft: '200px' }} alt="trust" />
                <br></br>
                <h1 style={{ textAlign: "center" }}>Connect with us to train your child</h1>
            </section>
            <section className="academySection">
                <h3 style={{ textAlign: "center" }}>WELCOME TO THE MAGIC</h3>
                <br />
                <img src={chessw} style={{ marginLeft: '400px' }} alt="trust" />
                <br></br>
                <h1 style={{ textAlign: "center" }}>Connect with us to train your child</h1>
            </section>



            </div>
        </div>

    )
}
export default Workshops;