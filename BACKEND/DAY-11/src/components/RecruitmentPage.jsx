import  { useState } from 'react';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "../assets/css/Recruitment.css"

function Recruitment() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    rating: '',
    experience: '',
    tournamentsPlayed: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      age: '',
      gender: '',
      rating: '',
      experience: '',
      tournamentsPlayed: ''
    });
    alert('Successfully enrolled!');
  };

  return (
    <div className="home1">
      <Navbar />
      <div className="sidebar-content1  ">
        <Sidebar />
        <div className="recruitment-container" style={{marginTop:'15%'}}>
          <h2>Recruit Chess Trainers</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
            <select name="gender" value={formData.gender} onChange={handleChange} required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            
            <input type="text" name="rating" placeholder="Chess Rating" value={formData.rating} onChange={handleChange} required />
            <input type="text" name="experience" placeholder="Experience" value={formData.experience} onChange={handleChange} required />
            <input type="text" name="tournamentsPlayed" placeholder="Tournaments Played" value={formData.tournamentsPlayed} onChange={handleChange} required />
            <button type="submit">Enroll</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Recruitment;
