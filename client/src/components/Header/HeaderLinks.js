/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload, TocIcon } from "@material-ui/icons";
import PersonIcon from '@material-ui/icons/Person';
import ShowChartIcon from '@material-ui/icons/ShowChart';

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Leaderboard"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/leaderboard-trader" className={classes.dropdownLink}>
              Traders
            </Link>,
            <Link to="/leaderboard-org" className={classes.dropdownLink}>
              Organizations
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href={"/dashboard"}
          color="transparent"
          className={classes.navLink}
        >
          <ShowChartIcon className={classes.icons} /> Dashboard
        </Button>  
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href={"/login-page"}
          color="transparent"
          className={classes.navLink}
        >
          <PersonIcon className={classes.icons} /> Login
        </Button>
      </ListItem>
    </List>
  );
}
