import React from "react";
import {Box,Typography} from "@material-ui/core";
import SectionNavbars from "../Components/Sections/SectionNavbars";
import RecentTransactionList from "./RecentTransactionList";
import Profile from './Profile';
import TradeOptions from "./TradeOptions";
export default function Dashboard(){
  
return(
   <>
   <SectionNavbars/>
   <Box display="flex" flexDirection="column" >   
   <Box display="flex" flexDirection="row" alignItems="center">
   <Profile/>
   <TradeOptions/>
   </Box>
   <Box display="flex" flexDirection="column" flexGrow={1}>
   <Typography variant="h4" align="center" style={{margin:'20px 0px'}}>
    Recent Transactions
   </Typography>
   <RecentTransactionList/>
   </Box>
   </Box>
   </>    
);
}