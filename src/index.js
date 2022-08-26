import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { IdItemInsertContext } from './components/form_builder/idItemProder';


import '@fortawesome/fontawesome-free/css/all.min.css';
//  Import FontAwesome 5 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <IdItemInsertContext>
    <App />
  </IdItemInsertContext>
  // </React.StrictMode>
);
