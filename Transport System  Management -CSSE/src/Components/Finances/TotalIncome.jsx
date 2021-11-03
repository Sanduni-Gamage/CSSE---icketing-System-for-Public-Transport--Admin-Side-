import React from "react";
import Grid from "@material-ui/core/Grid";
import {green, red, orange, blue, blueGrey, yellow} from "@material-ui/core/colors";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from '@material-ui/core/Typography';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import getTotalFinance from "../../Functions/GetTotalFinance/GetTotalFinance";

const useStyles = makeStyles((theme) => ({

    paperTop: {
        position: 'relative',
        width : "70px",
        height : "70px",
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
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
    },

}));



export default function TotalIncome (props) {
    const classes = useStyles();
    const finances = props.finances;

    const sum = {  data: props.total
    }

    

    
    return(
        <React.Fragment>

                    <Paper
                        
                        style={{backgroundColor: orange[500]}} elevation={5} className={classes.paperTop + " hoverable"}>
                        <Grid container justify={"center"} alignItems={"center"}>
                            <AttachMoneyIcon fontSize={"large"}/>
                        </Grid>
                    </Paper>

                    <Paper
                       
                        elevation={5} className={classes.paper + " hoverable"}>
                        <Grid container justify={"flex-end"}>
                            <Grid item>
                                <Typography variant={"body1"} color={"textSecondary"} align={"right"}>
                                    Total Income 
                                </Typography>
                                <Typography variant={"h5"} color={"textSecondary"} align={"right"}>
                                4,409,104.00
                                </Typography>
                            </Grid>

                        </Grid>
                    </Paper>
                </React.Fragment>
    )
}
