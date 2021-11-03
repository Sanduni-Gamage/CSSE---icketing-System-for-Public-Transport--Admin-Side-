import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {withRouter} from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import {compose} from "redux";
import {connect} from "react-redux";
import {firestoreConnect, isLoaded} from "react-redux-firebase";
import {green, red, orange, blue} from "@material-ui/core/colors";
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import GroupIcon from '@material-ui/icons/Group';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import DirectionsIcon from '@material-ui/icons/Directions';
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({

    paperTop: {
        position: 'relative',
        width: "70px",
        height: "70px",
        zIndex: 2,
        color: "white",
        marginLeft: theme.spacing(3),
        padding: theme.spacing(2),
    },
    paper: {
        position: 'relative',
        zIndex: 1,
        marginTop: -theme.spacing(4),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),

    },

}));

function DashboardItem(props) {
    const classes = useStyles();

    let buses = props.buses;
    let routes = props.routes;
    let finances = props.finances;
    let passengers = props.passengers;


    const Redirect = (path) => {
        props.history.push(`/dashboard/${path}`)
    }

    if(!isLoaded(buses && routes &&  passengers)) {
             return (
                 <Backdrop open={true}>
                     <CircularProgress style={{color: "#fff"}}/>
                 </Backdrop>
             )
    }else {
        if (props.type == "buses") {
            return (
                <React.Fragment >
                    <div className="box" style={{marginTop : "46px"}}>
                    <Paper
                        onClick={() => {
                            Redirect("buses")
                        }}
                        style={{backgroundColor: orange[500]}} elevation={5}  className={classes.paperTop + " hoverable"} >
                        <Grid container justify={"center"} alignItems={"center"} >
                            <DirectionsBusIcon fontSize={"large"}/>
                        </Grid>
                    </Paper>
                    <div className="colo" style={{marginTop: "-77px"}}>
                    <Paper style={{backgroundColor: orange[500]}}
                        onClick={() => {
                            Redirect("buses")
                        }}
                        elevation={5} className={classes.paper + " hoverable"}  >
                        <Grid container justify={"flex-end"}>
                            <Grid item>
                                <Typography variant={"body1"} style={{color: "#fff"}} align={"right"}>
                                    Buses
                                </Typography>
                                <Typography variant={"h5"} style={{color: "#fff"}} align={"right"}>
                                    { buses && buses.length }
                                </Typography>
                            </Grid>

                        </Grid>
                    </Paper>
                    </div>
                    </div>
                </React.Fragment>
            )
        } else if (props.type == "routes") {
            return (
                <React.Fragment>
                    <div className="box" style={{marginTop : "46px"}}>
                    <Paper
                        onClick={() => {
                            Redirect("routes")
                        }}
                        style={{backgroundColor: green[500]}} elevation={5} className={classes.paperTop + " hoverable"}>
                        <Grid container justify={"center"} alignItems={"center"}>
                            <DirectionsIcon fontSize={"large"}/>
                        </Grid>

                    </Paper>
                    <div className="colo" style={{marginTop: "-77px"}}>
                    <Paper style={{backgroundColor: green[500]}}
                        onClick={() => {
                            Redirect("routes")
                        }}
                        elevation={5} className={classes.paper + " hoverable"}>
                        <Grid container justify={"flex-end"}>
                            <Grid item>
                                <Typography variant={"body1"} style={{color: "#fff"}} align={"right"}>
                                    Routes
                                </Typography>
                                <Typography variant={"h5"} style={{color: "#fff"}} align={"right"}>
                                    { routes && routes.length }
                                </Typography>
                            </Grid>

                        </Grid>
                    </Paper>
                    </div>
                    </div>
                </React.Fragment>
            )
        } else if (props.type == "timetables") {
            return (
                <React.Fragment>
                    <div className="box" style={{marginTop : "46px"}}>

                    <Paper
                        onClick={() => {
                            Redirect("timetables")
                        }}
                        style={{backgroundColor: red[500]}} elevation={5} className={classes.paperTop + " hoverable"}>
                        <Grid container justify={"center"} alignItems={"center"}>
                            <EventAvailableIcon fontSize={"large"}/>
                        </Grid>

                    </Paper>
                    <div className="colo" style={{marginTop: "-77px"}}>
                    <Paper style={{backgroundColor: red[500]}}
                        onClick={() => {
                            Redirect("timetables")
                        }}
                        elevation={5} className={classes.paper + " hoverable"}>
                        <Grid container justify={"flex-end"}>
                            <Grid item>
                                <Typography variant={"body1"} style={{color: "#fff"}} align={"right"}>
                                    Time Tables
                                </Typography>
                                <Typography variant={"h5"} style={{color: "#fff"}} align={"right"}>
                                    { routes && routes.length }
                                </Typography>
                            </Grid>

                        </Grid>
                    </Paper>
                    </div>
                    </div>
                </React.Fragment>
            )

        
        } else {
            return (
                <React.Fragment>
                     <div className="box" style={{marginTop : "46px"}}>
                    <Paper
                        onClick={() => {
                            Redirect("passengers")
                        }}
                        style={{backgroundColor: blue[500]}} elevation={5} className={classes.paperTop + " hoverable"}>
                        <Grid container justify={"center"} alignItems={"center"}>
                            <GroupIcon fontSize={"large"}/>
                        </Grid>

                    </Paper>
                    <div className="colo" style={{marginTop: "-77px"}}>
                    <Paper style={{backgroundColor: blue[500]}}
                        onClick={() => {
                            Redirect("passengers")
                        }}
                        elevation={5} className={classes.paper + " hoverable"}>
                        <Grid container justify={"flex-end"}>
                            <Grid item>
                                <Typography variant={"body1"} style={{color: "#fff"}} align={"right"}>
                                    Passengers
                                </Typography>
                                <Typography variant={"h5"} style={{color: "#fff"}} align={"right"}>
                                    { passengers && passengers.length }
                                </Typography>
                            </Grid>

                        </Grid>
                    </Paper>
                    </div>
                    </div>
                </React.Fragment>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        buses: state.firestore.ordered.buses,
        routes: state.firestore.ordered.routes,
        passengers: state.firestore.ordered.Passengers,
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect((props) => {
        return [
            {
                collection: 'buses',
            }, {
                collection: 'routes',
            }, {
                collection: 'Passengers'
            }
        ]
    })
)(withRouter(DashboardItem))
