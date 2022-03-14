import React, {useState} from "react";
import styled from "styled-components";

const Post = props => {
    const [feedbackData]=useState(props.data);
    const [feedbackTitle]=useState(props.data.title);
    const [feedbackPost]=useState(props.data.body);

    return(
        <PostContainer>
        <PostTitle key={props.id} data={feedbackData}>{feedbackTitle}</PostTitle>
        <PostBody key={props.id} data={feedbackData}>{feedbackPost}</PostBody>
        </PostContainer>
    )

    
}
const PostContainer=styled.div`
background-color:#F8F7F8;
width:42%;
border-radius:.5em;
box-shadow:0 .1em .2em .02em rgba(0, 0, 0, 0.2);
padding:.5em;
margin: .5em 0 1em 35.5%;
`

const PostTitle=styled.h3`
color:#58130A;
`

const PostBody=styled.p`
font-size:.85em;
`

export default Post;