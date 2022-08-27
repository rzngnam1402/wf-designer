import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { IdItemProvider } from './components/form_builder/idItemProder';


import '@fortawesome/fontawesome-free/css/all.min.css';
//  Import FontAwesome 5 
import 'semantic-ui-css/semantic.min.css'
// Import Semantic UI React

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <IdItemProvider>
    <App />
  </IdItemProvider>
  // </React.StrictMode>
);

