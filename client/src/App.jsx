import './App.css'
// import SearchResultContainer from './components/SearchResultContainer.jsx'
import Home from './pages/home/home.jsx'
import Profile from './pages/profile/profile.jsx'
import LoginPage from './pages/login/login.jsx'
import SignUpPage from './pages/signup/signup.jsx'
import LandingPage from './pages/landingPage/landing.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/signup" element={<SignUpPage />} />
    <Route path="/" element={<LandingPage />} />
  </Routes>
</Router>


      </>
  )
}

export default App
