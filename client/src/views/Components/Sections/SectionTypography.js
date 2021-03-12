import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import image1 from "assets/img/sponsors/ssip.png";
import image2 from "assets/img/sponsors/Sponsor_Edudictive.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function SectionTypography() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="images">
          <div className={classes.title}>
            <Typography variant="h4" align="center" style={{margin:'20px 0px'}}>
              Sponsors
            </Typography>
          </div>
          <br />
          <GridContainer>
            <GridItem xs={12} sm={6} className={classes.marginLeft}>
              <h4>SSIP Gujarat</h4>
              <img
                src={image1}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
            </GridItem>
            <GridItem xs={12} sm={6}>
              <h4>Edudictive</h4>
              <img
                src={image2}
                style={{height:"90px"}}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
            </GridItem>
          </GridContainer>
          <GridContainer />
        </div>
        <div className={classes.space50} />
      </div>
    </div>
  );
}
