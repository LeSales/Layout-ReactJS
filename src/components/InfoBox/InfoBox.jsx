import React from 'react';
import { Wrapper } from './InfoBox.styles';


function InfoBox({title, introduction, content}) {
    return <Wrapper>
        <div>
            <h2>{title}</h2>
            <h3>{introduction}</h3>
            <p>{content}</p>
        </div>
    </Wrapper>
}

export default InfoBox;