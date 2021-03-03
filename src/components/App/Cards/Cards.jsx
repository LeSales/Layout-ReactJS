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
            const {
                box1,
                box2,
                box3,
                box4
            } = response.data;
            console.log(response.data);
            setBox1(box1);
            setBox2(box2);
            setBox3(box3);
            setBox4(box4);
          })
          .catch((error) => {
            console.log(error)
          });
      }

      useEffect(() => {
        getInfo();
      }, []);

    return <Wrapper>
        <CardInfo>
        <ThumbUpAltIcon style={{fontSize:100, color: "#E95048"}}></ThumbUpAltIcon>
        <CardTitle></CardTitle>
        <CardText>
            Qui QuiQuiQuiQui Qui QuiQuiQui Qui QuiQuiQui Qui Qui QuiQuiQuiQuiQuiQuiQuiQuiQuiQuiQuiQuiQuiQuiQuiQuiQuiQuiQuiQuiQuiQuiQuiQuiQui
        </CardText>
        <CardButton onClick={() => {console.log("click!!!")}} style={{backgroundColor:"#E95048",boxShadow:"0px 3px 0px 0px #81010184"}}>read more</CardButton>
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