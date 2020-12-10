import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Typography } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { Dialog , DialogActions, DialogContent, DialogContentText, Button, Slide, DialogTitle} from '@material-ui/core';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { api } from '../api/index';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
// Custom JSS style hook which will provide CSS style classes to our React code
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: '200px',
      height: '70vh'
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
    },
    image: {
      width: 128,
      height: 128,
    },
    textArea: {
        width: '100%',
        marginTop: '20px'
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }));

// A React component for an entire page!
export function ContactPage() {
    // Use our JSS style hook and set the instantiated JSS to a variable called 'classes'
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    let [email, setEmail] = React.useState({});
    let [query, setQuery] = React.useState({});
    

    const handleClickOpen = () => {
        const obj = {
            email: email.emailText,
            query: query.query
        }
        api.post('/contact', obj)
        .then((response)=> {
            setEmail({ ...email, emailText: '' })
            setQuery({ ...query, query: '' })
            setOpen(true);
        })
        .catch((err)=> {
            console.log(error);
        })
        // setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                {/* <Grid item>
                    <ButtonBase className={classes.image}>
                    <img className={classes.img} src="/images/mihir.jpg" />
                    </ButtonBase>
                </Grid> */}
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                        <Typography gutterBottom variant="h5">
                        Contact Us
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                        You can reach me through
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                        <b>LinkedIn:</b> <a href="https://www.linkedin.com/in/mihir-khetale-831199113/">https://www.linkedin.com/in/mihir-khetale-831199113/</a> <br></br>
                        <b>Github:</b> <a href="https://github.com/mkhetale">https://github.com/mkhetale</a> <br></br>
                        <b>Bitbucket:</b> <a href="https://bitbucket.org/kmihir/">https://bitbucket.org/kmihir/</a>
                        </Typography>
                    </Grid>
                    <Grid item>
                    <Typography variant="subtitle1" style={{ cursor: 'pointer' }}>
                        Enter your Email Id and any Query you've, so we could connect with you
                        </Typography>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="email"
                            name="emailText"
                            value={email.emailText}
                            label="Email Address"
                            type="email"
                            onChange={e => setEmail({ ...email, emailText: e.target.value })}
                            fullWidth
                        />
                        <TextareaAutosize
                        label="Enter your Query"
                        className={classes.textArea}
                        aria-label="minimum height"
                        rowsMin={3}
                        value={query.query}
                        id="email"
                        name="query"
                        onChange={e => setQuery({ ...query, query: e.target.value })}
                        placeholder="Query" />
                        <Button
                            color="inherit"
                            onClick={handleClickOpen}>

                            Submit
                        </Button>
                    </Grid>
                    </Grid>
                </Grid>
                </Grid>
            </Paper>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">Success</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    Thank You for connecting with me. Looking forward to be in touch with you
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Ok
                </Button>
                </DialogActions>
            </Dialog>
        </div>

    )

}