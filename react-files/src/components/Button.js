import React from "react";
import styled from "styled-components";

const Button = props => {
    return (
        <AddButton>{props.btnText}</AddButton>
    )
}

const AddButton = styled.button`
background-color:white;
width:15%;
height:75%;
border:none;
border-radius:.5em;
padding:.5em;
`

export default Button;