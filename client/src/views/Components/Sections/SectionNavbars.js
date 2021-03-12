import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Header from "components/Header/Header.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import { Apps } from "@material-ui/icons";
import PersonIcon from "@material-ui/icons/Person";
import ShowChartIcon from "@material-ui/icons/ShowChart";

import { Link } from "react-router-dom";

import styles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";

import { useUserContext } from "../../../context/UserContext";
const useStyles = makeStyles(styles);

export default function SectionNavbars() {
  const classes = useStyles();
  const { status, signIn, signOut } = useUserContext();
  console.log(status);
  return (
    <div className={classes.section}>
      <div
        id="navbar"
        className={classes.navbar}
        style={{ overflow: "visible" }}
      >
        <Header
          brand="Stonks"
          color="info"
          rightLinks={
            <List className={classes.list}>
              <ListItem className={classes.listItem}>
                <CustomDropdown
                  noLiPadding
                  buttonText="Table"
                  buttonProps={{
                    className: classes.navLink,
                    color: "transparent",
                  }}
                  buttonIcon={Apps}
                  dropdownList={[
                    <Link
                      to="/leaderboard-trader"
                      className={classes.dropdownLink}
                    >
                      Traders' Leaderboard
                    </Link>,
                    <Link
                      to="/leaderboard-org"
                      className={classes.dropdownLink}
                    >
                      Index Price
                    </Link>,
                  ]}
                />
              </ListItem>
              {status && (
                <ListItem className={classes.listItem}>
                  <Button
                    href={"/dashboard"}
                    color="transparent"
                    className={classes.navLink}
                  >
                    <ShowChartIcon className={classes.icons} /> Dashboard
                  </Button>
                </ListItem>
              )}
              <ListItem className={classes.listItem}>
                {status ? (
                  <Button
                    href={"/login-page"}
                    color="transparent"
                    className={classes.navLink}
                    onClick={signOut}
                  >
                    <PersonIcon className={classes.icons} />
                    Logout
                  </Button>
                ) : (
                  <Button
                    href={"/login-page"}
                    color="transparent"
                    className={classes.navLink}
                    onClick={signOut}
                  >
                    <PersonIcon className={classes.icons} />
                    Login
                  </Button>
                )}
              </ListItem>
            </List>
          }
        />
      </div>
    </div>
  );
}
