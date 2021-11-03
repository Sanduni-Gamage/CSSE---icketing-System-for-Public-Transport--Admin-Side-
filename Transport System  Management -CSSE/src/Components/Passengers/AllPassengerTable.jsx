import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(name, nic, type, dob, mobile, reg_date) {
    return { name, nic, type, dob, mobile, reg_date };
}


export default function BasicTable(props) {
    const classes = useStyles();

    const getRows = () => {

        let rows = []
        props.passengers.map(p => {
            rows.push(createData(p.name,p.nic,p.type,p.dob,p.mobile,p.reg_date))
        })
        return rows;
    }

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>NIC/Passport</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Date Of Birth</TableCell>
                        <TableCell>Mobile</TableCell>
                        <TableCell>Registered Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {getRows().map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell>{row.nic}</TableCell>
                            <TableCell>{row.type}</TableCell>
                            <TableCell>{row.dob}</TableCell>
                            <TableCell>{row.mobile}</TableCell>
                            <TableCell>{row.reg_date}</TableCell>
                            
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
