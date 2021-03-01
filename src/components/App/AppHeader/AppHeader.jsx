import React from 'react';
import { Head, Logo, Menu, MenuItem, Wrapper } from './AppHeader.styles'
import SearchIcon from '@material-ui/icons/Search';


function AppHeader() {
    return <Wrapper>
        <Head>
            <Logo>MODUSversus</Logo>
            <Menu>
                <MenuItem>HOME</MenuItem>
                <MenuItem>ABOUT</MenuItem>
                <MenuItem>SERVICES</MenuItem>
                <MenuItem>PORTFOLIO</MenuItem>
                <MenuItem>BLOG</MenuItem>
                <MenuItem>FEATURES</MenuItem>
                <MenuItem>CONTACTS</MenuItem>
                <SearchIcon style={{color:"#FFF", fontSize:20}}>
                </SearchIcon>
            </Menu>
        </Head>
    </Wrapper>
}

export default AppHeader;
