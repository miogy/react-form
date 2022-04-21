import { BiTrash } from "react-icons/bi"
// 사용할 아이콘

function AddInfo({appointment}){
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
            <button><BiTrash /></button>
        </p></li>
        // dt에 이름이 들어가므로 appointmernt (json)에 있는 petName가져오기 {appointment.petName}
    )
}
export default AddInfo