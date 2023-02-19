import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const styles = {
  accordion: {
    backgroundColor: '#F5FFFA',
    borderRadius: '8px',
    margin: '10px',
  },
  summary: {
    backgroundColor: '#f4f4f5',
    color: '#16654f',
    borderBottom: '1px solid rgba(255, 255, 255, .3)',
  },
  details: {
    color: '#16654f',
  },
  container: {
    margin: "auto",
    width: "50%"
  }
};

function PastContests() {
  return (
    <div style={styles.container}>
      <Accordion style={styles.accordion}>
        <AccordionSummary
          style={styles.summary}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Turing Cup 2022</Typography>
        </AccordionSummary>
        <AccordionDetails style={styles.details}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={styles.accordion}>
        <AccordionSummary
          style={styles.summary}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Turing Cup 2021</Typography>
        </AccordionSummary>
        <AccordionDetails style={styles.details}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={styles.accordion}>
        <AccordionSummary
          style={styles.summary}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Turing Cup 2020</Typography>
        </AccordionSummary>
        <AccordionDetails style={styles.details}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default PastContests;