import { BiCaretDown, BiSearch } from "react-icons/bi"
// import DropDown from './DropDown'
// DropDown파일생성후 가져오기 <search안에 들어가는 항목>

// 안에 DropDown생성해도 된다 추가항목들은 위로 올려야한다.
function DropDown(){
    return (
        <ul>
            <li>애기명</li>
            <li>예약자명</li>
            <li>날짜</li>
        </ul>
    )
} 

// search
function Search(){
    return (
        <div id="search">
            <p>
                <BiSearch />
                <input type="text" placeholder="검색"/>
                <button type="button">정렬하기</button>
                <BiCaretDown />
            </p>
            <DropDown />
        </div>
    )
}
export default Search