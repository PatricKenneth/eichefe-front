import { Typography } from "@material-ui/core";
import { Grid } from "@mui/material";
import React from "react";

function Footer() {
    return (
        <Grid container display="flex" justifyContent="center" padding="40px 0px">
            <Typography variant="h6" style={{ color: "#FFFFFF" }}>
                Rodrigues Marketing Digital | CNPJ - 36.490.397/0001-94
            </Typography>
        </Grid>
    )
}

export default Footer;