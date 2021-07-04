import { Box, Button, Grid, Hidden, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const styles = makeStyles(( theme ) => ({
    logo: {
        [theme.breakpoints.down("xs")]: {
            justifyContent: "center"
        },
    },
    a: {
        "&:hover": {
            color: "#3d5afe",
        },
        textDecoration: "none",
        color: "#474747",
    }
}))

function Header() {
    const headerStyle = styles();
    return (
        <Grid container style={{ background: "#E8FBFF", padding: "48px 72px" }} id="Header">
            <Grid className={headerStyle.logo} item container alignItems="center" xs={12} sm={6} md={2} lg={3} xl={3} >
                <img src="./images/logo.svg" alt="" />
            </Grid>
            <Hidden smDown>
                <Grid item container alignItems="center" justify="center" md={6} lg={5} xl={5} >
                    <Box style={{ display: "flex", flexDirection: "row" }}>
                        <Typography style={{ marginRight: "40px" }}>
                            <a className={headerStyle.a} href="#Traffic">Tráfego</a> 
                        </Typography>
                        <Typography style={{ marginRight: "40px" }}> 
                            <a className={headerStyle.a} href="#Services">Serviços</a> 
                        </Typography>
                        <Typography style={{ marginRight: "40px" }}> 
                            <a className={headerStyle.a} href="#Results">Resultados</a> 
                        </Typography>
                        <Typography> 
                            <a className={headerStyle.a} href="#Boss">Sobre </a>
                        </Typography>
                    </Box>
                </Grid>
            </Hidden>
            <Hidden xsDown>
                <Grid item container alignItems="center" justify="flex-end" sm={6} md={4} lg={4} xl={4} >
                    <Box style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <a 
                            href="https://www.instagram.com/luandersoneu/" 
                            rel="noreferrer" 
                            target="_blank"
                        >
                            <img src="./images/instagram.svg" alt="" style={{ marginRight: "32px" }} />
                        </a>
                        <a 
                            href="https://api.whatsapp.com/send?phone=558899030508&text=Oi%2C%20quero%20conversar%20sobre%20tr%C3%A1fego%20pago" 
                            rel="noreferrer" 
                            target="_blank"
                        >
                            <img src="./images/whatsapp.svg" alt="" style={{ marginRight: "32px" }} />
                        </a>
                        <Button href="#Footer" variant="contained" color="primary" style={{ height: "50px", borderRadius: "60px" }}>
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