// WorkshopPage.js

import Navbar from "./Navbar";
import "../assets/css/Workshops.css";
import image1 from "../assets/bishop.jfif";1
import image2 from "../assets/cwimage1.jfif";
import image3 from "../assets/chess1.webp";
// import image3 from
const workshops = [
  {
    id: 1,
    image: image1,
    title: 'Introduction to React',
    instructor: 'John Doe',
    date: 'March 15, 2024',
    address: '123 Main Street, Cityville',
    description: 'Learn the basics of React and how to build web applications using this popular JavaScript library.'
  },
  {
    id: 1,
    image: image2,
    title: 'Introduction to React',
    instructor: 'John Doe',
    date: 'March 15, 2024',
    address: '123 Main Street, Cityville',
    description: 'Learn the basics of React and how to build web applications using this popular JavaScript library.'
  },
  {
    id: 1,
    image: image1,
    title: 'Introduction to React',
    instructor: 'John Doe',
    date: 'March 15, 2024',
    address: '123 Main Street, Cityville',
    description: 'Learn the basics of React and how to build web applications using this popular JavaScript library.'
  },
  {
    id: 1,
    image: image3,
    title: 'Introduction to React',
    instructor: 'John Doe',
    date: 'March 15, 2024',
    address: '123 Main Street, Cityville',
    description: 'Learn the basics of React and how to build web applications using this popular JavaScript library.'
  },
  // Add more workshop objects here
];

const WorkshopPage = () => {
  return (
    <div className="workshop-page">
        <div>
            <Navbar />
        </div>
        <h1>WORSHOPS</h1>

      <div className="workshop-container">
        {/* <h1>WORSHOPS</h1> */}
        {workshops.map(workshop => (
          <div className="workshop-card" key={workshop.id}>

            <img src={workshop.image} alt={workshop.title} className="workshop-image" />
            <div className="workshop-details">
              <h2>{workshop.title}</h2>
              <p><strong>Instructor:</strong> {workshop.instructor}</p>
              <p><strong>Date:</strong> {workshop.date}</p>
              <p><strong>Address:</strong> {workshop.address}</p>
              <p>{workshop.description}</p>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkshopPage;
