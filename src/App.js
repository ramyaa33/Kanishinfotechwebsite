import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Firstpg from './components/Firstpg';
import About from './components/Aboutus';
import Navbar from './components/Navbar';
import ContactForm from './components/Contact';
import Services from './components/Service';
import Security from './components/Security';
import TeamBackgroundWithContent from './components/Ourteampg';
import Page from './components/Catagoryindex';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <Router>
      <Navbar />  {/* Include the Navbar here */}
      <Routes>
        <Route path="/" element={<Firstpg />} />
        <Route path="/firstpg" element={<Firstpg />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path='/services' element={<Services/>}/>
        <Route path='/security' element={<Security/>}/>
        <Route path='/ourteampg' element={<TeamBackgroundWithContent/>}/>
        <Route path='/catagoryindex' element={<Page/>}/>
      </Routes>
    </Router>
  );
};

export default App;
