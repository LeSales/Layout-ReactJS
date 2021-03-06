import React from 'react';
import { CardWrapper } from './SkeletonLoading.styles'

function SkeletonCardLoading() {
    return <CardWrapper>
        <div className="title"></div>
        <div className="introduction1"></div>
        <div className="introduction2"></div>
        <div className="introduction3"></div>
    </CardWrapper>
}

export default SkeletonCardLoading;