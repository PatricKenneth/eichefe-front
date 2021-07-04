import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import { Collapse, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles(theme => ({
  root: {
    position: "fixed",
    left: "50%",
    right: "auto",
    bottom: "24px",
    transform: "translateX(-50%)",
    [theme.breakpoints.only("xs")]: {
      left: "24px",
      right: "24px",
      transform: "none",
    }
  },
}));

function SimpleAlert({ open, severity, content, setAlert }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Collapse in={open} timeout={3000}>
      <Alert 
        variant="filled" 
        severity={severity} 
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setAlert({
                open: false,
                severity: "",
                content: "",
              });
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
      >
        {content}
      </Alert>
      </Collapse>
      
    </div>
  );
}

export default SimpleAlert;
