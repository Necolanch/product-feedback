import React from "react";
import styled from "styled-components";

const TitlePiece = props =>{
    return(
        <TitleBackground>
        <TitleText>{props.titleText}</TitleText>
        </TitleBackground>
    )
}

export default TitlePiece;

const TitleBackground=styled.div`
background: linear-gradient(45deg, #f12711, #f5af19);
width:15%;
border-radius:.25em;
margin:5% 0 0 5%;
`;

const TitleText=styled.h3`
color:black;
margin-left:1em;
padding:15% 0 15% 0;
`;