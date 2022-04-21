import { BiTrash } from "react-icons/bi"
// 사용할 아이콘

function AddInfo(){
    return (
        <li>
        <dl>
            <dt>이름</dt>
            <dd className="owner">예약자명 :<dfn>
                </dfn>
                </dd>
            <dd className="desc" >설명</dd>
            <dd className="date" >날짜</dd>
        </dl>
        <p>
            <button><BiTrash /></button>
        </p></li>
    )
}
export default AddInfo