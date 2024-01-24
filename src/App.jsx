import './App.css'
// import SearchResultContainer from './components/SearchResultContainer.jsx'
import Home from './home.jsx'
import Profile from './profile.jsx'
import LoginPage from './components/login/login.jsx'
import SignUpPage from './components/signup/signup.jsx'
import landingPage from './components/landingPage/landing.jsx'
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
    <Route path="/" element={<landingPage />} />
  </Routes>
</Router>


      </>
  )
}

export default App
