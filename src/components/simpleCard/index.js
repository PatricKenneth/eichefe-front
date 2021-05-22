import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Badge, Box } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "256px",
    height: "292px",
    background: "#F7F7F7",
    borderRadius: "10px",
    boxShadow: "0px 4px 40px 0px #0085e81a",
  },
  badge: { 
    height: "40px", 
    width: "40px",
    borderRadius: "100%",
    fontFamily: "Poppins, sans-serif",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "900",
    lineHeight: "30px",
    letterSpacing: "0em",
    textAlign: "center",
  },
});

export default function SimpleCard({ image, title, content, numberCard }) {
  const classes = useStyles();

  return (
    <Badge color="primary" badgeContent={numberCard} classes={{ badge: classes.badge }}>
        <Card className={classes.root}>
            <CardContent>
                <Box width="63px" height="63px" borderRadius="6px" 
                     style={{ 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center", 
                        background: "#0085E8", 
                        marginBottom: "24px"
                     }}>
                    <img src={image} alt="" />
                </Box>
                <Typography variant="h1" style={{ fontSize: "18px", lineHeight: "24px", marginBottom: "24px" }}>
                    {title}
                </Typography>
                <Typography style={{ color: "#828282", fontWeight: "500", textAlign: "left", fontSize: "12px", lineHeight: "19px", marginBottom: "24px" }}>
                    {content}
                </Typography>
            </CardContent>
        </Card>
    </Badge>
  );
}