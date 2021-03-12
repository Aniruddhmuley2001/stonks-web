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
                        <h5>For Traders</h5>
                        <ul>
                          <li>Traders will trade entirely on the platform provided since the progress on the platform will only be considered while choosing a winner.</li>
                          <li>3 days in total will be provided for trading: starting from the IPO(s) declaration until the end of 3rd day.</li>
                          <li>A total of 10000 DA coins will be provided to the traders at the starting of the contest.</li>
                          <li>The company’s pitches will be held on Google meet (link will be provided a day before) based on which traders can trade.</li>
                          <li>Prices of stocks will change every 30 mins so keep up with that.</li>
                          <li>We will also be uploading documents on our social media and you can criticize their strategies in the comment section.</li>
                        </ul>
                        <br />
                        <h5>For Organizations</h5>
                        <ul>
                          <li>The company will provide its background and strategies to solve the problems which fall under their company-specific domain. How will they implement it? Basically, you will have to convince traders and judges how your company is profitable and how it is making a good profit.</li>
                          <li>The above-stated point will require a whole pitch meeting in front of judges and all the traders who wish to join the forum. Also, the company will have to give a written document of its strategy to make it public for those who weren’t able to join the meet.</li>
                          <li>After the first pitch, companies will again have to submit an updated document that will incorporate points about how they are willing to change certain points or improve their previously put up points. This will happen 2 days in a row after the pitch.</li>
                          <li>We will be providing different sectors to different companies so that companies’ creativity and perception do not clash.</li>
                          <li>The strategies should be based on the recent problems our world is facing.</li>
                          <li>A company with the highest percentage increase in stock price from the very beginning of the event until the very last moment of the 3rd day will be the winner in the company category.</li>
                        </ul>
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
