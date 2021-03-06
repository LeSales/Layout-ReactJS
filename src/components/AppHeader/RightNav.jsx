import React from 'react';
import { Menu, MenuItem } from './AppHeader.styles'
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';

function RightNav({ open }) {

    return <Menu open={open}>
        <MenuItem>
            <Link to="/">HOME</Link>
        </MenuItem>
        <MenuItem>
            <a>ABOUT</a>
        </MenuItem>
        <MenuItem>
            <a>SERVICES</a>
            <ul>
                <div>
                    <li><a>Link1</a></li>
                    <li><a>Link2</a></li>
                    <li><a>Link3</a></li>
                </div>
            </ul>
        </MenuItem>
        <MenuItem>
            <a>PORTFOLIO</a>
            <ul>
                <div>
                    <li><a>Link1</a></li>
                    <li><a>Link2</a></li>
                    <li><a>Link3</a></li>
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
                    <li><a>Link1</a></li>
                    <li><a>Link2</a></li>
                    <li><a>Link3</a></li>
                </div>
            </ul>
        </MenuItem>
        <MenuItem><a>CONTACTS</a></MenuItem>
        <SearchIcon style={{
            color: "#FFF", fontSize: 25, cursor: 'pointer'
        }}>
        </SearchIcon>
    </Menu>

}

export default RightNav;