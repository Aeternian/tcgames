import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AgregaJuegos from './components/AgregaJuegos';  // Asegúrate de la ruta correcta

ReactDOM.render(
  <React.StrictMode>
    <App />
    <AgregaJuegos />  {/* Asegúrate de que se renderice */}
  </React.StrictMode>,
  document.getElementById('root')
);
