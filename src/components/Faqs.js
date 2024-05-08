import React from "react";
import {
  Grid,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from "@mui/material";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { ExpandMore } from "@mui/icons-material";
import { useState } from "react";

export default function Faqs() {
  const data = useStaticQuery(graphql`
    query TuringTapeQuery {
      file(relativePath: { eq: "turing_tape.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 350
            blurredOptions: { width: 100 }
            placeholder: BLURRED
          )
        }
      }
    }
  `);

  const faqs = [
    {
      question: "Are we restricted to certain branches?",
      answer:
        "No. We welcome students from all branches who are interested in coding."
    },
    {
      question: "Is there a membership fees?",
      answer: "No. There is no membership fees to become a club member."
    },
    {
      question: "How can I be a part of the peer learning program?",
      answer:
        "Once first year students are taught functions in their C Programming course, we conduct a selection contest and the top performers are invited to be a part of the program."
    },
    {
      question: "How can I stay updated about the club events?",
      answer:
        "Following us on our social media handles is the best way to stay updated!"
    }
  ];

  const [expanded, setExpanded] = useState(-1);

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : -1);
  };

  return (
    <Grid container sx={{ my: 3, p: 3, w: 1, bgcolor: "#f4f4f5" }}>
      <Grid item xs={12} md={8} lg={6} xl={5} sx={{ my: "auto" }}>
        <Typography
          variant="h5"
          fontWeight={"bold"}
          sx={{ pb: 2 }}
          color="secondary"
        >
          FAQs
        </Typography>
        {faqs.map((item, ind) => (
          <Accordion
            disableGutters
            expanded={expanded === ind}
            onChange={handleChange(ind)}
            key={ind}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-label="Expand"
              sx={ind !== 0 ? { borderTop: "1px solid #e0e0e0" } : null}
            >
              <Typography variant="body1">{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Grid>
      <Grid
        item
        xs={12}
        md={8}
        lg={6}
        xl={5}
        sx={{ my: "auto" }}
        display={{ xs: "none", lg: "block" }}
      >
        <Box display="flex" justifyContent={{ xs: "center", md: "flex-end" }}>
          <GatsbyImage
            alt="Turing Tape"
            image={data.file.childImageSharp.gatsbyImageData}
          />
        </Box>
      </Grid>
    </Grid>
  );
}
