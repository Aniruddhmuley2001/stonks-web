import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import InfoIcon from '@material-ui/icons/Info';
import GavelIcon from '@material-ui/icons/Gavel';
import BusinessIcon from '@material-ui/icons/Business';
import Typography from '@material-ui/core/Typography'

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <div className={classes.title}>
          <Typography variant="h4" align="center" style={{margin:'20px 0px'}}>
            The Game
          </Typography>
          </div>
          <GridContainer>
            <GridItem>
              <NavPills
                color="info"
                tabs={[
                  {
                    tabButton: "About",
                    tabIcon: InfoIcon,
                    tabContent: (
                      <span>
                        <p>
                        ‘Stonks’, is a one of its kind event, to emulate an experience of trading in a virtual stock market, integrating it with the concept of developing some interesting business models and pitches. 
                        </p>
                        <br/>
                        <p>
                        This 3-day long dynamic event, with the company owners and traders as the participants, will be full of enthusiasm, eagerness and jam packed with fun. During the 3 days, the companies will give their strategies to account for stock price variation and then the one with profitable shares will be declared as the winner.
                        </p>
                        <br />
                        <p>
                        The event serves as a perfect platform for those having some experience in stock trading as well as those who want to kick start their journey in this domain and don’t know how to. 
                        So get ready to bring out your inner brokers and experience something you’ve never experienced before!
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Rules",
                    tabIcon: GavelIcon,
                    tabContent: (
                      <span>
                        <p>
                          Efficiently unleash cross-media information without
                          cross-media value. Quickly maximize timely
                          deliverables for real-time schemas.
                        </p>
                        <br />
                        <p>
                          Dramatically maintain clicks-and-mortar solutions
                          without functional solutions. Dramatically visualize
                          customer directed convergence without revolutionary
                          ROI. Collaboratively administrate empowered markets
                          via plug-and-play networks. Dynamically procrastinate
                          B2C users after installed base benefits.
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Organizations",
                    tabIcon: BusinessIcon,
                    tabContent: (
                      <span>
                        <p>
                          Will be updated soon...
                        </p>
                        <br />
                      </span>
                    )
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
