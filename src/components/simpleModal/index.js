import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      {children}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    maxHeight: "700px",
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs({ stateModal, setStateModal }) {
const handleClose = () => {
    setStateModal(( provStateModal ) => ({
      ...provStateModal,
      open: false,
    }));
  };

  return (
    <Box>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={stateModal.open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <Typography variant="h3" style={{ fontSize: "24px", lineHeight: "32px" }}>
            {stateModal.title}
          </Typography>
        </DialogTitle>
        <DialogContent dividers>
          <Typography variant="h5" style={{ textAlign: "left", fontSize: "18px", lineHeight: "38px" }}>
            {stateModal.content}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus variant="contained" color="primary" onClick={handleClose}
                  style={{ 
                    width: "148px", 
                    height: "40px", 
                    borderRadius: "60px" 
                  }}>
                <Typography variant="h5" style={{ color:"#F7F7F7" }}>
                    Fechar
                </Typography>
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
