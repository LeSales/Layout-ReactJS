import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: #76C7C1;
    width: 100%;
    font-size:62.5%;
    position:fixed;
`

export const Head = styled.div`
    
    display:flex;
    align-items:center;
    justify-content: space-between;
    height:70px;
    max-width:980px;
    width:80vw;
    margin: auto;
`

export const Logo = styled.h2`
    font-size: 2.8rem;
    font-weight: 700;
    color: white;
    width: 150px;
    margin-left: 20px;
    padding: 15px 0;
    transition: all 150ms linear 0s;


    @media (max-width: 980px) {
        font-size:2.1rem;
    }

    @media (max-width: 768px) {
        font-size:1.8rem;
    }

`

export const Menu = styled.ul`
    display: flex;
    list-style: none;
    float: right;
    margin-top: 5px;
    align-items:center;
    flex-flow: row nowrap;

    @media (max-width: 680px) {
        flex-flow: column nowrap;
        font-size:2.8rem;
        background-color:#76C7C1;
        position:fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translate(100%)'};
        top:0;
        right:0;
        height:100vh;
        width:60vw;
        justify-content:center;
        align-items:center;
        transition: transform 0.3s ease-in-out;
    }

`

export const MenuItem = styled.li`
    text-decoration: none;
    color: white;
    font-size: 1.4rem;
    font-weight: 500; 
    padding: 1.2rem;
    transition: all 200ms linear 0s;

    a {
        cursor: pointer;
        text-decoration:none;
        color:#fff;
    }

    :hover {
        background-color:#E95048; 
        border-radius: 5px;
        transition: 250ms;

        ul {
            display: block;
        }
    }


    ul {
        position: absolute;
        display: none;
    }

    ul li{
        text-decoration:none;
        list-style:none;
        padding: 1rem 2rem;
        border-radius:5px;
    }

    ul li:hover{
        background: #76C7C1;
    }

    div {
        background: #E95048;
        display: block;
        border-radius: 10px;
        width: 200px;
        padding: 10px 10px;
        margin-top: 1.5rem;
        border-top-left-radius:0;
    }
    
    @media (max-width: 980px) {
        font-size:1rem;
        padding:1rem;
    }

    @media (max-width: 768px) {
        font-size:0.8rem;
    }

    @media (max-width: 675px) {
        font-size:2rem;
    }

`

export const SandwichButton = styled.div`
    width:2rem;
    height:2rem;
    top: 25px;
    right: 15vw;
    z-index:20;
    display:none;

    @media (max-width: 680px) {
        display:flex;
        justify-content:space-around;
        flex-flow:column nowrap;
    }

    div {
        width: 2rem;
        height: 0.25rem;
        background-color:#FFF;
        border-radius:10px;
        transform-origin:1px;
        transition: all 0.2s linear;

        &:nth-child(1) {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        &:nth-child(2) {
            opacity: ${({ open }) => open ? '0' : '1'};
        }

        &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`