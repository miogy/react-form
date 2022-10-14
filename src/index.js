import React,{useState,useEffect,useCallback} from 'react';
import ReactDOM from 'react-dom/client';

// component
import AddApointment from './components/AddApointment'
import Search from './components/search'
import AddInfo from "./components/AddInfo"

// source
import { BiArchive } from "react-icons/bi";
import './index.css'

function App(){
  let [appointmentList,setAppointmentList] = useState([])
  
  // 4-1 useState 지정 search에 들어가는 query정리 
  let [query,setQuery] = useState('')
  // 4-2 filterAppointment 지정후 필터값 정리
  // 6-2 sort의정리 sortBy: owenername과petname검색기준 지정 orderBy:오름차순 지정
  let [sortBy,setSortBy] = useState('ownerName')
  let [orderBy,setOrderBy] = useState('asc')
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
  ).sort( (a,b) => {
    let order = (orderBy === 'asc')? 1 : -1 ;
    return(a[sortBy].toLowerCase() < b[sortBy].toLowerCase() ? -1 * order : 1* order)
    // 6-3 조건문 정리
  })

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
      <AddApointment 
      onSendAppointment={ 
        myAppointment => setAppointmentList([...appointmentList,myAppointment])
       }
       lastId = {
         appointmentList.reduce((max,item) => Number(item.id) > max ?Number(item.id) : max ,0)
       }
      />
      <div id="list">

      <Search 
      query = {query}
      onQueryChange = { myQuery => setQuery(myQuery)}
      orderBy = {orderBy}
      sortBy = {sortBy}
      onSortByChange = {mySort => setSortBy(mySort)}
      onOderByChange = {myOrder => setOrderBy(myOrder)}
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