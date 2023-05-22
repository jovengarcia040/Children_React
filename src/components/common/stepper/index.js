import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CreateScenario from "../../wizard/create-scenario";
import AddImages from "../../wizard/add-images";
import AddVideos from "../../wizard/add-videos";
import styles from "./style.module.css";

const steps = ["Create Scenario", "Add Images", "Add Videos"];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepClick = (step) => {
    setActiveStep(step);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const StepIcon = (step) => {
    return <div className={styles.stepCircle}>{step}</div>;
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper
        className={styles.stepper}
        activeStep={activeStep}
        connector={null}
      >
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step
              onClick={handleStepClick.bind(null, index)}
              className={styles.step}
              key={label}
              {...stepProps}
            >
              <StepLabel
                StepIconComponent={StepIcon.bind(null, index + 1)}
                {...labelProps}
              >
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {activeStep === 0 && <CreateScenario />}
          {activeStep === 1 && <AddImages />}
          {activeStep === 2 && <AddVideos />}
          <Box sx={{ display: "flex" }}>
            <Button
              variant="contained"
              color="inherit"
              onClick={handleNext}
              sx={{ mr: 1 }}
              className={styles.next}
            >
              Next
            </Button>
            {/* {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )} */}

            <Button variant="outlined" className={styles.draft}>
              Save Draft
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
