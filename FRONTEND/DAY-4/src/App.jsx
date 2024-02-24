
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
import Courses from "./components/Courses";
import Classes from "./components/Classes";
import Achieve from "./components/Achieve";
import Workshops from "./components/Workshops";
import Seminar from "./components/Seminar";
import RecruitmentPage from "./components/RecruitmentPage";
import Adminlogin from "./components/Adminlogin";
import Adminhome from "./components/Adminhomepage";
import ContactUs from "./components/Contactus";

function App() {
 

  return (
    <div>
    <Router>
    <Routes>
      <Route path="/" element={<FrontPage />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/homepage' element={<Homepage />}></Route>
      <Route path='/profile' element={<ProfilePage />}></Route>
      <Route path='/signup' element={<RegistrationForm />}></Route>
      <Route path='/courses' element={<Courses />}></Route>
      <Route path='/classes' element={<Classes />}></Route>
      <Route path='/achieve' element={<Achieve />}></Route>
      <Route path='/workshops' element={<Workshops />}></Route>
      <Route path='/seminar' element={<Seminar />}></Route>
      <Route path='/recruitment' element={<RecruitmentPage />}></Route>
      <Route path='/alogin' element={<Adminlogin />}></Route>
      <Route path='/ahome' element={<Adminhome />}></Route>
      <Route path='/contact' element={<ContactUs />}></Route>




      



    </Routes>
  </Router>    
    </div>
  )
}

export default App
