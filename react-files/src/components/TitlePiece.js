import React from "react";
import styled from "styled-components";

const TitlePiece = props =>{
    return(
        <TitleBackground>
        <TitleText>{props.titleText}</TitleText>
        </TitleBackground>
    )
}

const TitleBackground=styled.div`
background: linear-gradient(45deg, #f12711, #f5af19);
width:15%;
border-radius:.5em;
margin:5% 0 2% 15%;
`;

const TitleText=styled.h3`
color:black;
margin-left:1em;
padding:15% 0 15% 0;
`;

export default TitlePiece;