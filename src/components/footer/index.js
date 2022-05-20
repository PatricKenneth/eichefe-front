import { Grid, Typography } from "@mui/material";
import React from "react";

function Footer() {
    return (
        <Grid container display="flex" justifyContent="center" padding="40px 0px">
            <Typography variant="h5" fontWeight={400} color="#FFFFFF">
                Rodrigues Marketing Digital | CNPJ - 36.490.397/0001-94
            </Typography>
        </Grid>
    )
}

export default Footer;