import React, { useEffect, useState } from "react";
import {FormControl, MenuItem, Box, Card, Typography, makeStyles, TextField, Button} from "@material-ui/core";
import * as formData from 'form-data'
import * as axios from 'axios'
const useStyles=makeStyles({
  root:{
    backgroundColor:"#f2f2f2",
    position:'absolute',
    top:'10%',   //Set such that 2*top+height=100% to center it
    alignItems: "center",
    borderRadius:'12px',
    padding: '2% 5% 0',
  },
  flex:{
   height:'calc(100vh*0.5*0.6)',
   margin: 'calc(100vh*0.5*0.05)',
  },
  title:{
    height: 'calc(100vh*0.5*0.10)',
    margin: 'calc(100vh*0.5*0.025)'
  },
  footer:{
    height: 'calc(100vh*0.5*0.10)',
    margin: 'calc(100vh*0.5*0.025)'
  },
  close:{
    marginTop:'50px',
    background:'#e0e0eb',
    borderRadius:'50%',
    "&:hover": {
      background: "#9494b8",
    },
  }
});


axios.interceptors.request.use(
  (config) => {
    config.headers.authorization = `Bearer ${localStorage.getItem("AUTH_KEY")}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default function TradeOrder({closeModal,action,stateSuccess}){
  const classes=useStyles();
  const [currentStock,setCurrentStock]=useState("");
  const [quantity,setQuantity]=useState(0);
  const [isError,setIsError]=useState(null);
  const [stocks, setStocks] = useState([])
  const handleChange=(event)=>{

      for(let i =0;i<stocks.length;i++){
        if(event.target.value == stocks[i].index){ 
          setCurrentStock(stocks[i]);
          break;
        }
      }
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    if(isNaN(Number(quantity))||!(parseInt(quantity)===Number(quantity))){
        setIsError('Quantity must be Integer');
    }
    else{
      setIsError('');
      if(action == "BUY"){
      axios.post('http://localhost:8080/buy',{index:currentStock.index,quantity:quantity}).then((response)=>{
        console.log(response);
        if(response.data == "Successfull"){
          stateSuccess(true);
          window.location.reload()
        }
        else {
          stateSuccess(false);
        }
      })
    }else{
      axios.post('http://localhost:8080/sell',{index:currentStock.index,quantity:quantity}).then((response)=>{
        console.log(response);
        if(response.data == "Successfull"){
          stateSuccess(true);
          window.location.reload()
        }
        else {
          stateSuccess(false);
        }
      })
    }
    }
  }
  useEffect(()=>{
    if(isError==='') closeModal();

    axios.get('http://localhost:8080/stocks').then(function (response){
      console.log(response.data)
      setStocks(response.data)
      setCurrentStock(response.data[0])
    })
  },[isError])
  const handleQuantity=(event)=>{
      setQuantity(event.target.value);
  }

  console.log(currentStock.price)
  return(
    <div style={{display:'flex', justifyContent:'center'}}>
      <Card className={classes.root}>
          <Box  display="flex" flexDirection="column" justifyContent="space-around">
            <form onSubmit={handleSubmit}>
              <Box  display="flex" flexDirection="column"  justifyContent="space-around">
                <Box display="flex" flexDirection="row"  justifyContent="space-around">
                  <Typography variant="h6">
                    Enter Details
                  </Typography>
                  {/*<CloseIcon onClick={closeModal} className={classes.close}/>*/}
                </Box>
                <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center" style={{padding:"2%"}}>
                  <FormControl>
                    <TextField
                      id="stocks"
                      select
                      label="Stock"
                      value={currentStock != ""? currentStock.index:""}
                      onChange={handleChange}
                      variant="outlined"
                    >
                      {
                        stocks.map((stock)=> {
                            return(
                              <MenuItem value={stock.index} key={stock.index}> {stock.index} </MenuItem>
                            );
                        })
                      }
                    </TextField>
                  </FormControl>
                </Box>
                <Box display="flex" flexDirection="row"  flexWrap="wrap" justifyContent="center" style={{padding:"2%"}}>
                  <TextField
                    id="stock-price"
                    label="Action"
                    defaultValue={action}
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="outlined"
                  />
                </Box>
                <Box display="flex" flexDirection="row"  flexWrap="wrap" justifyContent="center" style={{padding:"2%"}}>
                  <TextField
                    id="stock-price"
                    label="Price"
                    value={currentStock != ""? currentStock.price:0}
                    InputProps={{
                      readOnly: true,
                    }}

                    variant="outlined"
                  />
                </Box>
                <Box display="flex" flexDirection="row"  flexWrap="wrap" justifyContent="center" style={{padding:"2%"}}> 
                  <FormControl error={isError}>
                    <TextField
                      required
                      id="quantity"
                      label="Quantity"
                      type="number"
                      value={quantity}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      onChange={(e)=>{setQuantity(e.target.value)}}
                      variant="outlined"
                    />
                  </FormControl>
                </Box>
                <Box display="flex" flexDirection="row"  flexWrap="wrap" justifyContent="center" style={{padding:"2%"}}>
                  <FormControl>
                    <TextField
                      id="total-price"
                      label="Total"
                      value={currentStock != ""? currentStock.price * quantity:0}
                      InputProps={{
                        readOnly: true,
                      }}
                      variant="outlined"
                    />
                  </FormControl>
                </Box>
                <Box display="flex" flexDirection="row" justifyContent="center">
                  <Button type="submit" variant="contained" color="primary"> Submit </Button>
                </Box>
              </Box>
            </form>
          </Box>
      </Card>
    </div>
  )
}