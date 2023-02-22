import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { StaticImage } from "gatsby-plugin-image"
import img from "../assets/images/newsletter/img.jpeg"


export default function NewslettersPage({ html, newletter_details }) {
  const options = { year: "numeric", month: "long", day: "numeric" };


  console.log(getImage(newletter_details.image));

  return (
    <Container sx={{ boxShadow: 2, p: 2 }}>
      {newletter_details.image && (
        <StaticImage
          src="../assets/images/newsletter/img.jpeg"
          alt={newletter_details.title}
          style={{ width: "100%", height: "200px"}}
        />
      )}
      
      <Box sx={{ py: 2 }}>
        <Typography
          variant="h4"
          color="black"
          fontWeight={"bold"}
          marginBottom={"10px"}
        >
          {newletter_details.title}
        </Typography>
        
      
        <Typography variant="body1" marginBottom={"10px"} textAlign={"justify"}>
          
 
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Typography>
        

      </Box>
    </Container>
  );
}
