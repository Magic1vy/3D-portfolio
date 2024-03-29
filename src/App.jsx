import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, About, Projects, Contact } from "./pages"; 
import Footer from "./components/Footer";
import Guides from "./pages/Guides";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

    return (
      <main className='bg-slate-300/20'>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route
              path='/*'
              element={
                <>
                  <Routes>
                    <Route path='/about' element={<About />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/guides' element={<Guides />} />
                  </Routes>
                  <Footer />
                </>
              }
            />
          </Routes>
        </Router>
      </main>
    );
  };
  
  export default App;