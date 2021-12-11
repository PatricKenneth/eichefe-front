import React from "react";
import PropTypes from "prop-types";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Button, MobileStepper } from "@mui/material";
import { withStyles } from "@material-ui/core";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    imgPath: "./images/profissional_1.png",
    label: "profissional_1",
  },
  {
    imgPath:"./images/profissional_2.png",
    label: "profissional_1",
  },
  {
    imgPath:"./images/profissional_3.png",
    label: "profissional_1",
  },
];

const styles = (theme) => ({
  root: {
    width: '100%',
    flexGrow: 1,
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default
  },
  img: {
    height: '457px',
    display: "block",
    maxWidth: '232px',
    overflow: "hidden",
    width: "100%"
  }
});

class Carousel extends React.Component {
  state = {
    activeStep: 0
  };

  handleNext = () => {
    this.setState((prevState) => ({
      activeStep: prevState.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState((prevState) => ({
      activeStep: prevState.activeStep - 1
    }));
  };

  handleStepChange = (activeStep) => {
    this.setState({ activeStep });
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = tutorialSteps.length;
    return (
      <div className={classes.root}>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {tutorialSteps.map((step, index) => (
            <div key={index}>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <img
                    className={classes.img}
                    src={step.imgPath}
                    alt={step.label}
                    style={{ margin: '8px' }}
                  />
                ) : null}
                {Math.abs(activeStep - index) <= 2 ? (
                  tutorialSteps[activeStep + 1] && (
                    <img
                      className={classes.img}
                      src={tutorialSteps[activeStep + 1].imgPath}
                      alt={tutorialSteps[activeStep + 1].label}
                      style={{ margin: '8px' }}
                    />
                  )
                ) : null}
              </div>
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          style={{ background: 'none' }}
          nextButton={
            <Button
              size="small"
              onClick={this.handleNext}
              disabled={activeStep === maxSteps - 1}
              style={{ color: activeStep === maxSteps - 1 ? '#F7F7F7' : '#0085E8' }}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={this.handleBack}
              disabled={activeStep === 0}
              style={{ color: activeStep === 0 ? '#F7F7F7' : '#0085E8' }}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
            </Button>
          }
        />
      </div>
    );
  }
}
Carousel.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(
  Carousel
);
