import Navbar from './Navbar';
import Sidebar from './Sidebar';
import "../assets/css/Classes.css"; // Assuming you have a CSS file for styling

const Classes = () => {
  // Sample schedule data
  const schedule = [
    { id: 1, className: 'Chess Basics', time: '10:00 AM - 11:30 AM', trainer: 'John Doe' },
    { id: 2, className: 'Advanced Strategies', time: '1:00 PM - 2:30 PM', trainer: 'Jane Smith' },
    { id: 4, className: 'One to One Mastery', time: '2:00 PM - 3:30 PM', trainer: ' Johnson' },
    { id: 5, className: 'Super Pro strategies', time: '8:00 AM - 9:30 AM', trainer: 'Charlie' },
    { id: 6, className: 'Compete with Expert', time: '3:00 PM - 4:30 PM', trainer: 'Mike' },
    { id: 7, className: 'Trial match', time: '7:00 PM - 8:30 PM', trainer: 'Anand' },
    { id: 8, className: 'Class A class', time: '4:00 PM - 5:30 PM', trainer: 'Tina' },
    { id: 9, className: 'Advanced class', time: '8:00 PM - 9:30 PM', trainer: 'Magnus' },
    { id: 10, className: 'Endgame Mastery', time: '3:00 PM - 4:30 PM', trainer: 'Mike Johnson' },

  ];

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="schedule-container">
        <h2>Class Schedule</h2>
        <table className="schedule-table">
          <thead>
            <tr>
              <th>Class Name</th>
              <th>Time</th>
              <th>Trainer Name</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((classItem) => (
              <tr key={classItem.id}>
                <td>{classItem.className}</td>
                <td>{classItem.time}</td>
                <td>{classItem.trainer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Classes;
