import { Box, Button, Grid, Hidden, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const styles = makeStyles(( theme ) => ({
    floatingDiv: {
        background: "#F7F7F7",
        width: "100%",
        maxWidth: "950px",
        height: "177px",
        position: "relative",
        top: "-110px",
        left: "0px",
        boxShadow: "0px 0px 40px rgba(0, 0, 0, 0.05)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    floatingDivImgs: {
        marginRight: "48px",
        [theme.breakpoints.only("sm")]: {
            marginRight: "8px",
        }
    },
    floatingContainer: {
        background: "#F7F7F7", 
        padding: "48px 120px",
        [theme.breakpoints.down("md")]:{
            padding: "40px",
        }
    },
    h1: {
        lineHeight: "98px", 
        width: "475px",
        [theme.breakpoints.only("md")]: {
            width: "100%",
        },
        [theme.breakpoints.only("sm")]: {
            width: "100%",
        },
        [theme.breakpoints.only("xs")]: {
            fontSize: "36px",
            lineHeight: "50px",
            width: "100%",
        },
    },
    h5: {
        width: "399px",
        [theme.breakpoints.only("md")]: {
            width: "100%",
        },
        [theme.breakpoints.only("sm")]: {
            width: "100%",
        },
        [theme.breakpoints.only("xs")]: {
            fontSize: "14px",
            lineHeight: "21px",
            width: "100%",
        },
    },
    button: {
        [theme.breakpoints.only("xs")]: {
            fontSize: "16px",
            width: "100%",
        },
    },
    buttonDark: {
        background: "#141414", 
        marginRight: "16px", 
        height: "60px", 
        borderRadius: "6px",
        [theme.breakpoints.only("xs")]: {
            height: "45px",
            width: "100%",
            marginBottom: "24px",
        },
    },
    buttonAbout: {
        marginRight: "16px", 
        height: "60px", 
        width: "161px", 
        borderRadius: "6px",
        [theme.breakpoints.only("xs")]: {
            height: "45px",
            width: "100%",
        },
    },
    floatingImg11: {
        position: "relative",
        top: "10px",
        left: "176px",
        [theme.breakpoints.only("md")]: {
            width: "200px",
            height: "200px",
            top: "10px",
            left: "50px",
        },
        [theme.breakpoints.only("sm")]: {
            width: "142px",
            height: "142px",
            top: "-50px",
            left: "177px",
        },
        [theme.breakpoints.down("xs")]: {
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
        [theme.breakpoints.only("md")]: {
            width: "208px",
            height: "208px",
            top: "196px",
            left: "-50px",
        },
        [theme.breakpoints.only("sm")]: {
            width: "150px",
            height: "150px",
            top: "80px",
            left: "106px",
        },
        [theme.breakpoints.down("xs")]: {
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
        [theme.breakpoints.only("md")]: {
            width: "150px",
            height: "150px",
            top: "-150px",
            left: "250px",
        },
        [theme.breakpoints.only("sm")]: {
            width: "125px",
            height: "125px",
            top: "-58px",
            left: "24px",
        },
        [theme.breakpoints.down("xs")]: {
            width: "106px",
            height: "106px",
            top: "-5px",
            left: "-50px",
        },
    },
    rectangle_74: {
        height: "510px",
        [theme.breakpoints.only("xs")]: {
            height: "259px",
            width: "262px",
            marginTop: "54px",
        },
    }
}));

function Content() {
    const contentStyle = styles();
    return (
        <>
            <Grid container style={{ background: "#E8FBFF", padding: "48px 72px" }}>
                <Grid item xs={12} sm={12} md={12} lg={5} xl={5}>
                    <Typography variant="h1" className={contentStyle.h1}>
                        Atinja seu público alvo
                    </Typography>
                    <Typography variant="h5" className={contentStyle.h5} style={{ margin: "16px 0px 40px 0px", textAlign: "left", }}>
                        Use o poder do Tráfego Pago e leve seu 
                        faturamento para o próximo nível.
                    </Typography>
                    <Button variant="contained" color="primary" className={contentStyle.buttonDark}>
                        <Typography variant="button" className={contentStyle.button}>
                            Para quem é o tráfego pago?
                        </Typography>
                    </Button>
                    <Button variant="outlined" color="primary" className={contentStyle.buttonAbout}>
                        <Typography variant="button" className={contentStyle.button}>
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
                        <Typography variant="h5" >
                            88 9903-0508
                        </Typography>
                    </Box>
                </Grid>
                <Grid item container justify="center" xs={12} sm={12} md={12} lg={7} xl={7} style={{ marginBottom: "40px" }}>
                    <img src="./images/rectangle_74.svg" alt="" className={contentStyle.rectangle_74} />
                </Grid>
            </Grid>
            <Grid container justify="center" className={contentStyle.floatingContainer}>
                <Hidden only="xs">
                    <Box className={contentStyle.floatingDiv}>
                        <img src="./images/rectangle_14.svg" className={contentStyle.floatingDivImgs} alt="" />
                        <img src="./images/rectangle_15.svg" className={contentStyle.floatingDivImgs} alt="" />
                        <img src="./images/rectangle_16.svg" className={contentStyle.floatingDivImgs} alt="" />
                        <img src="./images/rectangle_17.svg" className={contentStyle.floatingDivImgs} alt="" />
                        <img src="./images/rectangle_18.svg" className={contentStyle.floatingDivImgs} alt="" />
                        <img src="./images/rectangle_19.svg" alt="" />
                    </Box>
                </Hidden>
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
                    <Grid item xs={12} sm={6} md={6} lg={4} xl={4} style={{ marginBottom: "32px" }}>
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
                    <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
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
                    <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
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
            <Grid container justify="center" alignItems="center" style={{ background: "#F7F7F7", padding: "176px 40px 72px 40px", }}>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginBottom: "40px" }}>
                    <Typography variant="h3" style={{ marginBottom: "40px", maxWidth: "386px", width: "100%" }}>
                        Para quem é o tráfego pago?
                    </Typography>
                    <Typography variant="h5" style={{ textAlign: "left", maxWidth: "520px", width: "100%" }}>
                        Para todo criador de conteúdo ou para quem vende algum produto e quer escalar 
                        sua visibilidade e vendas. Seja em site, perfil do Instagram, página de vendas e etc… 
                        É ideal para quem está iniciando, pois não exige grandes investimentos iniciais como 
                        lanchonetes, restaurantes e pizzarias que tem uma margem de lucro pequena. Serve 
                        também para levar pessoas ao seu estabelecimento com a inauguração do seu negócio, 
                        crie campanhas para cada momento do seu negócio. Defina onde está seu público ideal e 
                        utilize para atração no facebook, instagram ou google
                    </Typography>
                </Grid>
                <Grid item container spacing={2} xs={12} sm={12} md={12} lg={6} xl={6}>
                    <Grid item container xs={6} sm={6} md={6} lg={6} xl={6} style={{ marginBottom: "48px" }}>
                        <Box width="100%" height="240px" maxWidth="282px" style={{ backgroundImage: "url(./images/rectangle_22.svg)" }}>
                            <Box width="100%" height="64px" maxWidth="282px" borderRadius="10px" 
                                 style={{ background: "#0085E8", 
                                          display: "flex", 
                                          justifyContent: "center", 
                                          alignItems: "center",
                                          position: "relative",
                                          top: "190px"
                                        }}>
                                <Typography variant="button" style={{ color: "#F7F7F7"  }}>
                                    Profissionais liberais
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item container xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Box width="100%" height="240px" maxWidth="282px" style={{ backgroundImage: "url(./images/rectangle_23.svg)" }}>
                            <Box width="100%" height="64px" maxWidth="282px" borderRadius="10px" 
                                 style={{ background: "#0085E8", 
                                          display: "flex", 
                                          justifyContent: "center", 
                                          alignItems: "center",
                                          position: "relative",
                                          top: "190px"
                                        }}>
                                <Typography variant="button" style={{ color: "#F7F7F7"  }}>
                                    Restaurantes
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item container xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Box width="100%" height="240px" maxWidth="282px" style={{ backgroundImage: "url(./images/rectangle_24.svg)" }}>
                            <Box width="100%" height="64px" maxWidth="282px" borderRadius="10px" 
                                 style={{ background: "#0085E8", 
                                          display: "flex", 
                                          justifyContent: "center", 
                                          alignItems: "center",
                                          position: "relative",
                                          top: "190px"
                                        }}>
                                <Typography variant="button" style={{ color: "#F7F7F7"  }}>
                                    Lojas
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item container xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Box width="100%" height="240px" maxWidth="282px" style={{ backgroundImage: "url(./images/rectangle_25.svg)" }}>
                            <Box width="100%" height="64px" maxWidth="282px" borderRadius="10px" 
                                 style={{ background: "#0085E8", 
                                          display: "flex", 
                                          justifyContent: "center", 
                                          alignItems: "center",
                                          position: "relative",
                                          top: "190px"
                                        }}>
                                <Typography variant="button" style={{ color: "#F7F7F7"  }}>
                                    Bares
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Content;