import React from "react";
import styled from "styled-components";
import {PostButton} from "../Button";

function PostForm() {
  return (
    <PostFormBackground>
      <PostFormContainer>
        <PostFormTitle>Give feedback</PostFormTitle>
        <PostFormTitleInput placeholder="Title"></PostFormTitleInput>
        <PostFormBody placeholder="Feedback"></PostFormBody>
        <PostButton btnText="Post"></PostButton>
      </PostFormContainer>
    </PostFormBackground>
  );
}

const PostFormBackground = styled.div`
  background-color: rgba(0,0,0,0.9);
  z-index:9999;
  width:100vw;
  height:750vw;
  position:absolute;
  top:0;
`;

const PostFormContainer = styled.form`
  background-color: #58130a;
  width:35%;
  height:30em;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  border-radius:1em;
`;

const PostFormTitle = styled.h1``;

const PostFormTitleInput = styled.input`
  border: none;
  border-radius: 0.5em;
`;

const PostFormBody = styled.textarea`
  border: none;
  border-radius: 0.5em;
`;

export { PostForm };
