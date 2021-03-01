import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;    
    width: 100%;
    padding: 20px;
    max-width: 1080px;
    background-color: #E9E9E9;
    justify-content: center;
    align-items: center;
    margin: 60px 0;
`

export const ServiceBoxTitle = styled.h2`
    font-size: 3.4rem;
    line-height: 3.6rem;
    font-weight: 600;
    padding-bottom: 2%;
    color: #707070;
`

export const ServiceBoxInfo = styled.p`
    font-size: 1.7rem;
    color: #707070;
`

export const ServiceBoxButton = styled.a`
    text-align: center;
    white-space: nowrap;
    color: white;
    font-size: 2rem;
    font-weight: 700;
    text-decoration: none;
    background-color: #E95048;
    border-radius: 5px;
    padding:10px 25px;
    box-shadow: 0px 3px 0px 0px #81010184;
    margin-left: 20px;
`