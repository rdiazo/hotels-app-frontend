import React from 'react';
import ReactDOM from 'react-dom/client';  // Importa desde "react-dom/client" en lugar de "react-dom"
import App from './App.jsx';
import './index.css';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'; // Reemplaza con la ruta correcta a tu archivo de tienda

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
);
