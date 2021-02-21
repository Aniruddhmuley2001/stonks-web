import React, { useState,useRef } from 'react';
import {Modal,Card,Typography,Button,Box} from '@material-ui/core';
import  {makeStyles} from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { setSyntheticLeadingComments } from 'typescript';
import TradeOrder from "./TradeOrder";
const useStyles = makeStyles({
    content:{
        margin:'20px 10px',
    },
  });

export default function TradeOptions(){
    const [open,setOpen]=useState(false);
    const action=useRef(null);
    const classes=useStyles();
    const openModal1=()=>{
        action.current="BUY";
        setOpen(true);
    }
    const openModal2=()=>{
        action.current="SELL";
        setOpen(true);
    }
    const closeModal=()=>{
        setOpen(false);
    }
    return(
    <>
   <Box display="flex" flexDirection="column" flexGrow={1} alignItems="center">
   <Typography variant="h4" align="center" style={{margin:'20px 0px'}}>
    Trade Options
   </Typography>  
    <Button className={classes.content} variant="contained"color="primary" onClick={openModal1}> Buy </Button>
    <Button className={classes.content} variant="contained" color="secondary" onClick={openModal2}> Sell </Button>
    </Box>
     <Modal className={classes.modal}
     open={open}
     onClose={closeModal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
     >
     <TradeOrder closeModal={closeModal} action={action.current}/>
    </Modal>
    </>
    );
}