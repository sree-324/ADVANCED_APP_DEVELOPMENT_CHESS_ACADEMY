
import  { useState } from 'react';
import '../assets/css/Logincss.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you can add your login logic, for example, API call to authenticate the user
    if (username === 'admin' && password === 'password') {
      // Successful login, redirect or set some state to indicate logged in
      console.log('Login successful');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className='loginpage-head'>
        <center>
      <h1>Login</h1>
      <form onSubmit={handleLogin} className='loginform-head'>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
      </form> 
      </center>  
    </div>
  );
}

export default Login;
