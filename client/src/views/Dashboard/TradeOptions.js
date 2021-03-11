import React, { useState,useRef } from 'react';
import {Modal,Typography,Box} from '@material-ui/core';
import  {makeStyles} from '@material-ui/core';
// import { setSyntheticLeadingComments } from 'typescript';
import {Alert,AlertTitle} from '@material-ui/lab';
import TradeOrder from "./TradeOrder";

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Button from "components/CustomButtons/Button.js";

import axios from 'axios';

import { cardTitle } from "assets/jss/material-kit-react.js";

const useStyles = makeStyles({
    content:{
        margin:'20px 10px',
    },
    alert:{
        position:'fixed',
        height:'10vh',
        width:'50vw',
        left:'20%',
        top:'10%',
    },
    border:{
        backgroundColor:"#f2f2f2",
        height:'50%',
        // width:'30%',
        top:'25%',   //Set such that 2*top+height=100% to center it
        // left:'15%',
        borderRadius:'12px'
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
        // axios
        setTimeout(()=>{
            setSuccess(false);
        },2000);
    }
    return(
        <>
            <Box display="flex" flexDirection="column" flexGrow={1} alignItems="center">
                <Card style={{width: "20rem"}}>
                    <CardHeader color="info">
                        <Typography  display='inline'>Trade Options</Typography>
                    </CardHeader>
                    <CardBody>
                        <div className={classes.textCenter} style={{textAlign:"center"}}>
                            <Button color="success" onClick={openModal1}>Buy </Button>
                        </div>
                        <div className={classes.textCenter} style={{textAlign:"center"}}>
                            <Button color="danger" onClick={openModal2}>Sell</Button>
                        </div>
                    </CardBody>
                </Card>
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