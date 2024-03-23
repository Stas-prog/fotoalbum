import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';
import FotoStore from './store/FotoStore';
import './index.css'

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    user: new UserStore(),
    foto: new FotoStore(),
  }}>
    <App />
  </Context.Provider>

);


