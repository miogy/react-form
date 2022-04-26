import {useState} from 'react'
import { BiCaretDown, BiSearch } from "react-icons/bi"
//1-1 여러개 연결시 ,로 추가
// import DropDown from './DropDown'
// DropDown파일생성후 가져오기 <search안에 들어가는 항목>

// 안에 DropDown생성해도 된다 추가항목들은 위로 올려야한다.
function DropDown({toggleSort}){
    // toggleSort :받아올이름
    if(!toggleSort){
        return null
    }
    return (
        <ul>
            <li>애기명</li>
            <li>예약자명</li>
            <li>날짜</li>
        </ul>
    )
} 

// search
function Search({query,onQueryChange}){
    let [toggleSort,setToggleSort] = useState(false);
    // 2-1 useState설정 [초기값이름,변경값이름] = useState(false:기본값=보이지않음)
    // 4-1 검색에 {초기값이름,변경값이름}
    // 4-2 onChage사용 event받고 onQueryChange(변경값)->target>value값을 이용할것을 지정
    // 4-3 본부index에 지정된 <search />에 지정값들 정리
    return (
        <div id="search">
            <p>
                <BiSearch />
                <input type="text" 
                placeholder="search"
                value={query}
                onChange={
                    (event) => {onQueryChange(event.target.value)}
                    }
                    />
                <button type="button"
                onClick={()=>{setToggleSort(!toggleSort)}}>정렬하기</button>
                <BiCaretDown />
            </p>
            <DropDown 
            toggleSort = {toggleSort}/>
        </div>
        // 2-2 button에 onClick {()=>변경값}
    )
}
export default Search