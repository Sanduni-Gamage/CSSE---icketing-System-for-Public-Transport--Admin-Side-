import {addPassenger, editPassenger} from "../../Store/Actions/ForiegnAction";
import AlertDialog from "./AlertDialog";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import React, {Component, createRef} from "react";
import Select from "@material-ui/core/Select";
import Slide from "@material-ui/core/Slide";
import TextField from "@material-ui/core/TextField";
import PassengerValidations from "../../Functions/Validations/PassengerValidations/PassengerValidations";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

class ForiegnDialog extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            purpose: "Create",
            id: null,
            routes: this.props.routes,
            name: "",
            nic: "",
            type: "",
            dob: "",
            mobile: "",
            password: "",
            reg_date: ""
        }
    }

    alertDialog = createRef();

    
    handleClickOpenForCreate = (routes) => {
        this.setState({
            purpose: "Create",
            open: true,
            routes: routes
        })
    };
    
    handleClickOpenForEdit = (passenger) => {
        this.setState({
            open: true,
            purpose: "Edit",
            id: passenger.id,
            name: passenger.name,
            type: passenger.type,
            dob: passenger.dob,
            nic: passenger.nic,
            password: passenger.password,
            reg_date: passenger.reg_date
        })
    };
    
    handleClose = () => {
        this.setState({
            open: false,
            purpose: "Create",
            id: null,
            name: "",
            nic: "",
            type: "",
            dob: "",
            mobile: "",
            password: "",
            reg_date: "",
        })
    };
    
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
   
    submit = () => {
        let details = {
            name: this.state.name,
            nic: this.state.nic,
            type: this.state.type,
            dob: this.state.dob,
            mobile: this.state.mobile,
            password: this.state.password,
            reg_date: this.state.reg_date
        }

        const result = PassengerValidations(details);

        if (result.status) {
            if (this.state.purpose === "Create") {
                this.props.addPassenger(details, res => {
                    if (res.status) {
                        this.props.handleSnackBar({
                            type: "SHOW_SNACKBAR",
                            msg: 'Passenger Added Successfully!'
                        })
                        this.handleClose()
                    } else {
                        this.alertDialog.current.handleClickOpen("Error Occurred!", `Something Went Wrong.Please Create Passenger Again`)
                    }
                })
            } else {
                this.props.editPassenger(this.state.id, details, res => {
                    if (res.status) {
                        this.props.handleSnackBar({
                            type: "SHOW_SNACKBAR",
                            msg: 'Passenger Edited Successfully!'
                        })
                        this.handleClose()
                    } else {
                        this.alertDialog.current.handleClickOpen("Error Occurred!", `Something Went Wrong.Please Update Passenger Again`)
                    }
                })
            }

        } else {
            this.alertDialog.current.handleClickOpen("Form Validation Error!", result.error);
        }
    }

    render() {
        return (
            <React.Fragment>
                {<AlertDialog ref={this.alertDialog}/>}
                <Dialog
                    open={this.state.open}
                    aria-labelledby="form-dialog-title"
                    TransitionComponent={Transition}
                    maxWidth={"md"}
                    fullWidth={true}

                >
                    <DialogTitle id="form-dialog-title"> Add New Foriegn Passenger</DialogTitle>
                    <DialogContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={4}>
                                <TextField
                                    id="name"
                                    name="name"
                                    label="Passenger Name"
                                    fullWidth
                                    value={this.state.name}
                                    onChange={(e) => {
                                        this.handleInput(e)
                                    }}
                                />
                            </Grid>

                            <Grid item xs={12} sm={12} md={4}>
                                <TextField
                                    id="nic"
                                    name="nic"
                                    label="Passport"
                                    fullWidth
                                    value={this.state.nic}
                                    onChange={(e) => {
                                        this.handleInput(e)
                                    }}
                                />
                            </Grid>
                           
                            <Grid item xs={12} sm={12} md={4}>
                                <FormControl variant="standard" fullWidth>
                                    <InputLabel id="demo-simple-select-outlined-label">Type</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        name={"type"}
                                        value={this.state.type}
                                        onChange={(e) => this.handleInput(e)}

                                    >
                                        <MenuItem value=""><em>None</em></MenuItem>
                                        <MenuItem key={"Local"} value={"Local"}>{"Local"}</MenuItem>
                                        <MenuItem key={"Foreign"} value={"Foreign"}>{"Foreign"}</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={4}>
                                <TextField
                                    type={"date"}
                                    id="dob"
                                    name="dob"
                                    label="Date of Birth"
                                    fullWidth
                                    value={this.state.dob}
                                    onChange={(e) => {
                                        this.handleInput(e)
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={4}>
                                <TextField
                                    id="mobile"
                                    name="mobile"
                                    label="Mobile Number"
                                    fullWidth
                                    value={this.state.mobile}
                                    onChange={(e) => {
                                        this.handleInput(e)
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={4}>
                                <TextField
                                    id="password"
                                    name="password"
                                    label="Password"
                                    fullWidth
                                    value={this.state.password}
                                    onChange={(e) => {
                                        this.handleInput(e)
                                    }}
                                />
                            </Grid>

                            <Grid item xs={12} sm={12} md={4}>
                                <TextField
                                    type={"date"}
                                    id="reg_date"
                                    name="reg_date"
                                    label="Enter Registering Date"
                                    fullWidth
                                    value={this.state.reg_date}
                                    onChange={(e) => {
                                        this.handleInput(e)
                                    }}
                                />
                            </Grid>

                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => this.handleClose()}>
                            Cancel
                        </Button>
                        <Button onClick={() => this.submit()}>
                            {this.state.purpose} Passengers
                        </Button>
                    </DialogActions>
                </Dialog>

            </React.Fragment>
        );
    }

}


const mapDispatchToProps = (dispatch) => {
    return {
        handleSnackBar: (status) => dispatch(status),
        addPassenger: (details, callback) => dispatch(addPassenger(details, callback)),
        editPassenger: (id, details, callback) => dispatch(editPassenger(id, details, callback)),
    }
};
export default connect(null, mapDispatchToProps, null, {forwardRef: true})(ForiegnDialog)

