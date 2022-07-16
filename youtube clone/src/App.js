import './App.css';
import React, { useState } from 'react';
import Headers from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import Sign from './components/Sign';
import Index from './components/Index';
import Header1 from './components/Header1';
import Sidebar from './components/Sidebar';



function App() {
  const [data, setdata] = useState(true)

const [toggle,settoggle] = useState(true);

const change = () =>{
  settoggle(!toggle);
}

  if (data) {
    return (
      <BrowserRouter>
        <Header1 change={change}  />
        <div className="d-flex">
          <Sidebar toggle={toggle}/>
          <Routes>
            <Route path="/" element={<Index toggle={toggle} />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  } else {
    return (
      <BrowserRouter>
        <Headers />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign" element={<Sign />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
