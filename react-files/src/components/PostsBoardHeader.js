import React, { useState } from "react";
import styled from "styled-components";

import {Button} from "./Button";
import {PostForm} from "./Forms/PostForm";

function PostsBoardHeader({ sort }) {
  const [sortState, setSortState] = useState("Select sort");

  const [posting, setPosting] = useState(false);

  const postingStatus = (e) =>{
    e.preventDefault();
    setPosting(true);
    const seeForm = {postDisplay:{visibility:"visible"}}
    Object.assign(styles, seeForm);
  }

  const closePostForm = (e)=>{
    e.preventDefault();
    setPosting(false);
    const exitForm = {postDisplay:{visibility:"hidden"}};
    Object.assign(styles, exitForm);
  }

  return (
    <div>
      <div style={styles.postDisplay}>
        <PostForm closeForm={closePostForm}></PostForm>
      </div>
      <BoardHeader>
        <BoardHeaderTitle>Feedback Posts</BoardHeaderTitle>
        <PostSortLabel>Sort by:</PostSortLabel>
        <PostSort value={sortState} onChange={(e) => sort(e.target.value)}>
          <option className="sortOption" onClick={(e) => setSortState(e.target.value)}>
            Select sort
          </option>
          <option className="sortOption" onClick={(e) => setSortState(e.target.value)}>
            Most likes
          </option>
          <option className="sortOption" onClick={(e) => setSortState(e.target.value)}>
            Least likes
          </option>
        </PostSort>
        <Button handleForm={postingStatus} btnText="Add"></Button>
      </BoardHeader>
    </div>
  );
}

const BoardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #58130a;
  width: 45%;
  border-radius: 0.5em;
  padding: 0.5em 1em 0.5em 1em;
  margin-left: 33%;
  margin-top: -8.75em;
`;

const BoardHeaderTitle = styled.p`
  color: white;
`;

const PostSortLabel = styled.label`
  color: #e0dfe0;
  margin-right: -12%;
`;

const PostSort = styled.select`
  color: white;
  font-size: 1em;
  font-weight: 700;
  background-color: #58130a;
  border: none;
  margin-right: 22%;
  &:hover {
    cursor: pointer;
  }
`;

let styles = {
  postDisplay:{
    visibility:"hidden",
  }
}

export default PostsBoardHeader;
