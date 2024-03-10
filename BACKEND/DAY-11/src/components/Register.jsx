import { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
// import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import '../assets/css/Registration.css';

import registerchess from '../assets/horsewp.webp';

function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [roles, setRoles] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook
 

  const handleCreateAccount = async () => {
    if (!name || !email || !password || !roles) {
      setErrorMessage('Please fill in all fields.');
    } else {
      try {
        const response = await fetch('http://localhost:7000/products/new', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, password, roles }),
        });

        if (response.ok) {
          console.log('Account created successfully!');
          setIsValid(true);
          
          navigate('/login'); // Navigate to the login page
        } else {
          const data = await response.json();
          setErrorMessage(data.message || 'Failed to create account.');
        }
      } catch (error) {
        console.error('Failed to create account:', error);
        setErrorMessage('Failed to create account. Please try again later.');
      }
    }
  };
  return (
    <div className='register-all'>
      {/* <div className='register-container'> */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className='register-content'>
          <div className='image-box'>
            <img src={registerchess} style={{height:'370px'}}/>
          </div>
          <div className='form-box'>
          <h1>REGISTER</h1>

            <div className='input-field'>
              {/* <FaUser className='input-icon' style={{margin:'7px 5px'}} /> */}
              <input type='text' placeholder='Your name' value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='input-field'>
              {/* <FaEnvelope className='input-icon' style={{margin:'7px 5px'}} /> */}
              <input type='email' placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='input-field'>
              {/* <FaLock className='input-icon' style={{margin:'7px 5px'}} /> */}
              <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className='input-field'>
            <input type='text' placeholder='ROLE' value={roles} onChange={(e) => setRoles(e.target.value)} />

                          </div>
            {isValid ? (
              <Link to="/login"><button>Create Account</button></Link>
            ) : (
              <button onClick={handleCreateAccount}>Create Account</button>
            )}
            <p>Already have an account? <Link to="/login">Login</Link></p>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
}

export default Registration;
