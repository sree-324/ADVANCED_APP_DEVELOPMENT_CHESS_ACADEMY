import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';
import "../assets/css/Logincss.css"




function Adminlogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      setError('Please fill in all fields.');
    } else if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
    } else {
      console.log('Logging in with:', username, password);
      window.location.href = "/home";
    }
  };

  return (
    <div className='full'>
    <div className="containerl">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      <div className="input-field">
      <FaUser className='input-icon' style={{margin:'7px 5px'}}/>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-field">
      <FaLock className='input-icon' style={{margin:'7px 5px'}}/>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Link to='/ahome'><button onClick={handleLogin}>Login</button></Link>
    </div>
    </div>
  );
}

export default Adminlogin;