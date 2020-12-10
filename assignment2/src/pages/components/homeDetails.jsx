import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Iframe from 'react-iframe';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(20),
    color: theme.palette.text.secondary,
	},
	centerObject: {
		justifyContent: 'center',
		marginTop: '20px'
	}
}));

export default function HomeDetails() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
			<Grid className={classes.centerObject} container spacing={3}>
        <Grid item xs={12}>
					<h2>Work Experience</h2>
          <Paper className={classes.paper}>

					<Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Berni and Murcer</Typography>
          <Typography className={classes.secondaryHeading}>Summer Intern</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
					▪ Involved in the designing and development of website using Weebly website development platform.<br></br>
 					▪ Collaborating with the team for functioning and designing of the web application.
					 <br></br>
<h2>Web Application's I worked on:</h2>
			<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>https://www.berniandmurcer.org/</Typography>
        </AccordionSummary>
        <AccordionDetails>
					<Iframe url="https://www.berniandmurcer.org/"
					width="100%"
					height="450px"
					id="myId"
					className="myClassname"
					display="initial"
					position="relative"/>
        </AccordionDetails>
      </Accordion>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Stylabs Technologies</Typography>
          <Typography className={classes.secondaryHeading}>
						Associate Front-End Developer
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
					▪ Involved in the complete life cycle of software development which included prototyping, designing and implementation.<br></br>
▪ Followed Scrum methodology to develop applications which included Server-Side rendering applications, Progressive Web App, SEO Management, State Management.<br></br>
▪ Created responsive WebView, built-in UI controls to develop a full-featured cross-platform GUI application.<br></br>
▪ Headed the training for software development interns.<br></br>
<br></br>
<h2>Web Application's I worked on:</h2>
			<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>https://www.collabb.app/</Typography>
        </AccordionSummary>
        <AccordionDetails>
					<Iframe url="https://www.collabb.app/"
					width="100%"
					height="450px"
					id="myId"
					className="myClassname"
					display="initial"
					position="relative"/>
        </AccordionDetails>
      </Accordion>
			<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>https://www.hireavilla.in/</Typography>
        </AccordionSummary>
        <AccordionDetails>
					<Iframe url="https://www.hireavilla.in/"
					width="100%"
					height="450px"
					id="myId"
					className="myClassname"
					display="initial"
					position="relative"/>
        </AccordionDetails>
      </Accordion>
			<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>https://www.styfi.in/</Typography>
        </AccordionSummary>
        <AccordionDetails>
					<Iframe url="https://www.styfi.in/"
					width="100%"
					height="450px"
					id="myId"
					className="myClassname"
					display="initial"
					position="relative"/>
        </AccordionDetails>
      </Accordion>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Nxtstack Pvt. Ltd.</Typography>
          <Typography className={classes.secondaryHeading}>
					Front-End Developer
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
					▪ Worked in a team to craft the look and functionality of websites and Translated UX wireframes into responsive, interactive features.<br></br>
▪ Developed responsive web and mobile applications using HTML, CSS, Bootstrap, Javascript, Node JS.<br></br>
▪ Worked with Agile Team to migrate legacy client website using Scrum, version control system and
     project management tools like git, JIRA, Slack.
		 <h2>Web Application's I worked on:</h2>
		 <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>https://raziakunj.com/</Typography>
        </AccordionSummary>
        <AccordionDetails>
					<Iframe url="https://raziakunj.com/"
					width="100%"
					height="450px"
					id="myId"
					className="myClassname"
					display="initial"
					position="relative"/>
        </AccordionDetails>
      </Accordion>
          </Typography>
        </AccordionDetails>
      </Accordion>
      
					</Paper>
        </Grid>
      </Grid>
		</div>
  );
}