import { BiTrash } from "react-icons/bi"
// 사용할 아이콘


function AddInfo({appointment,onDelectAppointment}){

    return (
        <li>
        <dl>
            <dt>
                {appointment.petName}
            </dt>
            <dd className="owner">예약자명 :<dfn>
                </dfn>
                {appointment.ownerName}
                </dd>
            <dd className="desc" >
                {appointment.aptNotes}
            </dd>
            <dd className="date" >
                {appointment.aptDate}
            </dd>
        </dl>
        <p>

            <button
            onClick = {() => onDelectAppointment(appointment.id)}
            ><BiTrash /></button>
        </p></li>
        // 1-1 dt에 이름이 들어가므로 appointmernt (json)에 있는 petName가져오기 {appointment.petName}
        // 3-1 delct 아이콘 click => 지우기 (key값으로 반복문의 데이타를 구분함)
        // button 클릭하면 onDelectAppointment(appointment.id:반복문key값) 지워짐 
        // 3-2버튼에 onDelectAppointment지정후 반복문이 있는 index에서 작업

    )
}
export default AddInfo