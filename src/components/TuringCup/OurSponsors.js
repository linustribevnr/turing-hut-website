import React, { useState } from "react";
import { Button, Box } from "@mui/material";
import Modal from "@mui/material/Modal";
import TouchAppTwoToneIcon from "@mui/icons-material/TouchAppTwoTone";
import Typography from "@mui/material/Typography";
import { GatsbyImage } from "gatsby-plugin-image";
import "./SponsorsCard.css";

function OurSponsors({ name, img, desc, link }) {
  const [isFlipped, setIsFlipped] = useState(true);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      {/* <Button
                sx={{ 
                    background: '#101820FF',
                    '&:hover': {
                        backgroundColor: '#F2AA4CFF',
                        color: '#fff'
                    }
                }}
                // ENABLE THIS FOR MODAL
                // onClick={handleOpen}
                // href={link}
                // target="_blank"
            >
                <GatsbyImage
                    alt={name}
                    image={img}
                    style={{
                        maxWidth: "65%",
                        // maxHeight: "50%",
                        borderRadius: "15px 30px",
                        border: "2px solid #F2AA4CFF",
                        padding : "5px"
                    }}
                />
            </Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <h1>{name}</h1>
          <Button id="x" onClick={handleClose}>
            X
          </Button>
          <p>{desc}</p>
          <Button
            sx={{
              backgroundColor: "#fff",
              color: "#F2AA4CFF",
              "&:hover": {
                backgroundColor: "#F2AA4CFF",
                color: "#fff"
              }
            }}
            variant="contained"
            href={link}
            target="__blank"
          >
            Know more!
          </Button>
        </Box>
      </Modal>
      <div className="SponsorBox">
        <div className="SponsorFlipBox">
          <div className="SponsorFront">
            <div className="SponsorDiv">
              <p>
                <TouchAppTwoToneIcon />
              </p>
            </div>
            <GatsbyImage
              className="Sponsorimg"
              alt={name}
              image={img}
              style={{
                maxWidth: "100%",
                height: "100%",
                borderRadius: "30px"
                // border: "2px solid #F2AA4CFF",
                // padding: "5px"
              }}
            />
          </div>
          <div className="SponsorBack">
            <div>
              <h3>{name}</h3>
              <p>{desc}</p>
              <a href={link}>Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurSponsors;
