import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LooksOneOutlinedIcon from "@mui/icons-material/LooksOneOutlined";
import LooksTwoOutlinedIcon from "@mui/icons-material/LooksTwoOutlined";
import Looks3OutlinedIcon from "@mui/icons-material/Looks3Outlined";
import { Grid } from "@mui/material";

const styles = {
  accordion: {
    color: "#F2AA4CFF",
    padding: "5px",
    // borderRadius: '20px',
    // margin: '10px',
    backgroundColor: "#101820FF"
  },
  summary: {
    color: "#F2AA4CFF",
    borderRadius: "5px",
    border: "1px solid #F2AA4CFF"
  },
  details: {
    color: "#F2AA4CFF",
    borderRadius: "10px",
    margin: "10px",
    border: "1px solid #F2AA4CFF",
    textAlign: "center"
  },
  container: {
    margin: "auto",
    width: "75vw"
    
    // height : "10vw"
  }
};

const contestdetails = [
  {
    "year": "2023",

    "info":
      "Students from all colleges across the nation can participate by forming a team of up to 2 members. The contest has 3 rounds. 1078 teams from 190 different colleges across the nation have registered for the contest. 738 teams have participated in the contest, out of which 60 teams have been invited to the Onsite round, and all the teams have attended the Onsite round, from which top 10 teams qualified for the Final Round.",

    "winners": {
      "first": {
        "mem1": "Shiven Sinha",
        "mem2": "",
        "mem3": "",
        "college": "Indian Institute of Information Technology, Hyderabad"
      },
      "second": {
        "mem1": "Kishore Kumar",
        "mem2": "Vidit Jain",
        "mem3": "",
        "college": "Indian Institute of Information Technology, Hyderabad"
      },
      "third": {
        "mem1": "Pranab Singh",
        "mem2": "",
        "mem3": "",
        "college": "Indian Institute of Information Technology Design and Manufacturing, Kurnool"
      }
    }
  },
  {
    "year": "2022",

    "info":
      "Students from all colleges across the nation can participate by forming a team of up to 2 members. The contest has 3 rounds. 753 teams from 50+ different colleges across the nation have registered for the contest. 690 teams have participated in the contest, out of which 80 teams have been invited to the Onsite round, and all the teams have attended the Onsite round, from which top 20 teams qualified for the Final Round.",

    "winners": {
      "first": {
        "mem1": "Sushmanth Reddy",
        "mem2": "",
        "mem3": "",
        "college": "Marri Lakshman Reddy Institute of Technology, Hyderabad"
      },
      "second": {
        "mem1": "P. Benny Joseph",
        "mem2": "Ankan Mahapatra",
        "mem3": "",
        "college": "Vasavi College of Engineering, Hyderabad"
      },
      "third": {
        "mem1": "Gedela Jothi",
        "mem2": "Bharath Goud",
        "mem3": "Venkata Kiran",
        "college": "Institute of Aeronautical Engineering, Hyderabad "
      }
    }
  },
  // {
  //   "year" : "2020",
  //   "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatem sint quidem corporis consectetur quas. Laboriosam fugit enim veniam neque aliquid accusantium, et dicta impedit, explicabo officiis harum magni odio!",
  //   "winners" : {
  //       "first" : {
  //         names: [],
  //         college: ""
  //       },
  //       "second" : {
  //         names: [],
  //         college: ""
  //       },
  //       "third" : {
  //         names: [],
  //         college: ""
  //       }
  //   }
  // },
  {
    "year": "2019",
    "info":
      "Students from all colleges across the nation can participate by forming a team of up to 3 members. The contest has 2 rounds. 285 teams from both Telangana and Andhra Pradesh states have registered for the contest. 240 teams have participated in the contest, out of which 50 teams have been invited to the Onsite round, 36 teams have attended the Onsite round.",
    "winners": {
      "first": {
        "mem1": "Kug3lBlitzz",
        "mem2": "",
        "mem3": "",
        college: "VNR Vignana Jyothi Institute of Engineering & Technology"
      },
      "second": {
        "mem1": "Sage_of_Six_Paths",
        "mem2": "",
        "mem3": "",
        college:
          "Gokaraju Rangaraju Institute of Engineering and Technology, Hyderabad"
      },
      "third": {
        "mem1": "LogunsPPPPD",
        "mem2": "",
        "mem3": "",
        college:
          "University College of Engineering, Osmania University Hyderabad"
      }
    }
  }
];

function PastContests() {
  return (
    <>
      <h2
        style={{textAlign: "center", color: "#F2AA4CFF", marginTop: "50px" }}
      >
        PREVIOUS EDITIONS
      </h2>
      <Grid style={styles.container} m={8}>
        {contestdetails.map((item, key) => (
          <Accordion style={styles.accordion} m={8}>
            <AccordionSummary
              style={styles.summary}
              expandIcon={<ExpandMoreIcon sx={{ color: "#F2AA4CFF" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                sx={{
                  border: "1px solid #F2AA4CFF",
                  borderRadius: "2px",
                  padding: "8.6px",
                  fontFamily: "'Gruppo', cursive"
                }}
              >
                {item.year}
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={styles.details}>
              <Typography
                sx={{ fontFamily: "'Gruppo', cursive", color: "white" }}
              >
                {item.info}
              </Typography>
              <LooksOneOutlinedIcon
                sx={{ color: "white", marginTop: "10px" }}
                fontSize="large"
              />
              {item.winners.first.mem1.length > 0 && (
                <Typography sx={{ fontFamily: "'Gruppo', cursive" }}>
                  {item.winners.first.mem1}
                </Typography>
              )}
              {item.winners.first.mem2.length > 0 && (
                <Typography sx={{ fontFamily: "'Gruppo', cursive" }}>
                  {item.winners.first.mem2}
                </Typography>
              )}
              {item.winners.first.mem3.length > 0 && (
                <Typography sx={{ fontFamily: "'Gruppo', cursive" }}>
                  {item.winners.first.mem3}
                </Typography>
              )}
              <Typography
                sx={{ fontFamily: "'Gruppo', cursive", color: "white" }}
              >
                <i>{item.winners.first.college}</i>
              </Typography>

              <LooksTwoOutlinedIcon
                sx={{ color: "white", marginTop: "10px" }}
                fontSize="large"
              />
              {item.winners.second.mem1.length > 0 && (
                <Typography sx={{ fontFamily: "'Gruppo', cursive" }}>
                  {item.winners.second.mem1}
                </Typography>
              )}
              {item.winners.second.mem2.length > 0 && (
                <Typography sx={{ fontFamily: "'Gruppo', cursive" }}>
                  {item.winners.second.mem2}
                </Typography>
              )}
              {item.winners.second.mem3.length > 0 && (
                <Typography sx={{ fontFamily: "'Gruppo', cursive" }}>
                  {item.winners.second.mem3}
                </Typography>
              )}
              <Typography
                sx={{ fontFamily: "'Gruppo', cursive", color: "white" }}
              >
                <i>{item.winners.second.college}</i>
              </Typography>

              <Looks3OutlinedIcon
                sx={{ color: "white", marginTop: "10px" }}
                fontSize="large"
              />
              {item.winners.third.mem1.length > 0 && (
                <Typography sx={{ fontFamily: "'Gruppo', cursive" }}>
                  {item.winners.third.mem1}
                </Typography>
              )}
              {item.winners.third.mem2.length > 0 && (
                <Typography sx={{ fontFamily: "'Gruppo', cursive" }}>
                  {item.winners.third.mem2}
                </Typography>
              )}
              {item.winners.third.mem3.length > 0 && (
                <Typography sx={{ fontFamily: "'Gruppo', cursive" }}>
                  {item.winners.third.mem3}
                </Typography>
              )}
              <Typography
                sx={{ fontFamily: "'Gruppo', cursive", color: "white" }}
              >
                <i>{item.winners.third.college}</i>
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Grid>
    </>
  );
}

export default PastContests;
