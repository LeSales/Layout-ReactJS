import React, { useEffect, useState } from 'react';
import { Wrapper } from './App.styles'
import AppHeader from './AppHeader'
import LandingImg from './LandingImg'
import ServiceBox from './ServiceBox';
import Cards from './Cards';
import Footer from './Footer';

function App () {
    return <Wrapper>
        <AppHeader/>
        <LandingImg/>     
        <ServiceBox/>
        <Cards/>
        <Footer/>   
    </Wrapper>
}

export default App;