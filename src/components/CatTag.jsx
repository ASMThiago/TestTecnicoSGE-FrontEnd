import React, { useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import catServices from '../services/cat';
import useStyles from './style';


export default function CatTag({ tag }) {
  const classes = useStyles();
  const [cats, setCats] = useState([]);

  async function handleOpenAccordion() {
    const resp = await catServices.getIds(tag);
    setCats(resp);
  }

  return (
    <div>
      <Accordion onChange={handleOpenAccordion} className={classes.acorddion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className={classes.heading}>{tag}</div>
        </AccordionSummary>
        <AccordionDetails className={classes.acorddionDetails}>
          {cats.map((cat) => (
            <div>id: {cat.id}</div>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
