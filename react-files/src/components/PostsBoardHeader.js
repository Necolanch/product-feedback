//import React, {useState, useEffect, useContext} from "react";
//import styled from "styled-components";
//
//import { FeedbackContext } from "../App";
//import Button from "./Button";
//
//const PostsBoardHeader = props => {
//    const feedbackInfo = useContext(FeedbackContext);
//
//    const [feedbackData, setFeedbackData] = useState(feedbackInfo);
//    const [sortState, setSortState]=useState("Select sort");
//
//    useEffect(()=> {
//        const sortByLikes = method => {
//            if(method === "Most likes") {
//            const sorted = [...feedbackData].sort((a,b)=> b.likes-a.likes);
//            console.log(sorted);
//            setFeedbackData(sorted);
//          };
//        };
//    
//        sortByLikes(sortState);
//    }, [sortState])
//
//    return (
//        <BoardHeader>
//            <BoardHeaderTitle>Feedback Posts</BoardHeaderTitle>
//            <PostSortLabel>Sort by:</PostSortLabel>
//            <SortSelection>{sortState}</SortSelection>
//            <PostSort value={sortState} onChange={e=>(e.target.value)}>
//                <option>Select sort</option>
//                <option>Most likes</option>
//                <option>Least likes</option>
//                <option>Most comments</option>
//                <option>Least comments</option>
//            </PostSort>
//            <Button btnText="Add"></Button>
//        </BoardHeader>
//    )
//}
//
//const BoardHeader = styled.div`
//display:flex;
//justify-content:space-between;
//align-items:center;
//background-color:#58130A;
//width:45%;
//border-radius:.5em;
//padding:.5em 1em .5em 1em;
//margin-left:33%;
//margin-top:-8.75em;
//`
//
//const BoardHeaderTitle=styled.p`
//color:white;
//`
//
//const PostSortLabel=styled.label`
//color:white;
//`
//
//const SortSelection=styled.p`
//color:white;
//margin-left:-23%;
//`
//
//const PostSort=styled.select`
//color:white;
//background-color:white;
//border:none;
//width:2%;
//margin-left:-22%;
//`
//
//export default PostsBoardHeader;