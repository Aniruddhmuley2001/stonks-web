import React, { useState,useRef } from 'react';
import {Modal,Card,Typography,Button,Box} from '@material-ui/core';
import  {makeStyles} from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { setSyntheticLeadingComments } from 'typescript';
import {Alert,AlertTitle} from '@material-ui/lab';
import TradeOrder from "./TradeOrder";
import { GpsFixed } from '@material-ui/icons';
const useStyles = makeStyles({
    content:{
        margin:'20px 10px',
    },
    alert:{
        position:'fixed',
        height:'10%',
        width:'20%',
        left:'40%',
        top:'10%',
    }
  });

export default function TradeOptions(){
    const [open,setOpen]=useState(false);
    const action=useRef(null);
    const [success,setSuccess]=useState(false);
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
    const checkSuccess=()=>{
        setSuccess(true);
        setTimeout(()=>{
            setSuccess(false);
        },2000);
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
     <TradeOrder closeModal={closeModal} action={action.current} stateSuccess={checkSuccess}/>
    </Modal>
    {  
        success && <Alert className={classes.alert} severity="success">
        <AlertTitle>Success</AlertTitle>
        <strong>Your Request will be processed soon</strong>
      </Alert> 
     }
    </>
    );
}