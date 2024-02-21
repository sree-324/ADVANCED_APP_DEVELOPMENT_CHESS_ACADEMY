import { useState } from 'react';
import '../assets/css/Logincss.css';
//import theme from '../assets/theme.jfif';
import { Link } from 'react-router-dom';
function LoginPage() {
  const [role, setRole] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, e.g., send the data to the server for authentication
    console.log('Role:', role);
    console.log('Username:', username);
    console.log('Password:', password);
    // You may want to clear the fields after submission
    setRole('');
    setUsername('');
    setPassword('');
  };

  return (
    
    <div className="login-container" >
     
      <h2 className="login-title">Login</h2>
      
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <label className="login-label">
            Role:
            <select className="login-input" value={role} onChange={handleRoleChange} required>
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </label>
        </div>
        <div>
          <label className="login-label">
            Username:
            <input type="text" className="login-input" value={username} onChange={handleUsernameChange} required/
            
            
            
            >
          </label>
        </div>
        <div>
          <label className="login-label">
            Password:
            <input type="password" className="login-input" value={password} onChange={handlePasswordChange} required />
          </label>
        </div>
        <button type="submit" className="login-button"><Link to='/homepage'>Login</Link></button>
        <br></br>
        <p className="login-s">New User?? <Link to='/RegistrationForm'>Sign Up!</Link></p>
      </form>
    </div>
    
  );
}

export default LoginPage;
  