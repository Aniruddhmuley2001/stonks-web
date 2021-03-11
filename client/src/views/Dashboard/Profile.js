import React,{useState,useEffect} from 'react';
import {Box, Typography} from '@material-ui/core';
import  {makeStyles} from '@material-ui/core';

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
// import Button from "Components/CustomButtons/Button.js";

import { cardTitle } from "assets/jss/material-kit-react.js";
import axios from 'axios';

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
  axios.interceptors.request.use(
    (config) => {
      config.headers.authorization = `Bearer ${localStorage.getItem("AUTH_KEY")}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
export default function ProfilePage(){
    const classes=useStyles();
    const [user, setUser] = useState({})
    const [totalBalance, setTotalBalance] = useState(0)

    useEffect(() => {
        axios.get("http://localhost:8080/verifyToken").then((response)=>{
            setUser(response.data)
        })

        axios.get("http://localhost:8080/holdings").then((response)=>{
            let total=0
            for(let i =0;i<response.data.length;i++){
                total += response.data[i].stockId.price* response.data[i].quantity
            }

            setTotalBalance(total)
        })
    }, [])
    return(
        <Box display="flex" flexDirection="column" flexGrow={1} alignItems="center">
            <Card style={{width: "20rem"}}>
                <CardHeader color="info">
                    <Typography  display='inline'>Profile</Typography>
                </CardHeader>
                <CardBody>
                    <Box className={classes.content}>     
                        <Typography display='inline'>Trader:</Typography>
                        <Typography  display='inline'> {user.username}</Typography>
                    </Box>
                    <Box className={classes.content}>     
                        <Typography display='inline'>Total Holding Balance:</Typography>
                        <Typography  display='inline'> {totalBalance}</Typography>
                    </Box>
                    <Box className={classes.content}>     
                        <Typography display='inline'>Total credits left:</Typography>
                        <Typography  display='inline'> {user.credits}</Typography>
                    </Box>
                    <Box className={classes.content}>     
                        <Typography display='inline'>Total Balance</Typography>
                        <Typography  display='inline'> {user.credits + totalBalance}</Typography>
                    </Box>
                </CardBody>
            </Card>
        </Box>
    );
}