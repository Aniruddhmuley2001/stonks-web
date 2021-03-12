import React,{useEffect,useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";
import TableList from "../Components/TableList";
import SectionNavbars from "../Components/Sections/SectionNavbars";
import Footer from "../../components/Footer/Footer.js";
import * as axios from 'axios'

const columns = [
  { id: "index", label: "Index", minWidth: 80, align: "center" },
  { id: "name", label: "Organization", minWidth: 120, align: "center" },
  {
    id: "holdings",
    label: "Price",
    minWidth: 100,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
];

function createData(index, name, holdings) {
  return { index, name, holdings };
}

const rows = [
  createData("O1", "Org 1", 10),
  createData("O2", "Org 2", 11),
  createData("O3", "Org 3", 14),
  createData("O4", "Org 4", 12),
  createData("O5", "Org 5", 13),
];

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
  const [stocks, setStocks] = useState([])
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  useEffect(() => {
    axios.get("http://localhost:8080/stocks").then((response)=>{
      let row =[]
    for(let i =0;i<response.data.length;i++ ){
      row.push(createData(response.data[i].index,response.data[i].org,response.data[i].price));
    }
    setStocks(row)
    })
  }, [])
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
      <Typography variant="h4" align="center" style={{ margin: "20px 0px" }}>
        Index Price
      </Typography>
      <TableList
        container={classes.container}
        columns={columns}
        rows={stocks}
        rowsPerPage={rowsPerPage}
        page={page}
      />
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={stocks.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
      <Footer />
    </Paper>
  );
}
