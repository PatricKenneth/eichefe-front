import { Box, Button, Grid, Hidden, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const styles = makeStyles(( theme ) => ({
    logo: {
        [theme.breakpoints.down('sm')]: {
            justifyContent: "center"
        },
    }
}))

function Header() {
    const headerStyle = styles();
    return (
        <Grid container style={{ background: "#E8FBFF", padding: "48px" }}>
            <Grid className={headerStyle.logo} item container alignItems="center" xs={12} sm={6} md={3} lg={4} xl={4} >
                <img src="./images/logo.svg" alt="" />
            </Grid>
            <Hidden smDown>
                <Grid item container alignItems="center" justify="center" md={5} lg={4} xl={4} >
                    <Box style={{ display: "flex", flexDirection: "row" }}>
                        <Typography variant="h5" style={{ marginRight: "24px" }}> Tráfego </Typography>
                        <Typography variant="h5" style={{ marginRight: "24px" }}> Serviços </Typography>
                        <Typography variant="h5" style={{ marginRight: "24px" }}> Resultados </Typography>
                        <Typography variant="h5" style={{ marginRight: "24px" }}> Sobre </Typography>
                    </Box>
                </Grid>
            </Hidden>
            <Hidden xsDown>
                <Grid item container alignItems="center" justify="flex-end" sm={6} md={4} lg={4} xl={4} >
                    <Box style={{ display: "flex", flexDirection: "row" }}>
                        <img src="./images/instagram.svg" alt="" style={{ marginRight: "24px" }} />
                        <img src="./images/whatsapp.svg" alt="" style={{ marginRight: "24px" }} />
                        <Button variant="contained" color="primary" style={{ height: "50px", borderRadius: "60px" }}>
                            <Typography variant="button">
                                Solicitar Orçamento
                            </Typography>
                        </Button>
                    </Box>
                </Grid>
            </Hidden>
        </Grid>
    )
}

export default Header;