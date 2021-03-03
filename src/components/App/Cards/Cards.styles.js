import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 90%;
    max-width: 1080px;
    margin: auto;
    margin-bottom: 10%;
  
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-row-gap: 50px;
`

export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease 0s;
    color: #707070;
    align-items: center;
    justify-content: space-between;
`

export const CardTitle = styled.h2`
    font-size: 2.2rem; 
    font-weight: 700; 
    margin-top: 5%;
    color: #707070;
`
export const CardText = styled.p`
    font-size: 1.7rem; 
    font-weight: 400;
    height:9rem; 
    max-width:100%;
    margin-top: 5%; 
    padding: 0px 30px;
    margin-bottom:5%; 
    text-align: center;
    overflow:hidden;
    overflow-wrap:break-word;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
`

export const CardButton = styled.a`
    border:none;
    cursor: pointer;
    display: inline-block;
    text-align: center;
    padding: 5% 20%;
    border-radius: 5px;
    color: white;
    font-size: 2rem;
    font-weight: 600;
    background-color: #60C2C1;
    box-shadow: 0px 3px 0px 0px #60C2C184;
    text-decoration: none;
`