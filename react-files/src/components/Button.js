import React from "react";
import styled from "styled-components";

const Button = ({btnText, handleForm}) => {
    return (
        <AddButton onClick={handleForm}>{btnText}</AddButton>
    )
}

const PostButton = props =>{
    return(
        <PostButtonStyles>{props.btnText}</PostButtonStyles>
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