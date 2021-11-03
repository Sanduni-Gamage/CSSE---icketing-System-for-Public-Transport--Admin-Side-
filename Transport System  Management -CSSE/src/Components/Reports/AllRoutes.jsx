import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(routeNumber, distance, start, end, hours, minutes, fare) {
    return { routeNumber, distance, start, end, hours, minutes, fare};
}


export default function BasicTable(props) {
    const classes = useStyles();

    const getRows = () => {

        let rows = []
        props.routes.map(r => {
            rows.push(createData(r.routeNumber,r.distance,r.start,r.end,r.hours,r.minutes,r.fare))
        })
        return rows;
    }

    return (
        <TableContainer component={Paper} style={{marginTop : "40px"}} elevation={5}>
            <Typography style={{marginBottom : "0px"}} variant={"h5"} color={"textSecondary"} align={"center"}>
                            All Routes
                        </Typography>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Route Number</TableCell>
                        <TableCell>Distance(km)</TableCell>
                        <TableCell>Start Location</TableCell>
                        <TableCell>End Location</TableCell>
                        <TableCell>Hours</TableCell>
                        <TableCell>Minutes</TableCell>
                        <TableCell>Fare(Per 1km)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {getRows().map((row) => (
                        <TableRow key={row.routeNumber}>
                            <TableCell component="th" scope="row">
                                {row.routeNumber}
                            </TableCell>
                            <TableCell>{row.distance}</TableCell>
                            <TableCell>{row.start}</TableCell>
                            <TableCell>{row.end}</TableCell>
                            <TableCell>{row.hours}</TableCell>
                            <TableCell>{row.minutes}</TableCell>
                            <TableCell>{row.fare}</TableCell>
                            
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
