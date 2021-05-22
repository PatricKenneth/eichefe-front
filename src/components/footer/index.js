import { Grid, Typography } from "@material-ui/core";
import React from "react";

function Footer() {
    return (
        <Grid container justify="center" style={{ background: "#0085E8", padding: "64px" }}>
            <Grid item>
                <Typography style={{ color: "#FFFFFF" }}>
                    Rodrigues Marketing Digital | CNPJ - 36.490.397/0001-94
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Footer;