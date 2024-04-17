import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Contact from './components/Contact';
import Posts from './components/Posts';
import Singlepost from './components/Singlepost';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter> 
      <Routes>
       <Route path='/' index element={ <App /> } />
       <Route path='/contact' element={ <Contact /> } />
       <Route path='/posts' element={ <Posts />} />
       <Route path='/posts/:slug' element={ <Singlepost />} />
      </Routes>
     </BrowserRouter>
  </React.StrictMode>
);

