import React, { useState } from 'react';
import Navbar from "./Navbar";
import CardContainer from "./CardContainer"; // Assuming you have CardContainer component in a separate file
import Sidebar from "./Sidebar";
import "../assets/css/Homepage.css";
import image1 from "../assets/king.jfif"; // Import images for cards
import image2 from "../assets/knight.jfif";
import trust from "../assets/trust.png";
import image3 from "../assets/queen.jfif";
import image4 from "../assets/bishop.jfif";

function Adminhome() {
    const [isAdminMode, setIsAdminMode] = useState(false);
    const [editableContent, setEditableContent] = useState({
        cardsData: [
            { id: 1, title: 'Card 1', content: 'This is the content of card 1.', imgUrl: image1 },
            { id: 2, title: 'Card 2', content: 'This is the content of card 2.', imgUrl: image3 },
            { id: 3, title: 'Card 3', content: 'This is the content of card 3.', imgUrl: image2 },
            { id: 4, title: 'Card 4', content: 'This is the content of card 4.', imgUrl: image4 },
            { id: 5, title: 'Card 5', content: 'This is the content of card 5.', imgUrl: image1 },
            { id: 6, title: 'Card 6', content: 'This is the content of card 6.', imgUrl: image1 },
            { id: 7, title: 'Card 7', content: 'This is the content of card 7.', imgUrl: image1 },
        ],
        academyContent: [
            { id: 1, content: 'Experienced instructors✅' },
            { id: 2, content: 'Comprehensive curriculum✅' },
            { id: 3, content: 'Flexible scheduling options✅' },
            { id: 4, content: 'Hands-on learning experiences✅' },
            { id: 5, content: 'Supportive learning environment✅' },
        ]
    });

    const toggleAdminMode = () => {
        setIsAdminMode(!isAdminMode);
    };

    const handleEditContent = (section, id, updatedContent) => {
        const updatedEditableContent = { ...editableContent };
        updatedEditableContent[section] = editableContent[section].map(item => {
            if (item.id === id) {
                return { ...item, content: updatedContent };
            }
            return item;
        });
        setEditableContent(updatedEditableContent);
    };

    const handleSaveContent = () => {
        // Here you can implement logic to save content, e.g., send it to a backend server
        console.log("Content saved:", editableContent);
    };

    const renderEditableContent = (section) => {
        return editableContent[section].map(item => (
            <p
                key={item.id}
                contentEditable={isAdminMode}
                suppressContentEditableWarning={true}
                onBlur={(e) => handleEditContent(section, item.id, e.target.textContent)}
            >
                {item.content}
            </p>
        ));
    };

    return (
        <div className="homepage-container">
            <Navbar />
            
            <div className="cardSection">
                <CardContainer cards={editableContent.cardsData} isAdminMode={isAdminMode} onEditContent={handleEditContent} />
            </div>
            <section className="academySection">
                <h3 style={{ textAlign: "center" }}>Why Choose Our Academy?</h3>
                <br />
                <img src={trust} style={{ marginLeft: '262px' }} alt="trust" />
                {renderEditableContent('academyContent')}
                <br />
                <h1 style={{ textAlign: "center" }}>Join us today and take the first step towards achieving your goals!</h1>

                {isAdminMode ? (
                    <div style={{ textAlign: 'center', marginTop: '20px' }}>
                        <button onClick={handleSaveContent}>Save Content</button>
                    </div>
                ) : null}

                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <button onClick={toggleAdminMode}>{isAdminMode ? 'Switch to User Mode' : 'Switch to Admin Mode'}</button>
                </div>
            </section>
        </div>
    );
}

export default Adminhome;
