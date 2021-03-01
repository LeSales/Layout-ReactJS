import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;
    background: rgba(0,0,0,0.1) url(../../../assets/cidade-e-municipio-og.jpg) no-repeat;
    background-position: center;
    background-size: cover;
    overflow: hidden;
    background-blend-mode: overlay;
`

export const Vestibulum = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #E95048;
    color: white;
    border-radius: 3px;
    min-width: 250px;
    max-width: 430px;
    width: 30vw;
    height: 66px;
    font-size: 6.2rem;
    font-weight: bold;
    margin-bottom: 10px;
`

export const LandingImgInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    background-color: #00000040;
    color: white;
    border-radius: 3px;
    min-width: 280px;
    width: 40vw;
    height: 90px;
    font-size: 1.8rem;
    font-weight: 600;
    text-align: center;
    padding: 10px;
`