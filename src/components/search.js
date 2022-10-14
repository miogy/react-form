
import {useState} from 'react'
import { BiCaretDown, BiSearch,BiCheck } from "react-icons/bi"
//1-1 여러개 연결시 ,로 추가
// 6-1 준비 아이콘추가
// 안에 추가컴포넌트들은 위로 올려야한다.
function DropDown({toggleSort,sortBy,onSortByChange,orderBy,onOderByChange}){
    // 6-4 아래 지정된이름을 받는다 : 받을 이름 정리sortBy,onSortByChange,orderBy,onOderByChange
    // toggleSort :받아올이름
    if(!toggleSort){
        return null
    }

    return (
        <ul>
            <li
            onClick = {()=>{onSortByChange('petName')}}
            >애기명
               {(sortBy === 'petName') && <BiCheck />} </li>
            <li
            onClick = {()=>{onSortByChange('ownerName')}}
            >예약자명
            {(sortBy === 'ownerName') && <BiCheck />} </li>
            <li
            onClick = {()=>{onSortByChange('aptDate')}}
            >날짜
            {(sortBy === 'aptDate') && <BiCheck />}</li>
            <li
            onClick = {()=>{onOderByChange('asc')}}
            >올림차순
            {(orderBy === 'asc') && <BiCheck />}</li>
            <li
            onClick = {()=>{onOderByChange('desc')}}
            >내림차순
            {(orderBy === 'desc') && <BiCheck />}</li>
        </ul>
        // 6-1 준비 list올림내림추가 + 아이콘넣기
        // 6-2 sort의정리 sortBy: owenername과petname같은 검색기준 지정 orderBy:오름차순 내림차순 검색기준 지정
        // 6-4 li에 적용될 onClick정리 오름내림차순에asc와desc는주로쓰는이름 -> index>search에 정리해줌
        // 6-5 마지막으로 정리 index끝내고 {(orderBy === 'asc') && <BiCheck />}각 lli에 정리해줌
    )
} 

// search
function Search({query,onQueryChange,sortBy,onSortByChange,orderBy,onOderByChange}){
    // 6-3 function에 sortBy,onSortByChange,orderBy,onOderByChange추가
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
            toggleSort = {toggleSort}

            // 6-4 위에 받을 이름 지정 정리
            sortBy = {sortBy}
            orderBy = {orderBy}
            onSortByChange = {mySort => onSortByChange(mySort)}
            onOderByChange = {myOrder => onOderByChange(myOrder)}
            />
        </div>
//2-2button onClick=setToggleSort(!toggleSort)!이므로 true가 적용되어리스트가 보임
    )
}
export default Search