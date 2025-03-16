import React from "react";
import {
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Box
} from "@mui/material";
import { useState } from "react";
import { ExpandMore, WhatsApp, Email, Call } from "@mui/icons-material";
import "./turingcup.css";


export default function Faqs() {
  const faqs = [
    {
      question: "Is the registration free?",
      answer:
        "The registration is free for the first round. However, to take part in further rounds you need to pay a fee of Rs.300 per team."
    },
    {
      question: "Will lunch/snacks be provided on the day of onsite rounds?",
      answer: "Yes, Lunch will be provided on the day of onsite rounds."
    },
    {
      question: "Will accomodation be provided?",
      answer:
        "The accomodation will be provided for teams whose college is based outside Hyderabad during the onsite round."
    },
    // {
    //   question: "Will transport be provided?",
    //   // answer:
    //   //   "Transport will not be provided to teams based out of Hyderabad. The details of transport for teams based in Hyderabad will be informed shortly."
    //   answer: "Transport will not be provided."
    // },
    {
      question: "Is there any swag for the event?",
      answer:
        "Yes, swags will be provided for the participants who appear for the onsite round."
    },
    {
      question: "When and where will the link to round 1 be published?",
      answer:
        "Round 1 participation link will be mailed to respective team leader's mail ID 3 hours before the commencement of the contest."
    },
    {
      question: "What is the eligibility criteria? ",
      answer:
        "All undergraduate students, pursuing a full-time degree in any branch."
    },
    {
      question: "when the round-1 results will be published?",
      answer:
        "The shortlisted teams will receive notification via email after the contest concludes."
    }
  ];

  const [expanded, setExpanded] = useState(-1);

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : -1);
  };

  return (
    <>
      <Grid container sx={{ my: 3, p: 3, w: 1, bgcolor: "#101820FF" }}>
        <Grid md={2}></Grid>
        <Grid xs={12} md={8} sx={{ my: "auto" }}>
          <h2
            style={{
              textAlign: "center",
              color: "#F2AA4CFF",
              marginTop: "50px"
            }}
          >
            FAQs
          </h2>
          {faqs.map((item, ind) => (
            <Accordion
              disableGutters
              expanded={expanded === ind}
              onChange={handleChange(ind)}
              key={ind}
              sx={{ bgcolor: "#101820FF" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore sx={{ color: "#F2AA4CFF" }} />}
                aria-label="Expand"
                sx={ind !== 0 ? { borderTop: "1px solid #F2AA4CFF" } : null}
              >
                <Typography
                  variant="body1"
                  sx={{ color: "#F2AA4CFF", fontFamily: "'Gruppo', cursive" }}
                >
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="body1"
                  sx={{ color: "white", fontFamily: "'Gruppo', cursive" }}
                >
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
      </Grid>
      <Typography
        variant="h6"
        sx={{
          pb: 2,
          textAlign: "center",
          color: "#F2AA4CFF",
          marginTop: "50px",
          fontFamily: "'Gruppo', cursive"
        }}
      >
        For further queries, feel free to reach out to us via Email, WhatsApp or
        Phone <br />
        <Box sx={{ display: "flex", justifyContent: "center", gap: 3 }}>
          <Button href="mailto:koushik00500@gmail.com" target="_blank" sx={{ color: "#F2AA4CFF", transition: "0.3s", "&:hover": { color: "#ff8c1a" } }}>
            <Email sx={{ fontSize: 40 }} />
          </Button>
          <Button href="https://api.whatsapp.com/send?phone=7396910024" target="_blank" sx={{ color: "#F2AA4CFF", transition: "0.3s", "&:hover": { color: "#25D366" } }}>
            <WhatsApp sx={{ fontSize: 40 }} />
          </Button>
          <Button href="tel:7396910024" sx={{ color: "#F2AA4CFF", transition: "0.3s", "&:hover": { color: "#005ce6" } }}>
            <Call sx={{ fontSize: 40 }} />
          </Button>
        </Box>
      </Typography>
    </>
  );
}
