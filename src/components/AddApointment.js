import { useState } from 'react';
import { Fragment } from "react";
import { BiCalendarPlus } from "react-icons/bi";

function AddWrite({toggleForm,formData,setFormData,formDataPublish}){

    // formData,setFormData,formDataPublish 데이터 받아오기

    if(!toggleForm){
        return null
    }
    return (
        <>
             <ul>
                <li>
                    <label htmlFor="userName">집사명</label>
                    <input 
                    type="text" id="userName"
                    onChange={(event) => {
                        setFormData({...formData,ownerName:event.target.value})
                    }}
                    />
                </li>
                <li>
                    <label htmlFor="userCildren">애기명</label>
                    <input 
                    type="text" id="userCildren" 
                    onChange={(event) => {
                        setFormData({...formData,petName:event.target.value})
                    }}
                    />
                </li>
                <li>
                    <label htmlFor="userDate">예약일</label>
                    <input 
                    type="date" id="userDate" 
                    onChange={(event) => {
                        setFormData({...formData,aptDate:event.target.value})
                    }}
                    />
                </li>
                <li>
                    <label htmlFor="userTime">예약시간</label>
                    <input 
                    type="time" id="userTime"
                    onChange={(event) => {
                        setFormData({...formData,aptTime:event.target.value})
                    }}
                    />
                </li>
                <li>
                    <label htmlFor="userDes">기타설명</label>
                    <textarea cols="30" 
                    rows="10" 
                    placeholder="기타설명"
                    id="userDes"
                    onChange={(event) => {
                        setFormData({...formData,aptNotes:event.target.value})
                    }}
                    ></textarea>
                </li>
            </ul>
            <p>
                <button type="submit"
                onClick={formDataPublish}>
                    예약하기
                </button>
            </p>
        </>
    )
}


function AddApointment({onSendAppointment,lastId}){

    // 5-2 객체가 많으므로 불러올 배열을 만들어줌 (data.json참고)
    const clearData = {
        petName : '',
        ownerName : '',
        aptNotes : '',
        aptDate: ''
    }


    let [toggleForm,setToggleForm] = useState(false);
    // 5-1 form 데이터 생성
    let [formData,setFormData] = useState(clearData);

    // 5-1 formDataPubllish지정

    function formDataPublish(){
        const formDataInfo ={
            id : lastId +1 ,
            petName: formData.petName,
            ownerName: formData.ownerName,
            aptNotes: formData.aptNotes,
            aptDate: formData.aptDate +' '+formData.aptTime
        }
        onSendAppointment(formDataInfo)
        setFormData(clearData)
        setToggleForm(!toggleForm)
    }

    return (
        <div id="appoint">
            <h4 onClick={()=>{setToggleForm(!toggleForm)}}>
                <BiCalendarPlus/> 예약하기
            </h4>

            <p>

                <AddWrite 
                toggleForm = {toggleForm}

                formData = {formData}
                formDataPublish = {formDataPublish}
                setFormData = {setFormData}
                />

            </p>

            

           
        </div>
    )
}
export default AddApointment
// 논리연산자 -> true,false값이 아닌 &&연산자로도 사용
// ex) toggleForm && <AddWrite />