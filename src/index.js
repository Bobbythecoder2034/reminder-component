import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ReminderDisplay from './components/ReminderDisplay';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReminderDisplay/>
  </React.StrictMode>
);
