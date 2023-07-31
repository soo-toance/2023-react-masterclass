import styled from "styled-components"
import React from "react"

interface ConatinerProps {
    bgColor: string;
}

const Container = styled.div<ConatinerProps>`
    width: 200px;
    height: 200px;
    background-color: ${props => props.bgColor};
    border-radius: 100px; 
`;

interface CircleProps {
    bgColor: string;
}

function Circle({ bgColor }: CircleProps) {
    return <Container bgColor={bgColor}></Container>
}

export default Circle;