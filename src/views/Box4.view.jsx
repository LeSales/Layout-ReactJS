import React, {useState, useEffect} from 'react';
import { Wrapper } from '../components/App/App.styles';
import AppHeader from '../components/AppHeader';
import Footer from '../components/Footer';
import LandingImg from '../components/LandingImg';
import ServiceBox from '../components/ServiceBox';
import InfoBox from '../components/InfoBox/InfoBox';
import {restdb} from '../utils/api';

function Box4 () {

    const [box, setBox] = useState("");

    async function getInfo() {
        await restdb
          .get("/boxes")
          .then((response) => {
            setBox(response.data[3]);
          })
          .catch((error) => {
            console.log(error)
          });
      }

      useEffect(() => {
        getInfo();
      }, []);

    return <Wrapper>
        <AppHeader/>
        <LandingImg/>     
        <ServiceBox/>
        <InfoBox 
            title={box.title}
            introduction={box.introduction}
            content={box.content}
        />
        <Footer/>   
    </Wrapper>
}

export default Box4;