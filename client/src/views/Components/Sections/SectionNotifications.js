import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Check from "@material-ui/icons/Check";
import Warning from "@material-ui/icons/Warning";
// core components
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Clearfix from "components/Clearfix/Clearfix.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/notificationsStyles.js";

const useStyles = makeStyles(styles);

export default function SectionNotifications() {
  const classes = useStyles();
  return (
    <div className={classes.section} id="notifications">
      <SnackbarContent
        message={
          <span>
            <b>INVALID CREDENTIALS:</b> Enter the correct login credentials or sign-up.
          </span>
        }
        close
        color="danger"
        icon="info_outline"
      />
      <Clearfix />
    </div>
  );
}
