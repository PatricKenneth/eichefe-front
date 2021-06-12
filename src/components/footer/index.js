import { Button, Hidden, makeStyles } from "@material-ui/core";
import { Box, Grid, Typography, TextField } from "@material-ui/core";
import React from "react";

const styles = makeStyles(theme => ({
    boxForm: {
        [theme.breakpoints.only("sm")]: {
            display: "grid",
            justifyContent: "center",
        }
    },
    img: {
        [theme.breakpoints.down("xs")]: {
            width: "288px",
            height: "296px",
        }
    },
    subtitle1: {
        color: "#002643", 
        maxWidth: "456px", 
        lineHeight: "56px", 
        marginBottom: "32px",
        [theme.breakpoints.down("xs")]: {
            fontSize: "28px",
            lineHeight: "45px",
        }
    },
    h4: {
        color: "#F7F7F7", 
        maxWidth: "456px", 
        lineHeight: "36px", 
        [theme.breakpoints.down("xs")]: {
            fontSize: "14px",
            lineHeight: "28px",
        }
    }
}))

function Footer() {
    const classes = styles();
    return (
        <Grid container justify="center" style={{ background: "#0085E8", padding: "144px 64px 64px 64px" }}>
            <Grid item container>
                <Grid item container justify="center" xs={12} sm={12} md={6} lg={6} xl={6} style={{ marginBottom: "64px" }}>
                    <Typography variant="subtitle1" className={classes.subtitle1}>
                        Vamos escalar suas vendas?
                    </Typography>
                    <Typography variant="h4" className={classes.h4}>
                        Se você chegou até aqui, falta pouco para mudar o jogo do seu negócio. 
                        Me chama no WhatsApp e agende uma consultoria gratuita.
                    </Typography>
                    <Box style={{ marginTop: "-88px" }}>
                        <img className={classes.img} src="./images/saly_10.svg" alt="" />
                    </Box>
                </Grid>
                <Grid item className={classes.boxForm} xs={12} sm={12} md={6} lg={6} xl={6} style={{ marginBottom: "88px" }} >
                    <Hidden only="xs">
                        <Box style={{ display: "flex", justifyContent: "center", maxWidth: "496px" }}>
                            <TextField  
                                label="Seu nome" 
                                variant="filled" 
                                fullWidth
                                style={{ 
                                    margin: "8px 24px 8px 8px",
                                    maxWidth: "232px",
                                }}
                                inputProps={{
                                    style: {
                                        background: "#E8FBFF",
                                    },
                                }}
                                InputLabelProps={{
                                    style: {
                                        color: "#BDBDBD",
                                    }
                                }}
                            />
                            <TextField  
                                label="Seu whats" 
                                variant="filled" 
                                fullWidth
                                style={{ 
                                    margin: "8px",
                                    maxWidth: "232px",
                                }}
                                inputProps={{
                                    style: {
                                        background: "#E8FBFF",
                                    },
                                }}
                                InputLabelProps={{
                                    style: {
                                        color: "#BDBDBD",
                                    }
                                }}
                            />
                        </Box>
                        <Box style={{ display: "flex", justifyContent: "center", maxWidth: "496px" }}>
                            <TextField  
                                label="Seu email" 
                                variant="filled" 
                                fullWidth
                                style={{ 
                                    margin: "8px",
                                    maxWidth: "496px",
                                }}
                                inputProps={{
                                    style: {
                                        background: "#E8FBFF",
                                    },
                                }}
                                InputLabelProps={{
                                    style: {
                                        color: "#BDBDBD",
                                    }
                                }}
                            />
                        </Box>
                        <Box style={{ display: "flex", justifyContent: "center", maxWidth: "496px" }}>
                            <TextField
                                label="Me dê uma breve explicação" 
                                variant="filled" 
                                fullWidth
                                multiline
                                rows={8}
                                style={{ 
                                    margin: "8px",
                                    maxWidth: "496px",
                                }}
                                inputProps={{
                                    style: {
                                        background: "#E8FBFF",
                                    },
                                }}
                                InputProps={{
                                    style: {
                                        background: "#E8FBFF",
                                    },
                                }}
                                InputLabelProps={{
                                    style: {
                                        color: "#BDBDBD",
                                    }
                                }}
                            />
                        </Box>
                        <Box style={{ display: "flex", justifyContent: "flex-end", maxWidth: "488px" }}>
                            <Button 
                                variant="contained" 
                                color="primary"
                                style={{ 
                                    width: "208px", 
                                    height: "64px", 
                                    borderRadius: "8px",
                                    background: "#002643",
                                }}
                            >
                                <Typography 
                                    variant="button" 
                                    style={{ 
                                        color:"#F7F7F7", 
                                        fontSize: "16px", 
                                        fontWeight: 700 
                                    }}
                                >
                                    Enviar
                                </Typography>
                            </Button>
                        </Box>
                    </Hidden>
                    <Hidden smUp>
                        <Box style={{ display: "flex", justifyContent: "center", maxWidth: "496px" }}>
                            <TextField  
                                label="Seu nome" 
                                variant="filled" 
                                fullWidth
                                style={{ 
                                    margin: "8px",
                                }}
                                inputProps={{
                                    style: {
                                        background: "#E8FBFF",
                                    },
                                }}
                                InputLabelProps={{
                                    style: {
                                        color: "#BDBDBD",
                                    }
                                }}
                            />
                        </Box>
                        <Box style={{ display: "flex", justifyContent: "center", maxWidth: "496px" }}>
                            <TextField  
                                label="Seu whats" 
                                variant="filled" 
                                fullWidth
                                style={{ 
                                    margin: "8px",
                                }}
                                inputProps={{
                                    style: {
                                        background: "#E8FBFF",
                                    },
                                }}
                                InputLabelProps={{
                                    style: {
                                        color: "#BDBDBD",
                                    }
                                }}
                            />
                        </Box>
                        <Box style={{ display: "flex", justifyContent: "center", maxWidth: "496px" }}>
                            <TextField  
                                label="Seu email" 
                                variant="filled" 
                                fullWidth
                                style={{ 
                                    margin: "8px",
                                }}
                                inputProps={{
                                    style: {
                                        background: "#E8FBFF",
                                    },
                                }}
                                InputLabelProps={{
                                    style: {
                                        color: "#BDBDBD",
                                    }
                                }}
                            />
                        </Box>
                        <Box style={{ display: "flex", justifyContent: "center", maxWidth: "496px" }}>
                            <TextField
                                label="Me dê uma breve explicação" 
                                variant="filled" 
                                fullWidth
                                multiline
                                rows={8}
                                style={{ 
                                    margin: "8px",
                                }}
                                inputProps={{
                                    style: {
                                        background: "#E8FBFF",
                                    },
                                }}
                                InputProps={{
                                    style: {
                                        background: "#E8FBFF",
                                    },
                                }}
                                InputLabelProps={{
                                    style: {
                                        color: "#BDBDBD",
                                    }
                                }}
                            />
                        </Box>
                        <Box style={{ display: "flex", justifyContent: "center", maxWidth: "496px" }}>
                            <Button 
                                variant="contained" 
                                color="primary"
                                style={{ 
                                    width: "216px", 
                                    height: "48px", 
                                    borderRadius: "8px",
                                    background: "#002643",
                                }}
                            >
                                <Typography 
                                    variant="button" 
                                    style={{ 
                                        color:"#F7F7F7", 
                                        fontSize: "16px", 
                                        fontWeight: 700 
                                    }}
                                >
                                    Enviar
                                </Typography>
                            </Button>
                        </Box>
                    </Hidden>
                </Grid>
            </Grid>
            <Grid item>
                <Typography style={{ color: "#FFFFFF" }}>
                    Rodrigues Marketing Digital | CNPJ - 36.490.397/0001-94
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Footer;