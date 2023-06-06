import './App.css';
import { useEffect, useState } from 'react';
import { Auth, GoogleAuthProvider } from './components/auth.js';
import { db, auth, storage } from './config/firebase';
import { Link, Router, Routes, Route } from 'react-router-dom';
import Navigation from './Pages/navbar';
import Header from './Header';
import Footer from './Footer';
import HomePage from './Pages/HomePage.js';
import NavigationBar from './Pages/navbar';
import Layout from './Layout';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Mentorship from './Pages/Mentorship';
import Scholarship from './Pages/Scholarship';
import Team from './Pages/Team';

function App() {
  const [scholarshipList, setScholarshipList] = useState([]);

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={ <HomePage /> }/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/mentorship" element={<Mentorship />}/>
        <Route path="/scholarships" element={<Scholarship />}/>
        <Route path="/team" element={<Team />}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
