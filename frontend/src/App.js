import './App.css';
import { useEffect, useState } from 'react';
import { Auth, GoogleAuthProvider } from './components/auth.js';
import { db, auth, storage } from './config/firebase';
import { Link, Router, Routes, Route } from 'react-router-dom';
import Navigation from './Pages/navbar';
import Header from './Header';
import Footer from './Footer';

function App() {
  const [scholarshipList, setScholarshipList] = useState([]);

  return (
    <>
      <Header />
      <Navigation />
      
      <div className="auth-box">
      <Auth />
      </div>

      <Footer />
      
    </>
  );
}

export default App;
