import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Grid} from "@mui/material"

const styles = {
  accordion: {
    borderRadius: '8px',
    margin: '10px',
  },
  summary: {
    color: '#16654f',
    borderBottom: '1px solid rgba(255, 255, 255, .3)',
  },
  details: {
    color: '#16654f',
  },
  container: {
    margin: "auto",
    width: "75vw",
    // height : "10vw"
  }
};

const contestdetails = [
    {
      "year":"2022",
      "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatem sint quidem corporis consectetur quas. Laboriosam fugit enim veniam neque aliquid accusantium, et dicta impedit, explicabo officiis harum magni odio!",
      "winners" : {
        "first" : {
          "mem1" :  "Sushmanth Reddy",
          "mem2" : "",
          "mem3" : "",
          "college": "Marri Lakshman Reddy Institute of Technology, Hyderabad"
        },
        "second" : {
          "mem1": "P. Benny Joseph",
          "mem2":"Ankan Mahapatra",
          "mem3" : "",
          "college" : "Vasavi College of Engineering, Hyderabad"
        },
        "third" : {
          "mem1" : "Gedela Jothi",
          "mem2" : "Bharath Goud",
          "mem3" : "Venkata Kiran",
          "college" : "Institute of Aeronautical Engineering, Hyderabad "
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
      "year" : "2019",
        "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatem sint quidem corporis consectetur quas. Laboriosam fugit enim veniam neque aliquid accusantium, et dicta impedit, explicabo officiis harum magni odio!",
        "winners" : {
          "first" : {
                "mem1": "Kug3lBlitzz",
                "mem2":"",
                "mem3":"",
            college: "VNR Vignana Jyothi Institute of Engineering & Technology"
          },
          "second" : {
                "mem1" : "Sage_of_Six_Paths",
                "mem2":"",
                "mem3":"",
            college: "Gokaraju Rangaraju Institute of Engineering and Technology, Hyderabad"
          },
          "third" : {
                "mem1": "LogunsPPPPD",
                "mem2":"",
                "mem3":"",
            college: "University College of Engineering, Osmania University Hyderabad"
          }
        }
    }
];

function PastContests() {
  return (
    <Grid style={styles.container} sx={{margin:5}}>
        {
          contestdetails.map((item,key)=>
          (
            <Accordion style={styles.accordion} >
              <AccordionSummary
                style={styles.summary}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography sx={{border:'1px solid green'}}>{item.year}</Typography>
              </AccordionSummary>
              <AccordionDetails style={styles.details}>
                <Typography>
                  {item.info}
                </Typography>
                <Typography  variant="h5">FIRST PRIZE</Typography>
                {item.winners.first.mem1.length>0 &&<Typography>{item.winners.first.mem1}</Typography>}
                {item.winners.first.mem2.length>0 &&<Typography>{item.winners.first.mem2}</Typography>}
                {item.winners.first.mem3.length>0 &&<Typography>{item.winners.first.mem3}</Typography>}
                <Typography>COLLEGE:{item.winners.first.college}</Typography>

                <Typography  variant="h5">SECOND PRIZE</Typography>
                {item.winners.second.mem1.length>0 &&<Typography>{item.winners.second.mem1}</Typography>}
                {item.winners.second.mem2.length>0 &&<Typography>{item.winners.second.mem2}</Typography>}
                {item.winners.second.mem3.length>0 &&<Typography>{item.winners.second.mem3}</Typography>}
                <Typography>COLLEGE:{item.winners.second.college}</Typography>

                <Typography  variant="h5">THIRD PRIZE</Typography>
                {item.winners.third.mem1.length>0 &&<Typography>{item.winners.third.mem1}</Typography>}
                {item.winners.third.mem2.length>0 &&<Typography>{item.winners.third.mem2}</Typography>}
                {item.winners.third.mem3.length>0 &&<Typography>{item.winners.third.mem3}</Typography>}
                <Typography>COLLEGE:{item.winners.third.college}</Typography>
                
              </AccordionDetails>
            </Accordion>
          ))   
        }
    </Grid>
  );
}

export default PastContests;