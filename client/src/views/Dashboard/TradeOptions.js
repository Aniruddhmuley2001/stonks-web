import React, { useState } from 'react';
import {Modal,Card,Typography,Button,Box} from '@material-ui/core';
import  {makeStyles} from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { setSyntheticLeadingComments } from 'typescript';

const useStyles = makeStyles({
    content:{
        margin:'20px 10px',
    },
    modal:{
        marginTop:'25%',
        marginLeft:'25%'
    }
  });

export default function TradeOptions(){
    const [open,setOpen]=useState(false);
    const classes=useStyles();
    const openModal=()=>{
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
    <Button className={classes.content} variant="contained"color="primary" onClick={openModal}> Buy </Button>
    <Button className={classes.content} variant="contained" color="secondary"> Sell </Button>
    </Box>
     <Modal className={classes.modal}
     open={open}
     onClose={closeModal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
     >
     {<Button> HI</Button>}
    </Modal>
    </>
    );
}