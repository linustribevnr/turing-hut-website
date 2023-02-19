import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import { GatsbyImage } from "gatsby-plugin-image";
import { Typography } from "@mui/material";

export default function SponsorCard({ name, img, desc }) {
  return (
    <Flippy
      flipOnHover={true} // default false
      flipOnClick={false} // default false
      flipDirection="horizontal" // horizontal or vertical
      //   ref={r => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
      // if you pass isFlipped prop component will be controlled component.
      // and other props, which will go to div
      //   style={{ width: "200px", height: "200px" }} /// these are optional style, it is not necessary
    >
      <FrontSide
        style={{
          backgroundColor: "#41669d"
        }}>
        <GatsbyImage
          alt={name}
          image={img}
          style={{
            maxWidth: "50%",
            maxHeight: "50%",
            border: "2px solid",
            borderRadius: "15px 30px"
          }}
        />
        <Typography gutterBottom variant="body1" component="div">
          {name}
        </Typography>
      </FrontSide>
      <BackSide style={{ backgroundColor: "#175852" }}>{desc}</BackSide>
    </Flippy>
  );
}