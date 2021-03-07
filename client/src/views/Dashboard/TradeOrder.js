import React, { useEffect, useState } from "react";
import {FormControl, InputLabel, Select, MenuItem, Box, Card, Typography, makeStyles, TextField, Button} from "@material-ui/core";
// import Icon from '@material-ui/core/Icon';
// import  CloseIcon  from "@material-ui/icons/Close";
// import {Alert,AlertTitle} from '@material-ui/lab';
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
const stocks=["APPLE", "AMAZON", "MICROSOFT", "RELIANCE", "TCS"]
const stockPrice=25;
const totalAmount=1000;
export default function TradeOrder({closeModal,action,stateSuccess}){
  const classes=useStyles();
  const [currentStock,setCurrentStock]=useState(stocks[0]);
  const [quantity,setQuantity]=useState(0);
  const [isError,setIsError]=useState(null);
  const handleChange=(event)=>{
      setCurrentStock(event.target.value);
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    if(isNaN(Number(quantity))||!(parseInt(quantity)===Number(quantity))){
        setIsError('Quantity must be Integer');
    }
    else{
      setIsError('');
      stateSuccess(true);
    }
  }
  useEffect(()=>{
    if(isError==='') closeModal();
  },[isError])
  const handleQuantity=(event)=>{
      setQuantity(event.target.value);
  }
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
                    {/*<Typography display="inline"> Stock </Typography>*/}
                    <TextField
                      id="stocks"
                      select
                      label="Stock"
                      value={currentStock}
                      onChange={handleChange}
                      variant="outlined"
                    >
                      {
                        stocks.map((stock)=> {
                            return(
                              <MenuItem value={stock} key={stock}> {stock} </MenuItem>
                            );
                        })
                      }
                    </TextField>
                  </FormControl>
                </Box>
                <Box display="flex" flexDirection="row"  flexWrap="wrap" justifyContent="center" style={{padding:"2%"}}>
                  {/*<Typography display="inline"> ACTION </Typography>
                    <TextField id="stock-price" value={action} disabled={true}/>*/}
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
                  {/*<Typography display="inline" > LTP </Typography>
                  <TextField id="stock-price" value={stockPrice} disabled={true}/>*/}
                  <TextField
                    id="stock-price"
                    label="Price"
                    defaultValue={stockPrice}
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="outlined"
                  />
                </Box>
                <Box display="flex" flexDirection="row"  flexWrap="wrap" justifyContent="center" style={{padding:"2%"}}> 
                  {/*<Typography display="inline" > Quantity </Typography>*/}
                  <FormControl error={isError}>
                    {/*<TextField id="quantity" value={quantity} onChange={handleQuantity} error={isError}/>*/}
                    <TextField
                      required
                      id="quantity"
                      label="Quantity"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                    />
                  </FormControl>
                </Box>
                <Box display="flex" flexDirection="row"  flexWrap="wrap" justifyContent="center" style={{padding:"2%"}}>
                  {/*<Typography display="inline" > Total Amount </Typography>*/}
                  <FormControl>
                    {/*<TextField id="amount" value={totalAmount} disabled={true}/>*/}
                    <TextField
                      id="total-price"
                      label="Total"
                      defaultValue={totalAmount}
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