import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/Logincss.css';
// import Cookies from 'js-cookie';
import loginchess from '../assets/loginchess.jfif';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:7000/products/authenticate', {
        username,
        password,
      });
  
      console.log('Response:', response); // Log the entire response object
  
      if (response.status === 200) {
        const token = response.data;
        localStorage.setItem('token', token)
        setIsValid(true);
        console.log('Login successful');
        console.log('Token: ' + token);
  
        if (username === 'admin') {
          navigate('/adminDashboard'); // Redirect to admin dashboard if username is admin
        } else {
          navigate('/homepage');
        }
      } else {
        throw new Error('Invalid username or password');
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  
  return (
    <div className='full'>
      <div className="containerl">
        <div className="login-content">
          <div className="image">
            <img src={loginchess} alt="Login" />
          </div>
          <div className="login-form">
            <h2>Login</h2>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <div className="input-field">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-field">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {isValid ? (
              <Link to="/dashboard"><button>Login</button></Link>
            ) : (
              <button onClick={handleLogin}>Login</button>
            )}
            <p>Click below to have an account<br></br><Link to="/signup">Create an account</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
