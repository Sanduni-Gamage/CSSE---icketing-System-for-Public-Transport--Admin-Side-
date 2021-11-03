
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

function createData(depot_num, depot, total) {
    return { depot_num, depot, total };
}


export default function BasicTable(props) {
    const classes = useStyles();

    const getRows = () => {

        let rows = []
        props.finances.map(f => {
            rows.push(createData(f.depot_num,f.depot,f.total))
        })
        return rows;
    }

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Depot Number</TableCell>
                        <TableCell>Depot Name</TableCell>
                        <TableCell>Total Income(LKR)</TableCell>
                       
                    </TableRow>
                </TableHead>
                <TableBody>
                    {getRows().map((row) => (
                        <TableRow key={row.depot_num}>
                            <TableCell component="th" scope="row">
                                {row.depot_num}
                            </TableCell>
                            <TableCell>{row.depot}</TableCell>
                            <TableCell>{row.total}</TableCell>
                            
                            
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
