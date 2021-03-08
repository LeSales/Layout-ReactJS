import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;
    background: rgba(0,0,0,0.1) url('https://www.stx.ox.ac.uk/sites/default/files/stx/images/media/gettyimages-538096543_medium.jpg') no-repeat;
    background-position: center;
    background-size: cover;
    overflow: hidden;
    background-blend-mode: overlay;

    .vestibulum{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #E95048;
        color: white;
        border-radius: 3px;
        min-width: 350px;
        max-width: 430px;
        width: 30vw;
        height: 66px;
        font-size: 5.5rem;
        font-weight: bold;
        margin-bottom: 10px;
        transition: all 200ms linear 0s;
    }

    .vestibulum--Info {
        display: flex;
        justify-content: center;
        align-items: center; 
        background-color: #00000040;
        color: white;
        border-radius: 3px;
        min-width: 400px;
        width: 40vw;
        height: 90px;
        font-size: 1.8rem;
        font-weight: 600;
        text-align: center;
        padding: 10px;
        transition: all 200ms linear 0s;
    }

    @media (max-width: 768px) {
        .vestibulum {
            font-size:4.8rem;
            height:60px;
            min-width:300px;
        }
    }

    @media (max-width: 520px) {
        .vestibulum {
            font-size:3.6rem;
            height:55px;
        }

        .vestibulum--Info {
            min-width:80vw;
        }
    }
`