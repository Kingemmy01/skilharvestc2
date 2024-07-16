import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GetRecipes from './components/pages/GetRecipes';
import RecipeDetail from './components/pages/RecipeDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/recipes" element={<GetRecipes />} />
      <Route path="/recipes/:slug" element={<RecipeDetail />} />
    </Routes>
    </BrowserRouter>
    </React.StrictMode>
);
