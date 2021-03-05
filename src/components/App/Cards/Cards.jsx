import React, { useEffect, useState } from 'react'
import { CardButton, CardInfo, CardText, CardTitle, Wrapper } from './Cards.styles';

import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import FlagIcon from '@material-ui/icons/Flag';

import {restdb} from '../../../utils/api';

function Cards() {

    const [box1, setBox1] = useState("");
    const [box2, setBox2] = useState("");
    const [box3, setBox3] = useState("");
    const [box4, setBox4] = useState("");

    async function getInfo() {
        await restdb
          .get("/boxes")
          .then((response) => {
            //console.log(response.data);
            setBox1(response.data[0]);
            setBox2(response.data[1]);
            setBox3(response.data[2]);
            setBox4(response.data[3]);
            console.log(box1);
          })
          .catch((error) => {
            console.log(error)
          });
      }

      useEffect(() => {
        getInfo();
      }, []);

      function goPage (page) {
        console.log("/"+page);
      }

    return <Wrapper>
        <CardInfo>
        <ThumbUpAltIcon style={{fontSize:100, color: "#E95048"}}></ThumbUpAltIcon>
        <CardTitle>{box1.title}</CardTitle>
        <CardText>{box1.introduction}</CardText>
        <CardButton onClick={() => goPage(box1.path)} style={{backgroundColor:"#E95048",boxShadow:"0px 3px 0px 0px #81010184"}}>read more</CardButton>
        </CardInfo>

        <CardInfo>
            <VpnKeyIcon style={{fontSize:100, color:"#60C2C1"}}></VpnKeyIcon>
        <CardTitle>{box2.title}</CardTitle>
        <CardText>{box2.introduction}</CardText>
        <CardButton onClick={() => goPage(box2.path)}>read more</CardButton>
        </CardInfo>

        <CardInfo>
        <FlagIcon style={{fontSize:100, color:"#60C2C1"}}></FlagIcon>
        <CardTitle>{box3.title}</CardTitle>
        <CardText>{box3.introduction}</CardText>
        <CardButton onClick={() => goPage(box3.path)}>read more</CardButton>
        </CardInfo>

        <CardInfo>
        <VpnKeyIcon style={{fontSize:100, color:"#60C2C1"}}></VpnKeyIcon>
        <CardTitle>{box4.title}</CardTitle>
        <CardText>{box4.introduction}</CardText>
        <CardButton onClick={() => goPage(box4.path)}>read more</CardButton>
        </CardInfo>
    </Wrapper>
}

export default Cards;