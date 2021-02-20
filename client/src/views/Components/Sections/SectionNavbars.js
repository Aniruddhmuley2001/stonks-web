import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Search from "@material-ui/icons/Search";
import Email from "@material-ui/icons/Email";
import Face from "@material-ui/icons/Face";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Explore from "@material-ui/icons/Explore";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Header from "components/Header/Header.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import image from "assets/img/bg.jpg";
import profileImage from "assets/img/faces/avatar.jpg";
import { Apps, CloudDownload, TocIcon } from "@material-ui/icons";
import PersonIcon from '@material-ui/icons/Person';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import Tooltip from "@material-ui/core/Tooltip";

import { Link } from "react-router-dom";

import styles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionNavbars() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div id="navbar" className={classes.navbar} style={{overflow:"visible"}}>
        <Header
          brand="Stonks"
          color="info"
          rightLinks={
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
              <ListItem className={classes.listItem}>
                {/*<Tooltip title="Delete">
                  <IconButton aria-label="Delete">
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>*/}
                <Tooltip
                  id="instagram-linkedin"
                  title="Follow us on LinkedIn"
                  placement={window.innerWidth > 959 ? "top" : "left"}
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button
                    href="https://www.linkedin.com/company/dcei"
                    target="_blank"
                    color="transparent"
                    className={classes.navLink}
                  >
                    <i className={classes.socialIcons + " fab fa-linkedin"} />
                  </Button>
                </Tooltip>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Tooltip
                  id="instagram-facebook"
                  title="Follow us on facebook"
                  placement={window.innerWidth > 959 ? "top" : "left"}
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button
                    color="transparent"
                    href="https://www.facebook.com/CreativeTim?ref=creativetim"
                    target="_blank"
                    className={classes.navLink}
                  >
                    <i className={classes.socialIcons + " fab fa-facebook"} />
                  </Button>
                </Tooltip>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Tooltip
                  id="instagram-tooltip"
                  title="Follow us on instagram"
                  placement={window.innerWidth > 959 ? "top" : "left"}
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button
                    color="transparent"
                    href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                    target="_blank"
                    className={classes.navLink}
                  >
                    <i className={classes.socialIcons + " fab fa-instagram"} />
                  </Button>
                </Tooltip>
              </ListItem>
            </List>
          }
        />
      </div>
    </div>
  );
}
