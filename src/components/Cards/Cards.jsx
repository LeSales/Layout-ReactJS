import React, { useEffect, useState } from 'react'
import { CardButton, CardInfo, CardText, CardTitle, Wrapper, linkStyle } from './Cards.styles';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import FlagIcon from '@material-ui/icons/Flag';
import { restdb } from '../../utils/api';
import { Link } from 'react-router-dom';
import SkeletonCardLoading from '../SkeletonLoading'


function Cards() {
  const [box1, setBox1] = useState([]);
  const [box2, setBox2] = useState([]);
  const [box3, setBox3] = useState([]);
  const [box4, setBox4] = useState([]);

  async function getInfo() {
    await restdb
      .get("/boxes")
      .then((response) => {
        
        setBox1(response.data[0]);
        setBox2(response.data[2]);
        setBox3(response.data[3]);
        setBox4(response.data[1]);
      }
        
      )
      .catch((error) => {
        console.log(error)
      });
  }

  useEffect(() => {
    getInfo();
  }, []);

  return <Wrapper>
    <CardInfo>
      <ThumbUpAltIcon style={{ fontSize: 100, color: "#E95048" }}></ThumbUpAltIcon>
      {box1 && (
        <>
          <CardTitle>{box1.title}</CardTitle>
          <CardText>{box1.introduction}</CardText>
        </>
      )}

      {!box1 && (
        <>
          <SkeletonCardLoading />
        </>
      )}
      <CardButton style={{ backgroundColor: "#E95048", boxShadow: "0px 3px 0px 0px #81010184" }}>
        <Link to="/box1" style={linkStyle}>read more</Link>
      </CardButton>
    </CardInfo>

    <CardInfo>
      <VpnKeyIcon style={{ fontSize: 100, color: "#60C2C1" }}></VpnKeyIcon>
      {box2 && (
        <>
          <CardTitle>{box2.title}</CardTitle>
          <CardText>{box2.introduction}</CardText>
        </>
      )}

      {!box2 && (
        <>
          <SkeletonCardLoading />
        </>
      )}
      <CardButton>
        <Link to="/box2" style={linkStyle}>read more</Link>
      </CardButton>
    </CardInfo>

    <CardInfo>
      <FlagIcon style={{ fontSize: 100, color: "#60C2C1" }}></FlagIcon>
      {box3 && (
        <>
          <CardTitle>{box3.title}</CardTitle>
          <CardText>{box3.introduction}</CardText>
        </>
      )}

      {!box3 && (
        <>
          <SkeletonCardLoading />
        </>
      )}
      <CardButton>
        <Link to="/box3" style={linkStyle}>read more</Link>
      </CardButton>
    </CardInfo>

    <CardInfo>
      <VpnKeyIcon style={{ fontSize: 100, color: "#60C2C1" }}></VpnKeyIcon>
      {box4 && (
        <>
          <CardTitle>{box4.title}</CardTitle>
          <CardText>{box4.introduction}</CardText>
        </>
      )}

      {!box4 && (
        <>
          <SkeletonCardLoading />
        </>
      )}
      <CardButton>
        <Link to="/box4" style={linkStyle}>read more</Link>
      </CardButton>
    </CardInfo>
  </Wrapper>
}

export default Cards;