import styled from 'styled-components';

export const CardWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width: 100%;
    height:100%;
    margin:10px 0;
    transition: all 0.3s linear;

    div {
    background-color: #ddd;
    border-radius:4px;
    }

    .icon {
        width:10rem;
        height:10rem;
        margin-bottom:8rem;
        background-color: #ddd;
        border-radius:50%;
    }

    .title {
        width:200px;
        height:20px;
        margin-bottom: 10px;
    }

    .introduction1 {
        width:180px;
        height:12px;
        margin:5px 0;
    }

    .introduction2 {
        width:220px;
        height:12px;
        margin:5px 0;
    }

    .introduction3 {
        width:130px;
        height:12px;
        margin:5px 0;
    }
`

export const Wrapper = styled.div`
        width:100vw;
        height:30vh;
        display:flex;
        justify-content:center;
        align-items:center;

        div {
            background-color: #ddd;
            border-radius:4px;
        }
        
        .box {
            width:50vw;
            max-width:720px;
            height:20vh;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-flow:column nowrap;
            background-color:#E9E9E9;
        }

        .title {
            width:40vw;
            max-width:600px;
            height:25px;
            margin-bottom: 10px;
        }

        .introduction1 {
            width:35vw;
            max-width:620px;
            height:20px;
            margin:5px 0;
        }

        .introduction2 {
            width:30vw;
            max-width:580px;
            height:20px;
            margin:5px 0;
        }

        .content1 {
            width:38vw;
            max-width:650px;
            height:10px;
            margin:5px 0;
        }

        .content2 {
            width:40vw;
            max-width:670px;
            height:10px;
            margin:5px 0;
        }

        .content3 {
            width:30vw;
            max-width:520px;
            height:10px;
            margin:5px 0;
        }

`