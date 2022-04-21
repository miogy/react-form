import React from 'react';
import ReactDOM from 'react-dom/client';

// component
import AddApointment from './components/AddApointment'
// AddApointment 만들고 가져오기 -> 들어가는위치에 <AddApointment />
import Search from './components/search'
// Search 만들고 가져오기 -> 들어가는 위치에 <Search />
import AddInfo from "./components/AddInfo"
// AddInfo 만들어서 가져오기 -> 위치에 <AddInfo />

// source
import { BiArchive } from "react-icons/bi";
// react-icons 사이트로 들어가서 가져오기
import './index.css'
import appointData from './data.json'
// json파일 (데이터베이스 정리)가져오기
// appointData: json파일을 import하기위해 지정해주는 이름


function App(){
  return (
    <article>
      <h3>
        <BiArchive style={{color:'#d47776'}}/> 예약시스템
      </h3>
      <AddApointment />
      <div id="list">
      <Search />
        <ul>
          {
            appointData.map( (item,num) => (
              <AddInfo 
              key={num}
              appointment = {item}
              />

            ))
          }
        </ul>
      </div>
    </article>
    // 1. 전체 기본 구조를 만들기
    // 2. 중간중간 들어가는 데이터들은 새로 파일생성후 import하고 < />위치에 연결
    // 3. 반복문 : map을 사용해서 반복문 정리(data.json의 데이터를 배열로 받음) 
    // ul에 반복문이 들어가야 되므로 AddInfo에 data.json의 key값과 데이터를 받음
    // appointData.map : json파일은 배열로 사용.
    // item(지정이름) => <AddInfo key값을 {item.id}로 받음
    // appointment : AddInfo에 json데이터를 받기위해 지정해주는 이름
    // appointment = {item} 여기서 item은 json의 데이터들을 지칭

  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);