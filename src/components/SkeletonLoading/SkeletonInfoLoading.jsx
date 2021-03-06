import React from 'react';
import {Wrapper} from './SkeletonLoading.styles'

function SkeletonInfoLoading({ type }) {

    const classes = `skeleton ${type}`;

    return <Wrapper>
        <div className="box">
            <div className="title"></div>
            <div className="introduction1"></div>
            <div className="introduction3"></div>
            <div className="content1"></div>
            <div className="content2"></div>
            <div className="content3"></div>
        </div>
    </Wrapper>
    
}

export default SkeletonInfoLoading;