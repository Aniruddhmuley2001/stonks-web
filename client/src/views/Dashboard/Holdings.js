import React,{useEffect,useState} from "react";
import TableList from "../Components/TableList";
import  {CircularProgress, makeStyles} from '@material-ui/core';
import {Paper,TablePagination} from "@material-ui/core"
import * as axios from 'axios'

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
  
  let rows = [];
  

  axios.interceptors.request.use(
    (config) => {
      config.headers.authorization = `Bearer ${localStorage.getItem("AUTH_KEY")}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
export default function RecentTransactionList() {
const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [holdings, setHoldings] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log("Hello")
    axios.get("http://localhost:8080/holdings").then((response)=>{
      
      for(let i =0;i<response.data.length;i++){

        console.log(response.data[i])
          rows.push(createData(response.data[i].stockId.index,response.data[i].stockId.price,response.data[i].quantity,response.data[i].stockId.price*response.data[i].quantity))
      }
      setHoldings(rows)

      setLoading(false);
    })
  },[])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };


  

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  if(loading){
    return <CircularProgress/>
  }

    return(
        <>
        <Paper classes={classes.root}>
            <TableList container={classes.container} columns={columns} rows={holdings} rowsPerPage={rowsPerPage} page={page}/>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={holdings.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
     </>
    );
}