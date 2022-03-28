import React, {useState} from "react";
import styled from "styled-components";

import {AiFillLike} from 'react-icons/ai'

const Post = props => {
    const [feedbackData]=useState(props.data);
    const [feedbackTitle]=useState(props.data.title);
    const [feedbackPost]=useState(props.data.body);
    const [feedbackLikes]=useState(props.data.likes);

    return(
        <PostContainer>
        <UpvoteWrapper>
        <Upvote/>
        <UpvoteCounter key={props.id} data={feedbackData}>{feedbackLikes}</UpvoteCounter>
        </UpvoteWrapper>
        <PostTitle key={props.id} data={feedbackData}>{feedbackTitle}</PostTitle>
        <PostBody key={props.id} data={feedbackData}>{feedbackPost}</PostBody>
        </PostContainer>
    )

    
}
const PostContainer=styled.div`
background-color:#F8F7F8;
width:41.90%;
border-radius:.5em;
box-shadow:0 .1em .2em .02em rgba(0, 0, 0, 0.1);
padding:.5em .5em .5em 5em;
margin: .5em 0 1em 33%;
`

const PostTitle=styled.h3`
color:#58130A;
`

const PostBody=styled.p`
font-size:.85em;
`

const UpvoteWrapper=styled.div`
margin:-1.5em 0 0 0;
> * {
    margin 0 0 -4em -3em;
}
`

const Upvote = styled(AiFillLike)`
&:hover {
    fill:orange;
    cursor:pointer;
}
`

const UpvoteCounter=styled.span`
position:relative;
top:4em;
left:.75em;
`

export default Post;