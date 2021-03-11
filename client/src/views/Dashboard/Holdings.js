import React from "react";
import TableList from "../Components/TableList";
import  {makeStyles} from '@material-ui/core';
import {Paper,TablePagination} from "@material-ui/core"

const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    container: {
      maxHeight: 440,
    },
  });

const columns = [
    { id: 'organization', label: 'Organization', minWidth: 90, align: 'center' },
    { id: 'sharePrice', label: 'Share Price', minWidth: 60, align: 'center' },
    { id: 'units', label: 'Units', minWidth: 60, align: 'center' },
    {
      id: 'amount',
      label: 'Bucks\u00a0',
      minWidth: 90,
      align: 'center',
      format: (value) => value.toLocaleString('en-US'),
    },
  ];
  
  function createData(organization, sharePrice, units, amount) {
    return { organization, sharePrice, units, amount };
  }
  
  const rows = [
    createData('A', 25, 2, 50),
    createData('B', 30, 5, 150),
    createData('D', 20, 2, 40),
    createData('E', 25, 4, 100),
    createData('C', 40, 3, 120),
  ];
export default function RecentTransactionList() {
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
    return(
        <>
        <Paper classes={classes.root}>
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
        </Paper>
     </>
    );
}