import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import catServices from '../services/cat';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  acorddion: {
    borderBottom: '1px solid gray',
  },
  acorddionDetails: {
    display: 'block',
  },
}));

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
