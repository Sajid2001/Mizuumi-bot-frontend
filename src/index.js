import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MessagesContextProvider } from './Contexts/MessagesContext';
import { IntentsContextProvider } from './Contexts/IntentsContext';
import { AuthContextProvider } from './Contexts/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <IntentsContextProvider>
        <MessagesContextProvider>
          <App />
        </MessagesContextProvider>
      </IntentsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
  
);

