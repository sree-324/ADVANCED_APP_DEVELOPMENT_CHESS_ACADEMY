import { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import { Link } from "react-router-dom";
import axios from 'axios'; 
import "../../assets/css/Courses.css";

const AdminCourses = () => {
  const [courses, setCourses] = useState([]);
  const [newCourseData, setNewCourseData] = useState({
    courseName: '',
    courseImg: '',
    courseDescription: '',
    mentor: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [editingCourseId, setEditingCourseId] = useState(null);
  const token = localStorage.getItem('token');
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:7000/api/courses');
      setCourses(response.data);
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
      const response = await axios.post('http://localhost:7000/api/courses', newCourseData);
      setCourses([...courses, response.data]);
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

  const handleEditCourse = async (id) => {
    setLoading(true);
    try {
      const response = await axios.put(`http://localhost:7000/api/courses/${id}`, newCourseData);
      const updatedCourses = courses.map(course => {
        if (course.id === id) {
          return response.data;
        }
        return course;
      });
      setCourses(updatedCourses);
      setEditingCourseId(null);
    } catch (error) {
      console.error('Error editing course:', error);
      setError(error.response?.data?.message || 'Failed to edit course.');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteCourse = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`http://localhost:7000/api/courses/${id}`);
      setCourses(courses.filter(course => course.id !== id));
    } catch (error) {
      console.error('Error deleting course:', error);
      setError(error.response?.data?.message || 'Failed to delete course.');
    } finally {
      setLoading(false);
    }
  };

  const startEditingCourse = (id) => {
    const courseToEdit = courses.find(course => course.id === id);
    setNewCourseData(courseToEdit);
    setEditingCourseId(id);
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
        <div className="add-course-form">
          <h2>{editingCourseId ? 'Edit Course' : 'Add New Course'}</h2>
          <input type="text" name="courseName" placeholder="Course Name" value={newCourseData.courseName} onChange={handleInputChange} />
          <input type="text" name="courseImg" placeholder="Course Image URL" value={newCourseData.courseImg} onChange={handleInputChange} />
          <input type="text" name="courseDescription" placeholder="Course Description" value={newCourseData.courseDescription} onChange={handleInputChange} />
          <input type="text" name="mentor" placeholder="Mentor" value={newCourseData.mentor} onChange={handleInputChange} />
          {editingCourseId ?
            <button onClick={() => handleEditCourse(editingCourseId)} disabled={loading}>Save</button> :
            <button onClick={handleAddCourse} disabled={loading}>Add Course</button>
          }
        </div>
        {courses.map(course => (
          <div key={course.id} className="course">
            <img src={course.courseImg} alt={course.courseName} />
            <h3>{course.courseName}</h3>
            <h6>{course.courseDescription}</h6>
            <h6>{course.mentor}</h6>
            <div>
              <button onClick={() => startEditingCourse(course.id)}>Edit</button>
              <button onClick={() => handleDeleteCourse(course.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminCourses;
