import React from 'react'
import { CardButton, CardInfo, CardText, CardTitle, Wrapper } from './Cards.styles';

import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import FlagIcon from '@material-ui/icons/Flag';

function Cards() {
    return <Wrapper>
        <CardInfo>
        <ThumbUpAltIcon style={{fontSize:100, color: "#E95048"}}></ThumbUpAltIcon>
        <CardTitle>SUSPENDISSE</CardTitle>
        <CardText>
            Quisque id tellus quis risus vehicula
            vehicula ut turpis. In eros nulla, placerat
            vitae at, vehicula ut nunc.
        </CardText>
        <CardButton style={{backgroundColor:"#E95048",boxShadow:"0px 3px 0px 0px #81010184"}}>read more</CardButton>
        </CardInfo>

        <CardInfo>
            <VpnKeyIcon style={{fontSize:100, color:"#60C2C1"}}></VpnKeyIcon>
        <CardTitle>MAECENAS</CardTitle>
        <CardText>
            Quisque id tellus quis risus vehicula
            vehicula ut turpis. In eros nulla, placerat
            vitae at, vehicula ut nunc.
        </CardText>
        <CardButton>read more</CardButton>
        </CardInfo>

        <CardInfo>
        <FlagIcon style={{fontSize:100, color:"#60C2C1"}}></FlagIcon>
        <CardTitle>ALIQUAM</CardTitle>
        <CardText>
            Quisque id tellus quis risus vehicula
            vehicula ut turpis. In eros nulla, placerat
            vitae at, vehicula ut nunc.
        </CardText>
        <CardButton>read more</CardButton>
        </CardInfo>

        <CardInfo>
        <VpnKeyIcon style={{fontSize:100, color:"#60C2C1"}}></VpnKeyIcon>
        <CardTitle>HABITASSE</CardTitle>
        <CardText>
            Quisque id tellus quis risus vehicula
            vehicula ut turpis. In eros nulla, placerat
            vitae at, vehicula ut nunc.
        </CardText>
        <CardButton>read more</CardButton>
        </CardInfo>
    </Wrapper>
}

export default Cards;