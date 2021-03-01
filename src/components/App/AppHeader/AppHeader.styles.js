import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: #76C7C1;
    width: 100%;
`

export const Head = styled.div`
    
    display:flex;
    align-items:center;
    justify-content: space-between;
    height:70px;
    max-width:980px;
    margin: auto;
`

export const Logo = styled.h2`
    font-size: 2.8rem;
    font-weight: 700;
    color: white;
    width: 150px;
    margin-left: 20px;
    padding: 15px 0;
`

export const Menu = styled.ul`
    display: flex;
    list-style: none;
    float: right;
    margin-top: 5px;
`

export const MenuItem = styled.li`
    text-decoration: none;
    color: white;
    font-size: 1.4rem;
    font-weight: 500; 
    padding: 1rem;
    transition: all 200ms linear 0s;
`