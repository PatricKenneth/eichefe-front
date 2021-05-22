import { Box, Button, Grid, Hidden, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const styles = makeStyles(( theme ) => ({
    logo: {
        [theme.breakpoints.down('xs')]: {
            justifyContent: "center"
        },
    }
}))

function Header() {
    const headerStyle = styles();
    return (
        <Grid container style={{ background: "#E8FBFF", padding: "48px 72px" }}>
            <Grid className={headerStyle.logo} item container alignItems="center" xs={12} sm={6} md={2} lg={3} xl={3} >
                <img src="./images/logo.svg" alt="" />
            </Grid>
            <Hidden smDown>
                <Grid item container alignItems="center" justify="center" md={6} lg={5} xl={5} >
                    <Box style={{ display: "flex", flexDirection: "row" }}>
                        <Typography variant="h5" style={{ marginRight: "40px" }}> Tráfego </Typography>
                        <Typography variant="h5" style={{ marginRight: "40px" }}> Serviços </Typography>
                        <Typography variant="h5" style={{ marginRight: "40px" }}> Resultados </Typography>
                        <Typography variant="h5"> Sobre </Typography>
                    </Box>
                </Grid>
            </Hidden>
            <Hidden xsDown>
                <Grid item container alignItems="center" justify="flex-end" sm={6} md={4} lg={4} xl={4} >
                    <Box style={{ display: "flex", flexDirection: "row" }}>
                        <img src="./images/instagram.svg" alt="" style={{ marginRight: "16px" }} />
                        <img src="./images/whatsapp.svg" alt="" style={{ marginRight: "16px" }} />
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