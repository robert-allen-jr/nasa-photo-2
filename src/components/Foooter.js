import React from 'react'
import styled from 'styled-components';

const DateFooter = styled.p`
  color: #666;
  background-color: #000062;
  position: aboslute;
  margin: 0;
  bottom: 0;
  padding: 10px;
`;

export default function Foooter(props) {
    return (
        
        <div>
            <DateFooter>{props.data.date}</DateFooter>
        </div>
    )
}
