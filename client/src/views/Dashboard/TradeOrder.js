import React, { useEffect, useState } from "react";
import {FormControl,InputLabel,Select,MenuItem,Box,Card,Typography,makeStyles, TextField, Button} from "@material-ui/core";
import Icon from '@material-ui/core/Icon';
import  CloseIcon  from "@material-ui/icons/Close";
import {Alert,AlertTitle} from '@material-ui/lab';
const useStyles=makeStyles({
   root:{
      backgroundColor:"#f2f2f2",
      height:'calc(100vh*0.5)',
      width:'calc(100vw*0.3)',
      position:'absolute',
      top:'25%',   //Set such that 2*top+height=100% to center it
      left:'35%',
      borderRadius:'12px'
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
    marginTop:'5px',
    background:'#e0e0eb',
    borderRadius:'50%',
    "&:hover": {
      background: "#9494b8",
   },
}});
const stocks=["APPLE","AMAZON","MICROSOFT","RELIANCE","TCS"]
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
        <>
        <Card className={classes.root}>
        <form onSubmit={handleSubmit}>
        <Box  display="flex" flexDirection="column" justifyContent="space-around">
         <Box className={classes.title} display="flex" flexDirection="row"  justifyContent="space-around">
             <Typography variant="h6">
                Enter Details
             </Typography>
          <CloseIcon onClick={closeModal} className={classes.close}/>
        </Box>
        <Box className={classes.flex}  display="flex" flexDirection="column"  justifyContent="space-around">
         <Box  display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
            <Typography display="inline"> Stock </Typography>
            <FormControl>
        <Select
          id="stock-selection"
          value={currentStock}
          onChange={handleChange}
        >
          {
            stocks.map((stock)=> {
                return(
                  <MenuItem value={stock} key={stock}> {stock} </MenuItem>
                );
            })
          }
        </Select>
      </FormControl>
         </Box>
         <Box display="flex" flexDirection="row"  flexWrap="wrap" justifyContent="center">
             <Typography display="inline" > ACTION </Typography>
             <TextField id="stock-price" value={action} disabled={true}/>
        </Box>
         <Box display="flex" flexDirection="row"  flexWrap="wrap" justifyContent="center">
             <Typography display="inline" > LTP </Typography>
             <TextField id="stock-price" value={stockPrice} disabled={true}/>
        </Box>
        <Box display="flex" flexDirection="row"  flexWrap="wrap" justifyContent="center"> 
             <Typography display="inline" > Quantity </Typography>
             <FormControl error={isError}>
             <TextField id="quantity" value={quantity} onChange={handleQuantity} error={isError}/>
             </FormControl>
        </Box>
        <Box display="flex" flexDirection="row"  flexWrap="wrap" justifyContent="center">
             <Typography display="inline" > Total Amount </Typography>
             <FormControl>
             <TextField id="amount" value={totalAmount} disabled={true}/>
             </FormControl>
        </Box>
        </Box>
        <Box className={classes.footer} display="flex" flexDirection="row"  justifyContent="center">
            <Button type="submit" variant="contained" color="primary"> Submit </Button>
        </Box>
        </Box>
        </form>
        </Card>
        </>
    )
}