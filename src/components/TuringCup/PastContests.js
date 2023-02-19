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
            "first" : "",
            "second " : "",
            "third" : ""
        }
    },
    {   "year" : "2020",
        "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatem sint quidem corporis consectetur quas. Laboriosam fugit enim veniam neque aliquid accusantium, et dicta impedit, explicabo officiis harum magni odio!",
        "winners" : {
            "first" : "",
            "second " : "",
            "third" : ""
        }
    },
    {   "year" : "2019",
        "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatem sint quidem corporis consectetur quas. Laboriosam fugit enim veniam neque aliquid accusantium, et dicta impedit, explicabo officiis harum magni odio!",
        "winners" : {
            "first" : "",
            "second " : "",
            "third" : ""
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
            <Typography>ABOUT</Typography>
          <Typography>
           {item.info}
          </Typography>
        </AccordionDetails>
      </Accordion>
         ))   
        }
    </Grid>
  );
}

export default PastContests;