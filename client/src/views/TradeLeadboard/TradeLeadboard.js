import React from 'react';
// import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import SectionNavbars from "../Components/Sections/SectionNavbars";

import Header from "components/Header/Header"
import HeaderLinks from "components/Header/HeaderLinks";
//import { TableContainer } from '@material-ui/core';
import TableList from '../Components/TableList';

import Footer from "../../components/Footer/Footer.js";

const columns = [
  { id: 'position', label: 'Position', minWidth: 80, align: 'center' },
  { id: 'name', label: 'Name', minWidth: 120, align: 'center' },
  {
    id: 'earning',
    label: 'Bucks\u00a0earned',
    minWidth: 100,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
];

function createData(position, name, earning) {
  return { position, name, earning };
}

const rows = [
  createData(1, 'A', 10),
  createData(2, 'B', 11),
  createData(3, 'C', 14),
  createData(4, 'D', 12),
  createData(5, 'E', 13),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function OrgLeadboard() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
        <SectionNavbars />
        <h2 className={classes.title}>Traders Leaderboard</h2>
        <TableList container={classes.container} columns={columns} rows={rows} rowsPerPage={rowsPerPage} page={page}/>
        <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      <Footer />
    </Paper>
  );
}