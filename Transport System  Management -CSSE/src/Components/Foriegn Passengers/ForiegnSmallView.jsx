import React, {useRef} from 'react';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AirlineSeatReclineNormalIcon from '@material-ui/icons/AirlineSeatReclineNormal';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import ForiegnDialog from '../Shared/ForiegnDialog';
import CardActions from '@material-ui/core/CardActions';
import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';
import ConfirmDialog from "../Shared/ConfirmDialog";
import {connect} from "react-redux";
import CardContent from '@material-ui/core/CardContent';
import CreateIcon from '@material-ui/icons/Create';
import {deletePassenger} from "../../Store/Actions/ForiegnAction";
import {deepPurple} from '@material-ui/core/colors';
import DeleteIcon from '@material-ui/icons/Delete';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import Grid from "@material-ui/core/Grid";
import IconButton from '@material-ui/core/IconButton';
import {makeStyles} from '@material-ui/core/styles';
import TimelineIcon from '@material-ui/icons/Timeline';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        margin: "20px",
    },
    media: {
        height: 0,
        paddingTop: '56.25%', 
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: deepPurple[500],
        color: '#fff'
    },
}));

function ForiegnSmallView(props) {
    const classes = useStyles();
    const confirmDialogRef = useRef();
    const updatePassengersDialogRef = useRef();
    const passenger = props.passenger;
    


    const deletePassenger = () => {
        props.deletePassenger(passenger.id, res => {
            if (res.status) {
                props.handleSnackBar({
                    type: "SHOW_SNACKBAR",
                    msg: 'Passenger Deleted Successfully!'
                })
            } else {
                props.handleSnackBar({
                    type: "SHOW_SNACKBAR",
                    msg: 'Something Went Wrong.Please Delete Passenger Again!'
                })
            }
        })
    }


    return (
        <Grid item xs={12} sm={6} md={4} lg={4} container justify={"center"}>
            <ConfirmDialog ref={confirmDialogRef} deletePassenger={deletePassenger}/>
            <ForiegnDialog ref={updatePassengersDialogRef} passenger={passenger}/>
            <Card className={classes.root + " hoverable"}>
                <CardContent>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Typography color={"primary"} align={"center"} variant={"h5"}>{passenger.name}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Chip variant="outlined" size={"small"}
                                  label={`Passport - ${passenger.nic}`}
                                  icon={<TimelineIcon/>}/>
                        </Grid>
                        <Grid item xs={6}>
                            <Chip variant="outlined" size={"small"}
                                  label={`Type - ${passenger.type}`}
                                  icon={<AssignmentLateIcon/>}/>
                        </Grid>
                        <Grid item xs={6}>
                            <Chip variant="outlined" size={"small"}
                                  label={`Date of Birth - ${passenger.dob}`}
                                  icon={<AirlineSeatReclineNormalIcon/>}/>
                        </Grid>
                        
                        <Grid item xs={12}>
                            <Chip
                                variant="outlined" size={"small"}
                                  label={`mobile - ${passenger.mobile}`}
                                  icon={<AccountBoxIcon/>}/>
                        </Grid>
                        <Grid item xs={6}>
                            <Chip  variant="outlined" size={"small"}
                                  label={`Password - ${passenger.password}`}
                                  icon={<DeveloperModeIcon/>}/>
                        </Grid>
                    </Grid>
                    <hr/>
                </CardContent>
                <CardActions disableSpacing style={{marginTop : "-30px"}}>
                    <IconButton
                        aria-label="add to favorites"
                        style={{color: "green", marginLeft : "auto"}}
                        onClick={() => {
                            updatePassengersDialogRef.current.handleClickOpenForEdit(passenger)
                        }}
                    >
                        <CreateIcon/>
                    </IconButton>
                    <IconButton
                        onClick={() => {
                            confirmDialogRef.current.handleClickOpen(
                                `Do you need to delete the Passenger : ${passenger.name}?`,
                                `By confirming this, You give permission to delete Passenger.Note that this process can not be revert!`,
                                "deletePassenger"
                            );
                        }}
                        aria-label="share" color={"secondary"}>
                        <DeleteIcon/>
                    </IconButton>
                </CardActions>

            </Card>
        </Grid>
    );
}

// Database connection

const mapDispatchToProps = (dispatch) => {
    return {
        handleSnackBar: (status) => dispatch(status),
        deletePassenger: (id, callback) => dispatch(deletePassenger(id, callback)),
    }
};

export default connect(null, mapDispatchToProps, null, {forwardRef: true})(ForiegnSmallView)
