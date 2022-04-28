import {useState} from 'react'
import { BiCaretDown, BiSearch } from "react-icons/bi"
//1-1 여러개 연결시 ,로 추가

// 안에 추가컴포넌트들은 위로 올려야한다.
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
    // 2-2 적용할 button에 변경값적용 
    
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
//2-2button onClick=setToggleSort(!toggleSort)!이므로 true가 적용되어리스트가 보임
    )
}
export default Search