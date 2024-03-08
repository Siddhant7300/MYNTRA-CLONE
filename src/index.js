import React from 'react';

import { createRoot } from 'react-dom/client';

import App from './App';
import { Provider } from 'react-redux'; // Correct import statement
import store from './redux/store';

const root = createRoot(document.getElementById('root')); // Use createRoot from 'react-dom'
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
