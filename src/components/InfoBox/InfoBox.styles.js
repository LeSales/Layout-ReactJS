import styled from 'styled-components';

export const Wrapper = styled.div`
    width:100vw;
    height:30vh;
    display:flex;
    justify-content:center;
    align-items:center;

    div {
        width:50vw;
        max-width:720px;
        height:20vh;
        display:flex;
        align-items:center;
        justify-content:center;
        flex-flow:column nowrap;
        background-color:#E9E9E9;
    }

    h2 {
        font-size: 3.2rem;
        line-height: 3.6rem;
        font-weight: 600;
        padding-bottom: 2%;
        color: #707070;
    }

    h3 {
        font-size: 2.5rem;
        font-weight: 500;
        padding-bottom: 2%;
        color: #707070;
    }

    p {
        font-size: 2rem;
        font-weight: 400;
        padding-bottom: 2%;
        color: #707070;
    }
`;