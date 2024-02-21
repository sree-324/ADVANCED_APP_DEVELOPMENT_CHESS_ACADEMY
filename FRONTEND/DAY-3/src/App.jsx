
import Login from "./components/Login";
//import FrontPage from "./components/Mainpade";
//import Navbar from "./components/Navbar";
//import RegistrationForm from "./components/Register"
import Homepage from "./components/Homepage";
import FrontPage from "./components/Mainpade"
//import Profile from "./components/Profilepage";
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import ProfilePage from "./components/Profilepage";
import RegistrationForm from "./components/Register";

function App() {
 

  return (
    <div>
    <Router>
    <Routes>
      <Route path="/" element={<FrontPage />}></Route>
      <Route path='login' element={<Login />}></Route>
      <Route path='/homepage' element={<Homepage />}></Route>
      <Route path='/profile' element={<ProfilePage />}></Route>
      <Route path='/RegistrationForm' element={<RegistrationForm />}></Route>
    </Routes>
  </Router>    
    </div>
  )
}

export default App
