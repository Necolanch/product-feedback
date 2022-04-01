import React, {useState} from "react";
import styled from "styled-components";
import Button from "./Button";

function PostsBoardHeader({sort}) {
    const [sortState, setSortState]=useState("Select sort");

    return (
        <BoardHeader>
            <BoardHeaderTitle>Feedback Posts</BoardHeaderTitle>
            <PostSortLabel>Sort by:</PostSortLabel>
            <SortSelection>{sortState}</SortSelection>
            <PostSort value={sortState} onChange={e=>sort(e.target.value)}>
                <option onClick={e=>setSortState(e.target.value)}>Select sort</option>
                <option onClick={e=>setSortState(e.target.value)}>Most likes</option>
                <option onClick={e=>setSortState(e.target.value)}>Least likes</option>
            </PostSort>
            <Button btnText="Add"></Button>
        </BoardHeader>
    )
}

const BoardHeader = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
background-color:#58130A;
width:45%;
border-radius:.5em;
padding:.5em 1em .5em 1em;
margin-left:33%;
margin-top:-8.75em;
`

const BoardHeaderTitle=styled.p`
color:white;
`

const PostSortLabel=styled.label`
color:white;
`

const SortSelection=styled.p`
color:white;
margin-left:-23%;
`

const PostSort=styled.select`
color:white;
background-color:white;
border:none;
width:2%;
margin-left:-22%;
`

export default PostsBoardHeader;