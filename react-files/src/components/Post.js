import React, {useState} from "react";
import styled from "styled-components";

const Post = props => {
    const [feedbackData]=useState(props.data);
    const [feedbackTitle]=useState(props.data.title);

    return(
        <PostTitle key={props.id} data={feedbackData}>{feedbackTitle}</PostTitle>
    )

    
}

const PostTitle=styled.h1`
color:blue;
`

export default Post;