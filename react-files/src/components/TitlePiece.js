import React from "react";
import styled from "styled-components";

const TitlePiece = props =>{
    return(
        <TitleText>{props.titleText}</TitleText>
    )
}

export default TitlePiece;

const TitleText=styled.h1`
color:black;
`;