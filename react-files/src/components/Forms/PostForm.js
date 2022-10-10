// Imports
import React, { useRef, useContext} from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import {PostButton, EditPostButton} from "../Button";
import { RiCloseFill } from "react-icons/ri";

import { PostContext } from "../../contexts/posts";

// Global Variables
let newPost = null;

// Component Logi
const PostForm = () => {
  const {feedbackData, setFeedbackData, closePostForm, sort} = useContext(PostContext);

  const titleRef = useRef(null);
  const bodyRef=useRef(null);

  const addPost = (e) => {
    e.preventDefault();
    const titleValue = titleRef.current.value;
    const bodyValue = bodyRef.current.value;

    newPost={
      id:uuidv4(),
      title:titleValue,
      body:bodyValue,
      likes:0
    }
    if (sort === "Most likes") {
      setFeedbackData([...feedbackData, newPost]);
    } else{setFeedbackData([newPost, ...feedbackData])};
    bodyRef.current.value = "";
    titleRef.current.value = "";
    closePostForm(e);
  }

  return (
    <PostFormBackground>
      <PostFormContainer onSubmit={(e)=>addPost(e)}>
        <Close onClick={closePostForm}/>
        <PostFormTitle>Give Feedback</PostFormTitle>
        <PostFormTitleInput className="title" ref={titleRef} placeholder="Title" required/>
        <PostFormBody className="body" ref={bodyRef} placeholder="Feedback" required></PostFormBody>
        <PostButton btnText="Post"></PostButton>
      </PostFormContainer>
      <Error className="error">Please fill out both forms</Error>
    </PostFormBackground>
  );
}

const EditPostForm = () => {
  const {feedbackData, setFeedbackData, closePostForm, editPostId, setEdited} = useContext(PostContext);

  const editTitleRef = useRef(null);
  const editBodyRef=useRef(null);
  
  const editPost = (e) => {
    e.preventDefault();
    setEdited(true);
    const editTitleValue = editTitleRef.current.value;
    const editBodyValue = editBodyRef.current.value;
    const newDataMap = feedbackData.map((data)=>{
      if (data.id===editPostId) {
        data.title=editTitleValue;
        data.body=editBodyValue;
      }
      return data;
    })
    setFeedbackData([...newDataMap]);
    closePostForm(e);
  }

  return (
    <PostFormBackground>
      <PostFormContainer onSubmit={e=>editPost(e)}>
        <Close onClick={closePostForm}/>
        <PostFormTitle>Edit Feedback</PostFormTitle>
        <EditPostFormTitleInput ref={editTitleRef} placeholder="Title" required></EditPostFormTitleInput>
        <EditPostFormBody ref={editBodyRef} placeholder="Feedback" required></EditPostFormBody>
        <EditPostButton btnText="Edit"></EditPostButton>
      </PostFormContainer>
    </PostFormBackground>
  );
}

// Styled Components
const PostFormBackground = styled.div`
  background-color: rgba(0,0,0,0.7);
  z-index:9999;
  width:100vw;
  height:750vw;
  position:absolute;
  top:0;
`;

const PostFormContainer = styled.form`
  background-color: #212121;
  width:35%;
  height:30em;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  border-radius:1em;
  padding:1em;
  box-shadow: 0 .02em .5em 0px #212121;
  margin:10em 0 0 37em;
`;

const PostFormTitle = styled.h1`
color:#EC7D10;
`;

const PostFormTitleInput = styled.input`
  border-radius: 0.5em;
  border:solid;
  border-color:#F5AF19;
  width:72%;
  margin-bottom:1em;
  padding:.5em;
  background-color:#212121;
  color:white;
  font-size:20px;
  font-weight: 700;
  outline:none;
`;

const PostFormBody = styled.textarea`
  border: none;
  border-radius: 0.5em;
  width:90%;
  height:50%;
  margin-bottom:2em;
  padding:1em;
  background-color:#212121;
  color:white;
  resize:none;
  outline:none;
`;

const EditPostFormTitleInput = styled.input`
  border-radius: 0.5em;
  border:solid;
  border-color:#F5AF19;
  width:72%;
  margin-bottom:1em;
  padding:.5em;
  background-color:#212121;
  color:white;
  font-size:20px;
  font-weight: 700;
  outline:none;
`;

const EditPostFormBody = styled.textarea`
  border: none;
  border-radius: 0.5em;
  width:90%;
  height:50%;
  margin-bottom:2em;
  padding:1em;
  background-color:#212121;
  color:white;
  resize:none;
  outline:none;
`;

const Error = styled.p`
color:red;
text-align:center;
visibility:hidden;
`

const Close = styled(RiCloseFill)`
position:relative;
top:1em;
right:17.5em;
transform:scale(2);
fill:white;
&:hover{
  fill:#F5AF19;
  cursor:pointer;
}
`

export { PostForm, EditPostForm };