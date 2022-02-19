import React from "react";
import { useState } from "react";
import styled from "styled-components";

import Button from "./Button";

const PostsBoardHeader = props => {
    const [sortState, setSortState]=useState("Select sort");

    return (
        <BoardHeader>
            <BoardHeaderTitle>Feedback Posts</BoardHeaderTitle>
            <PostSortLabel>Sort by:</PostSortLabel>
            <SortSelection>{sortState}</SortSelection>
            <PostSort value={sortState} onChange={e=>setSortState(e.target.value)}>
                <option>Select sort</option>
                <option>Most likes</option>
                <option>Least likes</option>
                <option>Most comments</option>
                <option>Least comments</option>
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
width:42%;
border-radius:.5em;
padding:1em;
margin-left:30%;
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
width:2%;
margin-left:-22%;
`

export default PostsBoardHeader;