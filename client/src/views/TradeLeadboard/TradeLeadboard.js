import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
// import TableRow from '@material-ui/core/TableRow';
import TablePagination from "@material-ui/core/TablePagination";
import SectionNavbars from "../Components/Sections/SectionNavbars";

import TableList from "../Components/TableList";
import Footer from "components/Footer/Footer.js";
import { FetchLeaderboard } from "../../utils/helper";
const columns = [
  { id: "position", label: "Position", minWidth: 80, align: "center" },
  { id: "name", label: "Name", minWidth: 120, align: "center" },
  {
    id: "holdings",
    label: "Bucks\u00a0earned",
    minWidth: 100,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
];

async function createData() {
  console.log("called");
  try {
    const data = await FetchLeaderboard();
    const { data: Holdings } = data;
    console.log(Holdings);
    const OBJECT_MAP = {};
    Holdings.forEach(({ username }) => (OBJECT_MAP[username] = 0));
    Holdings.forEach(
      ({ username, quantity, price }) =>
        (OBJECT_MAP[username] += quantity * price)
    );
    return { OBJECT_MAP, error: false };
  } catch {
    return { error: true };
  }
}
const rows = [];
const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

export default function OrgLeadboard() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState([]);
  console.log("ROWS", rows);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  useEffect(() => {
    const fields = createData().then(({ OBJECT_MAP: fields }) => {
      let counter = 0;
      const rows = [];
      for (const key in fields) {
        counter++;
        rows.push([counter, key, fields[key]]);
      }
      rows.sort((a, b) => {
        if (a[2] < b[2]) return 1;
        else return -1;
      });
      const finalData = [];
      rows.forEach((data, index) => {
        finalData.push({
          position: index + 1,
          name: data[1],
          holdings: data[2],
        });
      });
      setRows(finalData);
    });
  }, []);
  return (
    <Paper className={classes.root}>
      <SectionNavbars />
      <Typography variant="h4" align="center" style={{ margin: "20px 0px" }}>
        Traders Leaderboard
      </Typography>
      <TableList
        container={classes.container}
        columns={columns}
        rows={rows}
        rowsPerPage={rowsPerPage}
        page={page}
      />
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
