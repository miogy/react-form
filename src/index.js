import React,{useState,useEffect,useCallback} from 'react';
// 2-1 변경되는 값 설정 - 추가 useState, useEffect(실행값,실행문), useCallback()
// import React from 'react';
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
// import appointData from './data.json'
// json파일 (데이터베이스 정리)가져오기
// appointData: json파일을 import하기위해 지정해주는 이름
// 2-4 import data.json 지우기


function App(){
  // 2-2 useState 설정 'appointmentList'라는 이름으로 지정
  let [appointmentList,setAppointmentList] = useState([])
  
  // 4-1 useState 지정 search에 들어가는 query정리 
  let [query,setQuery] = useState('')
  // 4-2 filterAppointment 지정후 필터값 정리
  const filterAppointment = appointmentList.filter(
  // 4-3 filter값으로 변경될 이름 지정후 반복문에 있는 appointment를 filterAppointment로 변경
    item => {
      // item : data.json의 데이터들
      return (
        item.petName.toLowerCase().includes(query.toLowerCase()) ||
        item.ownerName.toLowerCase().includes(query.toLowerCase())
        // search할때 value값으로 사용할 값들을 지정
        // toLowerCase : 섞여있는 대문자들을 소문자로 변경
        // 4-4 <Search />에 기본값, 변경값 정리
      )
    }
  )
  // 2-2 callback 
  const fetchData = useCallback( () => {
    fetch('./data.json')
    .then(response => response.json())
    .then(data => setAppointmentList(data))
  } , [])
  // 2-2 effect
  useEffect(() => {fetchData()},[fetchData])
  // 2-3 return>ul{appointmentData->appointmentList로 변경}
  return (
    <article>
      <h3>
        <BiArchive style={{color:'#d47776'}}/> 예약시스템
      </h3>
      <AddApointment />
      <div id="list">
      <Search 
      query = {query}
      onQueryChange = { myQuery => setQuery(myQuery)}
      />
        <ul>
          {
            filterAppointment.map( (appointment) => (
              <AddInfo 
              key={appointment.id}
              appointment = {appointment}
              onDelectAppointment = {
                appointmentId => setAppointmentList(appointmentList.filter(
                  appointment => appointment.id !== appointmentId
                ))
              }
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
    // appointment = {item} 여기서 item은 json의 데이터들을 지칭 =>item:appointment

    // 3-1 onDelectAppointment구조만들기
    // 반복문에서 onDelectAppointment설정 appointmentId(변경값이름)를지정후 변경값 설정에서 setAppointmentList.filter값()을 넣어줌 키값(data !== 변경값)

  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);