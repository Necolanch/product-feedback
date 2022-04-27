import React, {useContext} from "react";
import styled from "styled-components";

import { PostContext } from "../contexts/posts";

const Button = ({btnText}) => {
    const {postingStatus} = useContext(PostContext);

    return (
        <AddButton onClick={postingStatus}>{btnText}</AddButton>
    )
}

const PostButton = ({btnText, addPost}) =>{
    return(
        <PostButtonStyles type="submit" onClick={addPost}>{btnText}</PostButtonStyles>
    )
}

const AddButton = styled.button`
background-color:white;
width:15%;
height:75%;
border:none;
border-radius:.5em;
padding:.5em;
&:hover{
    background-color:grey;
    cursor:pointer;
}
`

const PostButtonStyles = styled.button`
background-color:white;
width:15%;
height:2em;
border:none;
border-radius:.5em;
padding:.5em;
margin-right:-30em;
&:hover{
    background-color:#F5AF19;
    cursor:pointer;
}
`

export {Button, PostButton};