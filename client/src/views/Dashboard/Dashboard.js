import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Box, Grid, Typography} from "@material-ui/core";
import SectionNavbars from "../Components/Sections/SectionNavbars";
import RecentTransactionList from "./RecentTransactionList";
import Profile from './Profile';
import Footer from "../../components/Footer/Footer.js";
import TradeOptions from "./TradeOptions";

const useStyles = makeStyles((theme) => ({
   root: {
     flexGrow: 1,
   },
   paper: {
     padding: theme.spacing(2),
     textAlign: 'center',
     color: theme.palette.text.secondary,
   },
}));

export default function Dashboard(){
   const classes = useStyles();
   return(
      <>
         <SectionNavbars/>
         <Box display="flex" flexDirection="column" >   
            {/*<Box display="flex" flexDirection="row" alignItems="center">
               <Profile/>
               <TradeOptions/>
   </Box>*/}

            <Grid container spacing={2}>
               <Grid item xs={12} sm={6}>
                  <Profile />
               </Grid>
               <Grid item xs={12} sm={6}>
                  <TradeOptions />
               </Grid>
            </Grid>

            <Box display="flex" flexDirection="column" flexGrow={1}>
               <Typography variant="h4" align="center" style={{margin:'20px 0px'}}>
                  Recent Transactions
               </Typography>
               <RecentTransactionList/>
            </Box>
         </Box>
         <Footer/>
      </>    
   );
}