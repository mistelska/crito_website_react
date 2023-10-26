import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'

import Home from './views/Home'
import News from './views/News'
import Contact from './views/Contact'
import NotFound from './views/NotFound'


import { BrowserRouter, Routes, Route } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <App />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/news' element={<News/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);