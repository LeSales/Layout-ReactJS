import React, { useEffect, useState } from "react";
import {
  CardButton,
  CardInfo,
  CardText,
  CardTitle,
  Wrapper,
  linkStyle,
} from "./Cards.styles";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import FlagIcon from "@material-ui/icons/Flag";
import { restdb } from "../../utils/api";
import { Link } from "react-router-dom";
import SkeletonCardLoading from "../SkeletonLoading";

function Cards() {
  const [boxs, setBoxs] = useState([]);

  async function getInfo() {
    await restdb
      .get("/boxes")
      .then((response) => {
        setBoxs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getInfo();
  }, []);

  let listaBoxes = boxs.map((box) => (
    <CardInfo key={box.path}>
      {box.path === "/box1" ? (
        <ThumbUpAltIcon
          style={{
            fontSize: 100,
            color: "#E95048",
          }}
        ></ThumbUpAltIcon>
      ) : null}

      {box.path === "/box2" ? (
        <VpnKeyIcon style={{ fontSize: 100, color: "#60C2C1" }}></VpnKeyIcon>
      ) : null}

      {box.path === "/box3" ? (
        <FlagIcon style={{ fontSize: 100, color: "#60C2C1" }}></FlagIcon>
      ) : null}

      {box.path === "/box4" ? (
        <VpnKeyIcon style={{ fontSize: 100, color: "#60C2C1" }}></VpnKeyIcon>
      ) : null}

      {box ===[] ? (
        <SkeletonCardLoading />
      ) : (
        <>
          <CardTitle>{box.title}</CardTitle>
          <CardText>{box.introduction}</CardText>
        </>
      )}

      <CardButton
        style={{
          backgroundColor: box.path === "/box1" ? "#E95048" : "#60C2C1",
          boxShadow:
            box.path === "/box1"
              ? "0px 3px 0px 0px #81010184"
              : "0px 3px 0px 0px #60C2C1",
        }}
      >
        <Link to={box.path} style={linkStyle}>
          read more
        </Link>
      </CardButton>
    </CardInfo>
  ));

  return <Wrapper>{listaBoxes}</Wrapper>;
}

export default Cards;