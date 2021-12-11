import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ContainerCustom from "../container";

function Header() {
    return (
        <ContainerCustom>
            <div style={{ borderBottom: "2px solid #0085E8", paddingBottom: "16px" }}>
                <Grid container alignItems="center">
                    <Grid item xs={12}md={3}>
                        <img src="./images/logo.svg" alt="" />
                    </Grid>
                    <Grid 
                        item 
                        xs={12} md={6}
                        display="flex"
                        justifyContent="space-evenly"
                    >
                        <Typography variant="h5" >
                            Tráfego 
                        </Typography>
                        <Typography variant="h5">
                            Serviços
                        </Typography>
                        <Typography variant="h5">
                            Resultados
                        </Typography>
                        <Typography variant="h5">
                            Sobre
                        </Typography>
                    </Grid>
                    <Grid md={2} />
                    <Grid 
                        item 
                        xs={12} md={1}
                        display="flex"
                        justifyContent="space-between"
                    >
                        <img src="./images/instagram.svg" alt="" />
                        <img src="./images/whatsapp.svg" alt="" />
                    </Grid>
                </Grid>
            </div>
            <Grid container marginTop="72px">
                <Grid 
                    item 
                    xs={12} md={6}
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-evenly"
                >
                    <Typography variant="h4" maxWidth="417px">
                        Precisa melhorar as suas campanhas de tráfego?
                    </Typography>
                    <Typography variant="h1" maxWidth="417px">
                        Atinja seu <span style={{ color: "#0085E8" }}>público alvo</span>
                    </Typography>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        endIcon={<ArrowForwardIcon htmlColor="#C5C5C5" />}
                        style={{ padding: "16px 32px", maxWidth: "308px" }}
                    >
                        <Typography variant="h5" color="#F7F7F7">
                            Comece sua campanha
                        </Typography>
                    </Button>
                </Grid>
                <Grid item xs={12} md={6} display="flex">
                    <img src="./images/foto.png" alt="" style={{ width: "100%", maxWidth: "496px", height: "406px" }} />
                </Grid>
            </Grid>
            <Grid container xs={12} marginTop="24px" display="flex" justifyContent="center">
                <img src="./images/scroll.svg" alt="" />
            </Grid>
            <Grid container display="flex" justifyContent="center" paddingTop="16px" >
                <Grid item>
                    <div 
                        style={{ 
                            background: "#030A13", 
                            width: "950px", 
                            height: "177px",
                            position: "relative",
                            top: "88px",
                            divShadow: "0px 0px 40px rgba(0, 0, 0, 0.05)",
                            borderRadius: "6px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <div style={{ margin: "0px 24px" }}>
                            <img src="./images/1.png" style={{ width: "100%", maxWidth: "98px", height: "98px" }} alt="" />
                        </div>
                        <div style={{ margin: "0px 24px" }}>
                            <img src="./images/2.png" style={{  width: "100%", maxWidth: "98px", height: "98px" }} alt="" />
                        </div>
                        <div style={{ margin: "0px 24px" }}>
                            <img src="./images/3.png" style={{  width: "100%", maxWidth: "98px", height: "98px" }} alt="" />
                        </div>
                        <div style={{ margin: "0px 24px" }}>
                            <img src="./images/4.png" style={{  width: "100%", maxWidth: "98px", height: "98px" }} alt="" />
                        </div>
                        <div style={{ margin: "0px 24px" }}>
                            <img src="./images/5.png" style={{  width: "100%", maxWidth: "98px", height: "98px" }} alt="" />
                        </div>
                        <div style={{ margin: "0px 24px" }}>
                            <img src="./images/6.png" style={{  width: "100%", maxWidth: "98px", height: "98px" }} alt="" />
                        </div>
                    </div>
                </Grid>
            </Grid>
        </ContainerCustom>
    )
}

export default Header;