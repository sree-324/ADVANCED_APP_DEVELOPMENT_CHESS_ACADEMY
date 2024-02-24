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


function Homepage() {
    const cardsData = [
        { id: 1, title: 'KING', content: 'The king is the most vulnerable piece on the board since everything else stops when the king is in check.', imgUrl: image1 },
        { id: 2, title: 'QUEEN', content: 'The queen is the most powerful piece in the game of chess.The Queen never forget to protect the king.', imgUrl: image3 },
        { id: 3, title: 'KNIGHT', content: 'A knight is a piece in the game of chess that is traditionally shaped like a horse.', imgUrl: image2 },
        { id: 4, title: 'BISHOP', content: 'The bishop is considered a minor piece (like a knight) and is worth three points. ', imgUrl: image4 },
        { id: 5, title: 'PAWN ', content: 'The pawn is the least powerful piece and is worth one point. If it is a pawns first move, it can move forward one or two squares.', imgUrl: image5 },
        { id: 6, title: 'ROOK', content: 'The rook is considered a major piece (like the queen) and is worth five points. ', imgUrl: image6},
    ];

    return (
        <div className="homepage-container">
            <div className="hnav">
            <Navbar />
            </div>
            <div className="sidebarcsection">
            <Sidebar />
            </div> 
            <div className="cardSection">
                <CardContainer cards={cardsData} />
            </div>
            <section className="academySection">
                <h3 style={{ textAlign: "center" }}>Why Choose Our Academy?</h3>
                <br />
                <img src={trust} style={{ marginLeft: '262px' }} alt="trust" />

                <p style={{ textAlign: "center" }}>Experienced instructors✅</p>
                <p style={{ textAlign: "center" }}>Comprehensive curriculum✅</p>
                <p style={{ textAlign: "center" }}>Flexible scheduling options✅</p>
                <p style={{ textAlign: "center" }}>Hands-on learning experiences✅</p>
                <p style={{ textAlign: "center" }}>Supportive learning environment✅</p>
                <br />

                <h1 style={{ textAlign: "center" }}>Join us today and take the first step towards achieving your goals!</h1>
            </section>
        </div>
    );
}

export default Homepage;
