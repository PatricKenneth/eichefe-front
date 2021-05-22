import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: "292px",
    height: "435px",
    borderRadius: "10px",
    background: "#F7F7F7",
    '&:hover': {
        boxShadow: "0px 4px 40px rgba(0, 133, 232, 0.1)",
        transform: "scale(1.05)",
    },
    padding: "24px 40px 24px 40px",
  },
  media: {
    width: "100%",
    height: "210px",
    borderRadius: "10px",
  },
  content: {
    padding: "0px",
    marginTop: "8px",
    marginBottom: "16px",
    height: "160px",
  },
  actions: {
    padding: "0px",
  },
});

export default function MediaCard({ image, title, setStateModal, contentModal }) {
  const classes = useStyles();
  const handleOpen = () => {
    setStateModal({
      open: true,
      title,
      content: contentModal,
    });
  };

  return (
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={image}
          title={title}
        />
        <CardContent className={classes.content}>
            <Typography style={{ fontSize: "24px", fontWeight: "900", lineHeight: "62px", color: "#27AED8" }}>
              Dicas do Chefe
            </Typography>
            <Typography style={{ textAlign: "left", fontSize: "16px" }}>
              {title}
            </Typography>
        </CardContent>
      <CardActions className={classes.actions}>
          <Button variant="contained" color="primary" onClick={handleOpen}
                  style={{ 
                    width: "148px", 
                    height: "40px", 
                    borderRadius: "60px" 
                  }}>
                <Typography variant="button" style={{ color:"#F7F7F7" }}>
                    Ler mais
                </Typography>
          </Button>
      </CardActions>
    </Card>
  );
}
