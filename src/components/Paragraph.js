import React from 'react'
import styled from 'styled-components';
 

const GreyH1 = styled.h1`
  color: #666;
`;

const Image = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
`;

const Explanation = styled.p`
    color: #666;
    padding: 20px;
`;

export default function Paragraph(props) {
    console.log(props)
    return (
        <div>
            <GreyH1>{props.data.title}</GreyH1>
            <Image src={props.data.hdurl}></Image>
            <Explanation>{props.data.explanation}</Explanation>
        </div>
    )
}
