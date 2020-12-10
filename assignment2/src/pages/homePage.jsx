import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Typography } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import img from '../images/mihirkhetale.jpg';
import HomeDetails from './components/homeDetails';


// Custom JSS style hook which will provide CSS style classes to our React code
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: '20px',
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    homePage: {
        // marginLeft: '10px',
        margin: '100px 30px 10px 30px',
        minHeight: '80vh',
        paddingTop: '64px'

    },

    paragraph: {

        marginTop: '1rem'

    },
    media: {
        height: 140,
    },
    // gridHeight: {
    //     height: '500px'
    // },
    profile: {
        maxWidth: "100%",
        maxHeight: "100%",
        objectFit: 'cover'
        // object-fit: cover;
        // width: "100%",
        // height: "auto",
    }
  }));
export function HomePage() {

    // Use our JSS style hook and set the instantiated JSS to a variable called 'classes'
    const classes = useStyles();

    return (

        <div className={classes.homePage}>
             <div className={classes.root}>
                <Grid container spacing={3} mt={5}>
                    <Grid className={classes.gridHeight} item xs={4}>
                    <Paper className={classes.paper}>
                    <Card className={classes.root}>
                        <img className={classes.profile} src={ img } alt="Self"></img>
                        <CardActionArea>
                            <CardContent>
                            <Typography gutterBottom variant="h4" component="h2">
                                Profile
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                <h3>Name: Mihir Vijay khetale</h3>
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </Paper>
                    </Grid>
                    <Grid item xs={8}>
                    <Paper className={classes.paper}>
                        <Typography gutterBottom variant="h4" component="h2">
                            Description
                        </Typography>
                        <Typography variant="h5" color="textSecondary" component="p">
                            Final year graduate student majoring in Computer Science in the University of New Haven
                        </Typography>
                        <Typography variant="h5" color="textSecondary" component="p">
                            2 years of experience working as a Front-End Developer
                        </Typography>
                        <Typography variant="h5" color="textSecondary" component="p">
                            Looking to work as a Software Developer learning new technologies
                        </Typography>
                        {/* <Typography variant="h5" color="textSecondary" component="p">
                            Few web Applications worked on: <br></br>
                            <a href="https://www.collabb.in/">https://www.collabb.in/</a> <br></br>
                            <a href="https://hireavilla.in/">https://hireavilla.in/</a> <br></br>
                            <a href="https://stylabs.in/">https://stylabs.in/</a>

                        </Typography> */}
                    </Paper>
                    <HomeDetails/>
                    </Grid>
                </Grid>
                
                
            </div>



        </div>

    )

}