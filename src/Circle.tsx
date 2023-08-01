import styled from "styled-components"
import React, { useState } from "react"

interface ConatinerProps {
    bgColor: string;
    borderColor: string;
}

const Container = styled.div<ConatinerProps>`
    width: 200px;
    height: 200px;
    background-color: ${props => props.bgColor};
    border-radius: 100px; 
    border: 5px solid ${props => props.borderColor};
`;

interface CircleProps {
    bgColor: string;
    borderColor?: string;
    text?: string;
}

 /* ? 통해 optional 가능 혹은 string | undefined */

function Circle({ bgColor, borderColor, text = "default text"}: CircleProps) {
    const [value, setValue] = useState<number|string>(); // number이거나 string일때 이렇게 지정하면됨 
    return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} >{text}</Container>
}

export default Circle;