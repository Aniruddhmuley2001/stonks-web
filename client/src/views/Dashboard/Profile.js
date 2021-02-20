import React from 'react';
import {Box,Card, Typography} from '@material-ui/core';
import  {makeStyles} from '@material-ui/core';

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
    }
  });

export default function ProfilePage(){
    const classes=useStyles();
    return(
   <Box display="flex" flexDirection="column" flexGrow={1} alignItems="center">
   <Typography variant="h4" align="center" style={{margin:'20px 0px'}}>
    Profile
   </Typography>
    <Card  className={classes.root}>
    <Box className={classes.content}>     
     <Typography display='inline'>Team:</Typography>
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
    </Card>
    </Box>
    );
}