import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const styles = makeStyles(( theme ) => ({
    floatingDiv: {
        background: "#F7F7F7",
        width: "950px",
        height: "177px",
        position: "relative",
        top: "-110px",
        left: "47px",
        boxShadow: "0px 0px 40px rgba(0, 0, 0, 0.05)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    h1: {
        width: "800px",
        [theme.breakpoints.down("sm")]: {
            width: "480px",
        }
    },
    floatingImg11: {
        position: "relative",
        top: "10px",
        left: "176px",
        [theme.breakpoints.down("md")]: {
            width: "128px",
            height: "128px",
            top: "10px",
            left: "80px",
        },
    },
    floatingImg12: {
        position: "relative",
        top: "210px",
        left: "69px",
        [theme.breakpoints.down("md")]: {
            width: "124px",
            height: "124px",
            top: "110px",
            left: "25px",
        },
    },
    floatingImg13: {
        position: "relative",
        top: "-5px",
        left: "-50px",
        [theme.breakpoints.down("md")]: {
            width: "106px",
            height: "106px",
            top: "-5px",
            left: "-50px",
        },
    },
}));

function Content() {
    const contentStyle = styles();

    return (
        <>
            <Grid container style={{ background: "#E8FBFF", padding: "48px" }}>
                <Grid item xs={12} sm={12} md={12} lg={5} xl={5}>
                    <Typography variant="h1" style={{ lineHeight: "98px", width: "475px" }}>
                        Atinja seu público alvo
                    </Typography>
                    <Typography variant="h5" style={{ margin: "16px 0px 40px 0px", textAlign: "left", width: "399px" }}>
                        Use o poder do Tráfego Pago e leve seu 
                        faturamento para o próximo nível.
                    </Typography>
                    <Button variant="contained" color="primary" style={{ background: "#141414", marginRight: "16px", height: "60px", borderRadius: "6px" }}>
                        <Typography variant="button">
                            Para quem é o tráfego pago?
                        </Typography>
                    </Button>
                    <Button variant="outlined" color="primary" style={{ marginRight: "16px", height: "60px", width: "161px", borderRadius: "6px" }}>
                        <Typography variant="button">
                            Sobre
                        </Typography>
                    </Button>
                    <Box style={{ marginTop: "40px", display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <Box style={{ 
                                    marginRight: "16px",
                                    background: "#05C930", 
                                    width: "50px", 
                                    height: "50px", 
                                    borderRadius: "100%", 
                                    display: "grid", 
                                    alignItems: "center", 
                                    justifyContent: "center"
                                }}>
                            <img src="./images/whatsapp_1.svg" alt="" style={{ width: "25px", height: "25px" }} />
                        </Box>
                        <Typography variant="h5">
                            88 9903-0508
                        </Typography>
                    </Box>
                </Grid>
                <Grid item container justify="center" xs={12} sm={12} md={12} lg={7} xl={7} style={{ marginBottom: "40px" }}>
                    <img src="./images/rectangle_74.svg" alt="" style={{ height: "510px" }} />
                </Grid>
            </Grid>
            <Grid container justify="flex-end" style={{ background: "#F7F7F7", padding: "48px" }}>
                <Box className={contentStyle.floatingDiv}>
                    <img src="./images/rectangle_14.svg" style={{ marginRight: "48px" }} alt="" />
                    <img src="./images/rectangle_15.svg" style={{ marginRight: "48px" }} alt="" />
                    <img src="./images/rectangle_16.svg" style={{ marginRight: "48px" }} alt="" />
                    <img src="./images/rectangle_17.svg" alt="" />
                </Box>
                <Grid item xs={12} sm={12} md={6} lg={7} xl={6}>
                    <Box style={{ height: "340px" }}>
                        <img className={contentStyle.floatingImg11} src="./images/rectangle_11.svg" alt="" />
                        <img className={contentStyle.floatingImg12} src="./images/rectangle_12.svg" alt="" />
                        <img className={contentStyle.floatingImg13} src="./images/rectangle_13.svg" alt="" />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={5} xl={6}>
                    <Typography variant="h3" style={{ width: "480px", marginBottom: "16px" }}>
                        O que seu negócio precisa?
                    </Typography>
                    <Typography variant="h5" className={contentStyle.h5} style={{ textAlign: "left", width: "465px", }}>
                        Se o conteúdo que você produz não está chegando nas pessoas e em seus clientes, 
                        consequentemente impactando nas suas vendas então a gestão de tráfego pago é uma 
                        forma prática e de resultados excelentes. Tráfego é um dos principais métodos de 
                        divulgação e escala a serem utilizado em uma estratégia de marketing digital. 
                        Devido a diminuição do alcance orgânico pelas plataformas (Facebook e Instagram), 
                        torna-se indispensável o investimento em patrocinados por qualquer empresa que veicule 
                        produtos e faça vendas online.
                    </Typography>
                </Grid>
                <Grid item container xs={12} sm={12} md={12} lg={12} xl={12} style={{ marginTop: "136px" }}>
                    <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                        <Box style={{ 
                                marginBottom: "24px", 
                                background: "#E8FBFF", 
                                width: "106px", 
                                height: "96px", 
                                display: "flex", 
                                justifyContent: "center", 
                                alignItems: "center", 
                            }}>
                            <img src="./images/trafego.svg" alt="" />
                        </Box>
                        <Typography variant="h5" style={{ marginBottom: "24px", textAlign: "left", fontWeight: "bold", color: "#242424" }}>
                            O que é Tráfego?
                        </Typography>
                        <Typography variant="h5" style={{ textAlign: "left", width: "320px" }}>
                            Tráfego é as ações que as pessoas fazem ao navegar pela internet seja em aplicativo ou 
                            em sites, as pessoas clicam para visualizar vídeos, para ver mais informações sobre um 
                            produto ou comprar algo, as plataformas como Facebook e Google monitoram esses 
                            comportamentos e gera dados, que é o tráfego.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                        <Box style={{ 
                                marginBottom: "24px", 
                                background: "#E8FBFF", 
                                width: "106px", 
                                height: "96px", 
                                display: "flex", 
                                justifyContent: "center", 
                                alignItems: "center", 
                            }}>
                            <img src="./images/trafego.svg" alt="" />
                        </Box>
                        <Typography variant="h5" style={{ marginBottom: "24px", textAlign: "left", fontWeight: "bold", color: "#242424" }}>
                            Gestor de Tráfego Pago
                        </Typography>
                        <Typography variant="h5" style={{ textAlign: "left", width: "320px" }}>
                            É a pessoa que vai gerenciar os investimentos em anúncios, entender os objetivos dos clientes e alinhar as 
                            expectativas. Definir os testes e organização dos públicos ideal, apresentar relatório dos resultados em 
                            datas pré estabelecidas, auxiliar nas estratégias e criação de criativos de vídeos e fotos.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                        <Box style={{ 
                                marginBottom: "24px", 
                                background: "#E8FBFF", 
                                width: "106px", 
                                height: "96px", 
                                display: "flex", 
                                justifyContent: "center", 
                                alignItems: "center", 
                            }}>
                            <img src="./images/trafego.svg" alt="" />
                        </Box>
                        <Typography variant="h5" style={{ marginBottom: "24px", textAlign: "left", fontWeight: "bold", color: "#242424" }}>
                            Benefícios
                        </Typography>
                        <Typography variant="h5" style={{ textAlign: "left", width: "320px" }}>
                            Ganho de visibilidade e presença digital. Atração de audiência para seu negócio. Segmentação e 
                            personalização de anúncios para o público ideal.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        
        </>
    )
}

export default Content;