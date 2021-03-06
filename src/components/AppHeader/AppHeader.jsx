import React from 'react';
import { Head, Logo, Wrapper } from './AppHeader.styles'
import Sandwich from './Sandwich';


function AppHeader() {
    return <Wrapper>
        <Head>
            <Logo>MODUSversus</Logo>
            <Sandwich />
        </Head>
    </Wrapper>
}

export default AppHeader;
