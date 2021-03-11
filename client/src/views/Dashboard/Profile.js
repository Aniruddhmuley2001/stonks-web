import React from 'react';
import {Box, Typography} from '@material-ui/core';
import  {makeStyles} from '@material-ui/core';

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
// import Button from "Components/CustomButtons/Button.js";

import { cardTitle } from "assets/jss/material-kit-react.js";

const useStyles = makeStyles({
    root:{
        borderRadius:'8px',
        margin:'8px',
        height:'100%',
        width:'50%',
        minWidth:'300px'
    },
    content:{
        margin:'20px 10px',
    },
    cardTitle,
  });

export default function ProfilePage(){
    const classes=useStyles();
    return(
        <Box display="flex" flexDirection="column" flexGrow={1} alignItems="center">
            <Card style={{width: "20rem"}}>
                <CardHeader color="info">
                    <Typography  display='inline'>Profile</Typography>
                </CardHeader>
                <CardBody>
                    <Box className={classes.content}>     
                        <Typography display='inline'>Trader:</Typography>
                        <Typography  display='inline'> Stonks</Typography>
                    </Box>
                    <Box className={classes.content}>     
                        <Typography  display='inline'>ID:</Typography>
                        <Typography  display='inline'> 123456</Typography>
                    </Box>
                    <Box className={classes.content}>     
                        <Typography display='inline'>Current Balance:</Typography>
                        <Typography  display='inline'> 1234567</Typography>
                    </Box>
                </CardBody>
            </Card>
        </Box>
    );
}