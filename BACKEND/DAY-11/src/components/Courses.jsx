import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { Link } from "react-router-dom";
import axios from 'axios'; // Import Axios for HTTP requests
import "../assets/css/Courses.css";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [newCourseData, setNewCourseData] = useState({
    courseName: '',
    courseImg: '',
    courseDescription: '',
    mentor: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const token=localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] =   ` Bearer ${token}`;
    console.log("Token:", token);
    console.log("Headers:", axios.defaults.headers.common);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:7000/api/courses'); // Fetch courses
      setCourses(response.data); // Assuming courses are returned as an array
    } catch (error) {
      console.error('Error fetching courses:', error);
      setError('Failed to fetch courses. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourseData({ ...newCourseData, [name]: value });
  };

  const handleAddCourse = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:7000/products/addCourse', newCourseData); // Add course
      setCourses([...courses, response.data]); // Assuming the added course is returned in the response
      setNewCourseData({
        courseName: '',
        courseImg: '',
        courseDescription: '',
        mentor: ''
      });
    } catch (error) {
      console.error('Error adding course:', error);
      setError(error.response?.data?.message || 'Failed to add course.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="courses-container">
        <div className='enrollc'>
        <Link to='/enrollf'><button>ENROLL</button></Link>

        </div>
        {loading && <p>Loading...</p>}
        {error && <p className="error-message">{error}</p>}
        {/* <div className="add-course-form">
          <h2>Add New Course</h2>
          <input type="text" name="courseName" placeholder="Course Name" value={newCourseData.courseName} onChange={handleInputChange} />
          <input type="text" name="courseImg" placeholder="Course Image URL" value={newCourseData.courseImg} onChange={handleInputChange} />
          <input type="text" name="courseDescription" placeholder="Course Description" value={newCourseData.courseDescription} onChange={handleInputChange} />
          <input type="text" name="mentor" placeholder="Mentor" value={newCourseData.mentor} onChange={handleInputChange} />
          <button onClick={handleAddCourse} disabled={loading}>Add Course</button>
        </div> */}
        {courses.map(course => (
          <div key={course.id} className="course">
            <img src={course.courseImg} alt={course.courseName} />
            <h3>{course.courseName}</h3>
            <h6>{course.courseDescription}</h6>
            <h6>{course.mentor}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
