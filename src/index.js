import React from 'react';
import ReactDOM from 'react-dom/client';
// component

// source
import './index.css'

function App(){
  return (
    <article>
      <h3>welcome</h3>
      <div>
        <ul>
          <li></li>
        </ul>
      </div>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);