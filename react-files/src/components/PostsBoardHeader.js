import React, {useState} from "react";
import styled from "styled-components";
import Button from "./Button";

function PostsBoardHeader({sort}) {
    const [sortState, setSortState]=useState("Select sort");

    return (
        <BoardHeader>
            <BoardHeaderTitle>Feedback Posts</BoardHeaderTitle>
            <PostSortLabel>Sort by:</PostSortLabel>
            <PostSort value={sortState} onChange={e=>sort(e.target.value)}>
                <option className="sortOption" onClick={e=>setSortState(e.target.value)}>Select sort</option>
                <option className="sortOption" onClick={e=>setSortState(e.target.value)}>Most likes</option>
                <option className="sortOption" onClick={e=>setSortState(e.target.value)}>Least likes</option>
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
color:#E0DFE0;
margin-right:-12%;
`

const PostSort=styled.select`
color:white;
font-size:1em;
font-weight:700;
background-color:#58130A;
border:none;
margin-right:22%;
&:hover{
    cursor:pointer;
}
`

export default PostsBoardHeader;