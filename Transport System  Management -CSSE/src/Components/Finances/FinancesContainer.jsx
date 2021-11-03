
import React from "react";
import AllFinanceTable from "./AllFinanceTable";
import Backdrop from "@material-ui/core/Backdrop";
import {compose} from "redux";
import {connect} from "react-redux";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
import {firestoreConnect, isLoaded} from "react-redux-firebase";
import getTotalFinance from "../../Functions/GetTotalFinance/GetTotalFinance";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from '@material-ui/core/styles';
import TotalIncome from "./TotalIncome";


import Typography from "@material-ui/core/Typography";
import {withRouter} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing(3),
        right: theme.spacing(3),
    }
}));


function FinancesContainer(props) {
    const classes = useStyles();
    let {finances} = props;

    return (
        <React.Fragment>
            {(!isLoaded(finances))
                ? <Backdrop open={true}>
                    <CircularProgress style={{color: "#fff"}}/>
                </Backdrop>
                :
                <Container
                    maxWidth="lg"
                    style={{marginBottom: "50px", marginTop: "50px"}}
                >
                    <Grid container style={{marginTop: "50px"}} spacing={3}>
                        <Grid xs={12} item>
                            <Typography align={"center"} variant={"h4"} gutterBottom>
                                Depot Income
                            </Typography>
                            <AllFinanceTable finances={finances}/>
                        </Grid>

                        <Grid xs={5} item style={{marginTop: "20px"}}>
                            <TotalIncome total={getTotalFinance(finances)}/>
                        </Grid>
                       
                    </Grid>

                </Container>
            }
        </React.Fragment>
    )
}

// Database connection
const mapStateToProps = (state) => {
    console.log(state)
    return {
        finances: state.firestore.ordered.Finance,
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect((props) => {
        return [
            {
                collection: 'Finance'
            }
        ]
    })
)(withRouter(FinancesContainer))