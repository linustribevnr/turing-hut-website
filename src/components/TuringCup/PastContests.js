import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Looks3OutlinedIcon from "@mui/icons-material/Looks3Outlined";
import LooksOneOutlinedIcon from "@mui/icons-material/LooksOneOutlined";
import LooksTwoOutlinedIcon from "@mui/icons-material/LooksTwoOutlined";
import Looks4OutlinedIcon from "@mui/icons-material/Looks4Outlined";
import Looks5OutlinedIcon from "@mui/icons-material/Looks5Outlined";
import { Box, Grid } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";

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
    "year": "2025",
    "image": "TC_Winners2025.jpg",
    "report":
      "",
    "info":
      "Students from all colleges across the nation can participate by forming a team of up to 1-2 members. The contest has 2 rounds. 1449 teams from 140 different colleges across the nation have registered for the contest,out of which 60 teams have been invited to the Final round (Onsite), From which top 5 teams were rewarded with cash prizes.",
    "winners": {
      "first": {
        "mem1": "Arjun Moravekar",
        "mem2": "Saketh Ramkumar Dondapati",
        "mem3": "",
        "college": "Indian Institute of Technology (IIT), Hyderabad"
      },
      "second": {
        "mem1": "Sushil Raaja U",
        "mem2": "",
        "mem3": "",
        "college": "International Institute of Information Technology (IIIT), Hyderabad"
      },
      "third": {
        "mem1": "Venkata Mahesh Reddy Yeruva",
        "mem2": "Sree Charan Reddy Pacharla",
        "mem3": "",
        "college": "Indian Institute of Information Technology, Design and Manufacturing (IIITDM), Kurnool"
      },
      "fourth": {
        "mem1": "Kodam Nithin",
        "mem2": "Rajavardhan Kommala",
        "mem3": "",
        "college": "Vallurupalli Nageswara Rao Vignana Jyothi Institute of Engineering & Technology, Telangana"
      },
      "fifth": {
        "mem1": "Karthik Kondaveeti",
        "mem2": "Aanshik Sadh",
        "mem3": "",
        "college": "Vallurupalli Nageswara Rao Vignana Jyothi Institute of Engineering & Technology, Telangana"
      }
    }
  },
  {
    "year": "2024",
    "image": "TC_Winners2024.jpg",
    "report":
      "https://drive.google.com/file/d/1SrWLA-6psSmkW8QLzJukpljjif39AqGi/view",
    "info":
      "Students from all colleges across the nation can participate by forming a team of up to 2 members. The contest has 3 rounds. 1438 teams from 148 different colleges across the nation have registered for the contest. 746 teams have participated in the contest, out of which 60 teams have been invited to the Onsite round, and all the teams have attended the Onsite round, from which top 10 teams qualified for the Final Round.",
    "winners": {
      "first": {
        "mem1": "Kishore Kumar",
        "mem2": "Vidit Jain",
        "mem3": "",
        "college": "Indian Institute of Information Technology, Hyderabad"
      },
      "second": {
        "mem1": "Shiven Sinha",
        "mem2": "",
        "mem3": "",
        "college": "Indian Institute of Information Technology, Hyderabad"
      },
      "third": {
        "mem1": "Anant Ojha",
        "mem2": "Harsh Kumar",
        "mem3": "",
        "college": "Indian Institute of Information Technology, Bangalore"
      }
    }
  },
  {
    "year": "2023",
    "image": "TC_Winners2023.jpg",
    "report":
      "https://drive.google.com/file/d/1KiwvD_QynytS_SljFAQGW6uV3pAmD1cp/view",
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
        "college":
          "Indian Institute of Information Technology Design and Manufacturing, Kurnool"
      }
    }
  },
  {
    "year": "2022",
    "image": "NA",
    "report": "NA",
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
  //   "image" : "2020.jpg",
  // "report" : "NA",
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
    "image": "NA",
    "report": "NA",
    "info":
      "Students from all colleges across the nation can participate by forming a team of up to 3 members. The contest has 2 rounds. 285 teams from both Telangana and Andhra Pradesh states have registered for the contest. 240 teams have participated in the contest, out of which 50 teams have been invited to the Onsite round, 36 teams have attended the Onsite round.",
    "winners": {
      "first": {
        "mem1": "Kug3lBlitzz",
        "mem2": "",
        "mem3": "",
        "college": "VNR Vignana Jyothi Institute of Engineering & Technology"
      },
      "second": {
        "mem1": "Sage_of_Six_Paths",
        "mem2": "",
        "mem3": "",
        "college":
          "Gokaraju Rangaraju Institute of Engineering and Technology, Hyderabad"
      },
      "third": {
        "mem1": "LogunsPPPPD",
        "mem2": "",
        "mem3": "",
        "college":
          "University College of Engineering, Osmania University Hyderabad"
      }
    }
  }
];

function PastContests() {
  const data = useStaticQuery(graphql`
    query TuringcupWinnersQuery {
      allFile(filter: { relativeDirectory: { eq: "turingcup-winners" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(
                width: 600
                height: 400
                blurredOptions: { width: 50 }
                placeholder: BLURRED
                transformOptions: { fit: COVER }
              )
            }
            name
          }
        }
      }
    }
  `);
  // console.log(data);

  const nodes = data.allFile.edges;

  const getImage = val => {
    const result = nodes.filter(item => {
      const src = item.node.name;
      var filename = val.split(".")[0];
      return filename === src;
    });
    return result.length > 0
      ? result[0].node.childImageSharp.gatsbyImageData
      : null;
  };

  const placeIcons = {
    first: <LooksOneOutlinedIcon sx={{ color: "white", marginTop: "10px" }} fontSize="large" />,
    second: <LooksTwoOutlinedIcon sx={{ color: "white", marginTop: "10px" }} fontSize="large" />,
    third: <Looks3OutlinedIcon sx={{ color: "white", marginTop: "10px" }} fontSize="large" />,
    fourth: <Looks4OutlinedIcon sx={{ color: "white", marginTop: "10px" }} fontSize="large" />,
    fifth: <Looks5OutlinedIcon sx={{ color: "white", marginTop: "10px" }} fontSize="large" />
  };
  return (
    <>
      <Typography
        variant="h3"
        mt={2}
        sx={{
          textAlign: "center",
          fontFamily: "'Gruppo', cursive",
          fontWeight: "bold",
          letterSpacing: "1px",
          textShadow: "0 0 15px rgba(242, 170, 76, 0.8)"
        }}
      >
        PREVIOUS EDITIONS
      </Typography>
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
              <Typography sx={{ fontFamily: "'Gruppo', cursive", color: "white" }}>
                {item.info}
              </Typography>

              {item.image !== "NA" && (
                <Box sx={{ width: "60%", margin: "0 auto", }}>
                  <GatsbyImage
                    alt="winners here"
                    style={{ borderRadius: "10px" }}
                    image={getImage(item.image)}
                  />
                </Box>
              )}

              {Object.entries(item.winners).map(([place, winner], index) => (
                <React.Fragment key={place}>
                  {placeIcons[place] || (
                    <Typography
                      sx={{ fontFamily: "'Gruppo', cursive", color: "white", marginTop: "10px" }}
                    >
                      {place.charAt(0).toUpperCase() + place.slice(1)} Place
                    </Typography>
                  )}

                  {[winner.mem1, winner.mem2, winner.mem3]
                    .filter(mem => mem && mem.length > 0)
                    .map((mem, i) => (
                      <Typography key={i} sx={{ fontFamily: "'Gruppo', cursive" }}>
                        {mem}
                      </Typography>
                    ))}

                  <Typography sx={{ fontFamily: "'Gruppo', cursive", color: "white" }}>
                    <i>{winner.college}</i>
                  </Typography>
                </React.Fragment>
              ))}

              {item.report !== "NA" && (
                <Typography sx={{ fontFamily: "'Gruppo', cursive", color: "red" }}>
                  For more details&nbsp;
                  <a target="_blank" rel="noreferrer" href={item.report}>
                    <Typography
                      sx={{
                        display: "inline",
                        fontFamily: "'Gruppo', cursive",
                        color: "blue"
                      }}
                    >
                      click here
                    </Typography>
                  </a>
                  .
                </Typography>
              )}
            </AccordionDetails>
          </Accordion>
        ))}
      </Grid>
    </>
  );
}

export default PastContests;
