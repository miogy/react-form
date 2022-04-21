import React from 'react';
import ReactDOM from 'react-dom/client';
// component
import AddApointment from './components/AddApointment'
// AddApointment 만들고 가져오기 -> 들어가는위치에 <AddApointment />
import Search from './components/search'
// Search 만들고 가져오기 -> 들어가는 위치에 <Search />

// source
import { BiArchive } from "react-icons/bi";
// react-icons 사이트로 들어가서 가져오기
import './index.css'

function App(){
  return (
    <article>
      <h3>
        <BiArchive style={{color:'#d47776'}}/> 예약시스템
      </h3>
      <AddApointment />
      <div id="list">
        <ul>
          <li>반복문</li>
        </ul>
      </div>
      <Search />
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);