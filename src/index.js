import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import ErrorPage404 from './pages/ErrorPage404';

/* import Accomodation from './pages/Accomodation'; */
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      {/* <Route path="/accomodation:id" element={<Accomodation />} /> */}
      <Route path="/about" element={<About />} />
      <Route path="/*" element={<ErrorPage404 />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
