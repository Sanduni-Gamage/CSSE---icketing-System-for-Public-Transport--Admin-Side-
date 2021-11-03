import React, {useRef} from "react";
import AddIcon from '@material-ui/icons/Add';
import Backdrop from "@material-ui/core/Backdrop";
import ForiegnDialog from "../Shared/ForiegnDialog";
import ForiegnSmallView from "./ForiegnSmallView";
import CircularProgress from "@material-ui/core/CircularProgress";
import {compose} from "redux";
import {connect} from "react-redux";
import Container from "@material-ui/core/Container";
import Fab from '@material-ui/core/Fab';
import {firestoreConnect, isLoaded} from "react-redux-firebase";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Tooltip from '@material-ui/core/Tooltip';
import {withRouter} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing(3),
        right: theme.spacing(3),
    }
}));


function ForiegnContainer(props) {
    const classes = useStyles();
    let { routes, passengers} = props;

    const addPassengersDialogRef = useRef();
    return (


        <React.Fragment>
            {(!isLoaded(passengers))
                ? <Backdrop open={true}>
                    <CircularProgress style={{color: "#fff"}}/>
                </Backdrop>
                :
                <Container
                    maxWidth="lg"
                    style={{marginBottom: "50px", marginTop: "50px"}}
                >
                    <ForiegnDialog ref={addPassengersDialogRef} route={routes}/>
                    <Grid container style={{marginTop: "50px"}}>
                        <Grid xs={12} item>
                            <Typography align={"center"} variant={"h4"} gutterBottom>
                                All Foriegn Customers
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container direction={"row"}>
                        {passengers && passengers.map(passenger => {
                            return <ForiegnSmallView key={passenger.id} passenger={passenger} />
                        })}
                    </Grid>

                    <Tooltip title="Add Passenger" arrow>
                        <Fab
                            size="small"
                            className={classes.fab}
                            color={"primary"}
                            onClick={() => {
                                addPassengersDialogRef.current.handleClickOpenForCreate();
                            }}
                        >
                            <AddIcon/>
                        </Fab>
                    </Tooltip>
                </Container>
            }
        </React.Fragment>

    )
}
// Database connection
const mapStateToProps = (state) => {
    return {
        passengers: state.firestore.ordered.Passengers,
        
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect((props) => {
        return [
            {
                collection: 'Passengers',
            }
            
        ]
    })
)(withRouter(ForiegnContainer))