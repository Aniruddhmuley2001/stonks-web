import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import { Alert, AlertTitle } from "@material-ui/lab";
import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/stock-background-3.jpg";

import { SendUserDetails, SetAuthKey } from "../../utils/helper";
import { useUserContext } from "context/UserContext";
const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [FailedLoggedIn, setFailedLoggedIn] = React.useState(false);
  const { status, signIn } = useUserContext();
  const history = useHistory();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = nameRef?.current?.value;
    const email = emailRef?.current?.value;
    const password = passwordRef?.current?.value;
    const req = {
      name,
      email,
      password,
    };
    console.log(req);
    SendUserDetails(req).then(({ data, err }) => {
      /*if (err) {
        //Todo
      }*/
      if (data) {
        if (data.accessToken) {
          SetAuthKey(data.accessToken);
          signIn();
          history.push("/dashboard");
          console.log(status, "LOGGING_IN");
          console.log(status, "LOGGED_IN");
        } else {
          setFailedLoggedIn(true);
        }
      }
    });
  };
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <>
      {FailedLoggedIn && (
        <Alert variant="outlined" severity="error" onClose={true}>
          <AlertTitle> Logged In Fail</AlertTitle>
          <strong>Enter Correct Credentials</strong>
        </Alert>
      )}
      <div>
        <Header
          absolute
          color="transparent"
          brand="Stonks"
          rightLinks={<HeaderLinks />}
          {...rest}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
        >
          <form onSubmit={handleSubmit}>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={4}>
                  <Card className={classes[cardAnimaton]}>
                    <form className={classes.form}>
                      <CardHeader color="info" className={classes.cardHeader}>
                        <h2>Login</h2>
                      </CardHeader>
                      <CardBody>
                        <CustomInput
                          labelText="First Name..."
                          id="first"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          inputProps={{
                            type: "text",
                            inputRef: nameRef,
                            endAdornment: (
                              <InputAdornment position="end">
                                <People className={classes.inputIconsColor} />
                              </InputAdornment>
                            ),
                          }}
                        />
                        <CustomInput
                          labelText="Email..."
                          id="email"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          inputProps={{
                            type: "email",
                            inputRef: emailRef,
                            endAdornment: (
                              <InputAdornment position="end">
                                <Email className={classes.inputIconsColor} />
                              </InputAdornment>
                            ),
                          }}
                        />
                        <CustomInput
                          labelText="Password"
                          id="pass"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          inputProps={{
                            type: "password",
                            inputRef: passwordRef,
                            endAdornment: (
                              <InputAdornment position="end">
                                <Icon className={classes.inputIconsColor}>
                                  lock_outline
                                </Icon>
                              </InputAdornment>
                            ),
                            autoComplete: "off",
                          }}
                        />
                      </CardBody>
                      <CardFooter className={classes.cardFooter}>
                        <Button type="submit" simple color="info" size="lg">
                          Get started
                        </Button>
                      </CardFooter>
                    </form>
                  </Card>
                </GridItem>
              </GridContainer>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
