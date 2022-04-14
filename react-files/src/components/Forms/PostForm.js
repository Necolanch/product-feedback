import React from "react";
import styled from "styled-components";

import {PostButton} from "../Button";
import { RiCloseFill } from "react-icons/ri";


function PostForm({closeForm}) {
  return (
    <PostFormBackground>
      <PostFormContainer>
        <Close onClick={closeForm}/>
        <PostFormTitle>Give Feedback</PostFormTitle>
        <PostFormTitleInput placeholder="Title"></PostFormTitleInput>
        <PostFormBody placeholder="Feedback"></PostFormBody>
        <PostButton btnText="Post"></PostButton>
      </PostFormContainer>
    </PostFormBackground>
  );
}

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

export { PostForm };
