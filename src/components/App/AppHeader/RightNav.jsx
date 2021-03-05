import React from 'react';
import {Menu, MenuItem} from './AppHeader.styles'
import SearchIcon from '@material-ui/icons/Search';

function RightNav  ({open}) {

    return <Menu open={open}>
    <MenuItem>
        <a href="#">HOME</a>
    </MenuItem>
    <MenuItem>
        <a href="#">ABOUT</a>
    </MenuItem>
    <MenuItem>
        <a>SERVICES</a>
        <ul>
        <div>
            <li><a href="#">Link1</a></li>
            <li><a href="#">Link2</a></li>
            <li><a href="#">Link3</a></li>
        </div>
    </ul>
    </MenuItem>
    <MenuItem>
        <a>PORTFOLIO</a>
        <ul>
        <div>
            <li><a href="#">Link1</a></li>
            <li><a href="#">Link2</a></li>
            <li><a href="#">Link3</a></li>
        </div>
    </ul>
    </MenuItem>
    <MenuItem>
        <a>BLOG</a>
    </MenuItem>
    <MenuItem>
        <a>FEATURES</a>
        <ul>
        <div>
            <li><a href="#">Link1</a></li>
            <li><a href="#">Link2</a></li>
            <li><a href="#">Link3</a></li>
        </div>
    </ul>
    </MenuItem>
    <MenuItem><a>CONTACTS</a></MenuItem>
    <SearchIcon style={{
        color:"#FFF", fontSize:25, cursor:'pointer'}}>
    </SearchIcon>
</Menu>
    
}

export default RightNav;