import { Box, Button, Grid, Hidden, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import FloatingButton from "../floatingButton";
import MediaCard from "../mediaCard";
import SimpleCard from "../simpleCard";
import SimpleModal from "../simpleModal";

const contentCard_1 = `Do negócio, alinhamento de expectativas e resultados,
                      definição de verba para anúncios e valor do meu serviço de gestão,
                      e datas para entrega de relatórios e resultados.`;

const contentCard_2 = `Da melhor estratégia para os anúncios, criação das campanhas, análise e 
                       otimização em datas pré estabelecida, retornos no whatsapp semanais ou a cada 15 dias.`;

const contentCard_3 = `Ao final do investimento mensal é entregue um relatório de desempenho
                       para o cliente saber o que aconteceu na conta, e os melhores resultados
                       e planejamento dos próximos passos.`;

const contentModal_1 = `Esse post é para você que tem um negócio e quer obter mais clientes, vender mais, aumentar 
                        seu delivery ou lotar sua agenda. 📈✅ Prints* (Resultado de um parceiro investido apenas 
                        350,00 a 450,00 por mês, no seu delivery.) Há uma oportunidade fazer isso com anúncios 
                        online, e só anunciando para a pessoa certa e no momento você consegue, quer dizer 
                        conseguimos juntos. 😄 Pensa que apenas grandes empresas podem investir em publicidade e 
                        propaganda ? através de campanhas patrocinadas no Facebook e Instagram, atualmente a maior 
                        rede social do mundo e ideal para gerar demanda. 📢 (investindo pouco) Quer gerar mais negócios 
                        para sua empresa? Entre em contato comigo no direct e vamos analisar como as redes sociais podem 
                        ajudar seu negócio!`;

const contentModal_2 = `Você pesquisa no Google ou Yahoo ? se eu fosse chutar, diria que 97% das pessoas comuns 😂😂 
                        pesquisam no google.. como assim "comuns" ? Velho, a pesquisa no google é mais simples, rápida 
                        e contém mais informações organizadas, é fácil usar os serviços da gigante, eles investem uma 
                        pancada de dinheiro e um tempão melhorando a sua experiência de uso nos serviços como gmail, 
                        google maps, youtube... enfim. E pra você que tem um Negocio Físico usar o Google Meu Negócio 
                        é uma ferramenta incrível para se comunicar, com quem está ali no celular apressado (muitas vezes) 
                        pesquisando sobre empresas próximas.. 🔎🏭 você pode adicionar informações de horários, se faz 
                        reservas, avisar se estará fechado em um feriado próximo, colocar link para seu canal de 
                        atendimento, adicionar fotos do ambiente, se tem acesso para cadeirantes, e isso tudo pra quê ? 
                        Para que o Google liste a sua empresa nos primeiros lugares quando alguém pesquisar pelo o que você 
                        faz. Você vai estar certificado de que é uma empresa verificada, possui boas avaliações, e 
                        principalmente, aos responde aos clientes, e fornece informações relevantes para as pessoas. *👇🏻 
                        Além disso, você recebe mensalmente um relatório por email com alguns dados relevantes, como quantas 
                        pessoas viram sua empresa no google, quantas solicitaram rota, mapa de calor dessas pessoas, e como 
                        as pessoas pesquisam pela sua empresa.`;

const contentModal_3 = `Quando se você começa ter conhecimento do que o tráfego pago pode fazer em um negócio os olhos começam 
                        a brilhar para as tantas oportunidades que ele que oferece, e realmente, hoje é uma ferramenta que pode 
                        virar o jogo de uma empresa. Mas nada disso adianta se o básico não tiver bem feito e vou encurtar o 
                        que é o básico aqui: Ter um bom produto, uma boa oferta e um excelente atendimento. Velho, umas das 
                        coisas mais chatas que existe é você comprar algo e se arrepender logo depois 😡, te deixa triste e 
                        incomodado de ter gastado aquele dinheiro que muitas vezes foi suado pra conseguir, e simplesmente você 
                        trocou por algo que não tem utilidade nenhuma. Um outro ponto que mais presto atenção nas empresas é o 
                        atendimento, seja ele em qualquer nível, desde do dono ao funcionário, você percebe o quão séria é ou a 
                        importância que ela dá ao cliente, a maneira que ela atende, desde das saudações a entrega e embrulho do 
                        produto, se for o caso, acredito que o atendimento é um ponto chave pra você se apaixonar por um empresa. 
                        E as vezes como já aconteceu comigo 😅, do produto nem ser tão bom assim kkk quanto eu esperava, mas 
                        mesmo assim gostei daquela empresa simplesmente pelo o seu bom atendimento... - E então, NÃO ESPERE QUE O 
                        TRÁFEGO PAGO FAÇA UM MILAGRE PARA VOCÊ e venda um produto ruim, com uma oferta péssima e um atendimento 
                        meia boca.`;

const styles = makeStyles(( theme ) => ({
    container: {
        padding: "48px 72px",
        [theme.breakpoints.only("xs")]: {
            padding: "48px 40px",
        },

    },
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
        [theme.breakpoints.only("xs")]: {
            fontSize: "36px",
            lineHeight: "50px",
        },
    },
    body1: {
        [theme.breakpoints.only("xs")]: {
            fontSize: "14px",
            lineHeight: "21px",
        },
    },
    subtitle1: {
        lineHeight: "58px",
        [theme.breakpoints.only("xs")]: {
            fontSize: "36px",
            lineHeight: "50px",
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
            width: "108px",
            height: "108px",
            top: "10px",
            left: "32px",
        },
    },
    floatingImg12: {
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
            width: "104px",
            height: "104px",
            top: "96px",
            left: "-16px",
        },
    },
    floatingImg13: {
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
        [theme.breakpoints.only("xs")]: {
            width: "86px",
            height: "86px",
            marginRight: "-24px",
        }
    },
    rectangle_74: {
        height: "510px",
        [theme.breakpoints.only("xs")]: {
            height: "259px",
            width: "262px",
            marginTop: "54px",
        },
    },
    divBoss: {
        marginLeft: "auto",
        [theme.breakpoints.down("md")]: {
            margin: "unset",
        }
    }
}));

function Content() {
    const contentStyle = styles();
    const [stateModal, setStateModal] = useState({
        content: '',
        title: '',
        open: false,
    });
    return (
        <>
            <Grid container className={contentStyle.container} style={{ background: "#E8FBFF" }}>
                <Grid item xs={12} sm={12} md={12} lg={5} xl={5}>
                    <Typography variant="h1" className={contentStyle.h1} style={{ ineHeight: "98px", }}>
                        Atinja seu público alvo
                    </Typography>
                    <Typography className={contentStyle.body1} style={{ lineHeight: "32px", margin: "16px 0px 40px 0px" }}>
                        Use o poder do Tráfego Pago e leve seu 
                        faturamento para o próximo nível.
                    </Typography>
                    <Button variant="contained" color="primary" className={contentStyle.buttonDark} href="#Services">
                        <Typography variant="button">
                            Para quem é o tráfego pago?
                        </Typography>
                    </Button>
                    <Button variant="outlined" color="primary" className={contentStyle.buttonAbout} href="#Boss">
                        <Typography variant="button" style={{ color: "#0085E8" }}>
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
                        <Typography style={{ fontSize: "24px", lineHeight: "24px", color:"#939191", }} >
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
                    <Box style={{ height: "340px", }}>
                        <img className={contentStyle.floatingImg11} src="./images/rectangle_11.svg" alt="" style={{ position: "relative" }} />
                        <img className={contentStyle.floatingImg12} src="./images/rectangle_12.svg" alt="" style={{ position: "relative" }} />
                        <img className={contentStyle.floatingImg13} src="./images/rectangle_13.svg" alt="" style={{ position: "relative" }} />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={5} xl={6} id="Traffic">
                    <Typography variant="subtitle1" className={contentStyle.subtitle1} style={{ width: "100%", maxWidth: "480px", marginBottom: "16px", }}>
                        O que seu negócio precisa?
                    </Typography>
                    <Typography className={contentStyle.body1} style={{ width: "100%", maxWidth: "440px", lineHeight: "28px", marginBottom: "16px" }}>
                        Se o conteúdo que você produz não está chegando nas pessoas e em seus clientes, 
                        consequentemente impactando nas suas vendas então a gestão de tráfego pago é uma 
                        forma prática e de resultados excelentes.
                    </Typography>
                    <Typography className={contentStyle.body1} style={{ width: "100%", maxWidth: "440px", lineHeight: "28px", marginBottom: "16px" }}>
                        Tráfego é um dos principais métodos de divulgação e escala a serem utilizado em 
                        uma estratégia de marketing digital.
                    </Typography>
                    <Typography className={contentStyle.body1} style={{ width: "100%", maxWidth: "440px", lineHeight: "28px", marginBottom: "16px" }}>
                        Devido a diminuição do alcance orgânico pelas plataformas (Facebook e Instagram), 
                        torna-se indispensável o investimento em patrocinados por qualquer empresa que 
                        veicule produtos e faça vendas online.
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
                        <Typography variant="h5" style={{ marginBottom: "24px", }}>
                            O que é Tráfego?
                        </Typography>
                        <Typography  style={{ width: "100%", maxWidth: "286px" }}>
                            Tráfego é as ações que as pessoas fazem ao navegar pela internet seja em aplicativo ou 
                            em sites, as pessoas clicam para visualizar vídeos, para ver mais informações sobre um 
                            produto ou comprar algo, as plataformas como Facebook e Google monitoram esses 
                            comportamentos e gera dados, que é o tráfego.
                        </Typography>
                    </Grid>
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
                        <Typography variant="h5" style={{ marginBottom: "24px", }}>
                            Gestor de Tráfego Pago
                        </Typography>
                        <Typography style={{ width: "100%", maxWidth: "286px" }}>
                            É a pessoa que vai gerenciar os investimentos em anúncios, entender os objetivos dos clientes e alinhar as 
                            expectativas. Definir os testes e organização dos públicos ideal, apresentar relatório dos resultados em 
                            datas pré estabelecidas, auxiliar nas estratégias e criação de criativos de vídeos e fotos.
                        </Typography>
                    </Grid>
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
                        <Typography variant="h5" style={{ marginBottom: "24px" }}>
                            Benefícios
                        </Typography>
                        <Typography style={{ width: "100%", maxWidth: "286px" }}>
                            Ganho de visibilidade e presença digital. Atração de audiência para seu negócio. Segmentação e 
                            personalização de anúncios para o público ideal.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container justify="center" alignItems="center" style={{ background: "#F7F7F7", padding: "176px 40px 72px 40px", }}>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginBottom: "40px" }} id="Services">
                    <Typography variant="subtitle1" className={contentStyle.subtitle1} style={{ marginBottom: "40px", maxWidth: "386px", width: "100%" }}>
                        Para quem é o tráfego pago?
                    </Typography>
                    <Typography style={{ maxWidth: "499px", width: "100%", marginBottom: "16px" }}>
                        Para todo criador de conteúdo ou para quem vende algum produto e quer escalar 
                        sua visibilidade e vendas. Seja em site, perfil do Instagram, página de vendas e etc…
                    </Typography>
                    <Typography style={{ maxWidth: "499px", width: "100%", marginBottom: "16px" }}>
                        É ideal para quem está iniciando, pois não exige grandes investimentos iniciais como 
                        lanchonetes, restaurantes e pizzarias que tem uma margem de lucro pequena. 
                    </Typography>
                    <Typography style={{ maxWidth: "499px", width: "100%", marginBottom: "16px" }}>
                        Serve também para levar pessoas ao seu estabelecimento com a inauguração do seu negócio, 
                        crie campanhas para cada momento do seu negócio. Defina onde está seu público ideal e 
                        utilize para atração no facebook, instagram ou google
                    </Typography>
                </Grid>
                <Grid item container xs={12} sm={12} md={12} lg={6} xl={6}>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6} style={{ marginBottom: "48px" }}>
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
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6} style={{ marginBottom: "48px" }}>
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
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6} style={{ marginBottom: "48px" }}>
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
                </Grid>
            </Grid>
            <Grid container justify="center" alignItems="center" style={{ background: "#F7F7F7", padding: "128px 40px 72px 40px", }}>
                <Grid item style={{ marginBottom: "80px" }}>
                    <Typography variant="subtitle1" className={contentStyle.subtitle1} style={{ textAlign: "center", marginBottom: "40px", maxWidth: "491px", width: "100%" }}>
                        Como funciona meu serviço ?
                    </Typography>
                </Grid>
                <Grid item container spacing={4} style={{ marginBottom: "88px" }}>
                    <Grid item xs={12} sm={6} md={4} lg={4} xl={4} style={{ display: "flex", justifyContent: "center" }}>
                        <SimpleCard image="./images/meeting.svg" title="Reunião para entendimento" content={contentCard_1} numberCard={1} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4} xl={4} style={{ display: "flex", justifyContent: "center" }}>
                        <SimpleCard image="./images/study.svg" title="Estudo e criação" content={contentCard_2} numberCard={2} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4} xl={4} style={{ display: "flex", justifyContent: "center" }}>
                        <SimpleCard image="./images/report.svg" title="Entrega de Relatório" content={contentCard_3} numberCard={3} />
                    </Grid>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary" 
                            style={{ 
                                height: "64px", 
                                width: "281px",
                                borderRadius: "6px",
                            }}>
                        <Typography variant="button" style={{ fontSize: "20px", fontWeight: "900" }}>
                            Entrar em contato
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
            <Grid container justify="center" alignItems="center" style={{ background: "#F7F7F7", padding: "176px 40px 72px 40px", }}>
                <Grid item style={{ marginBottom: "80px" }}>
                    <Typography variant="subtitle1" className={contentStyle.subtitle1} style={{ textAlign: "center", marginBottom: "8px", width: "100%" }}>
                        Dicas do Chefe
                    </Typography>
                    <Typography style={{ textAlign: "center", width: "100%" }}>
                        Tráfego é um jogo de médio e longo prazo
                    </Typography>
                </Grid>
                <Grid item container spacing={4}>
                    <Grid item xs={12} sm={6} md={4} lg={4} xl={4} style={{ display: "flex", justifyContent: "center" }}>
                        <MediaCard 
                            image="./images/capa_artigo1.png" 
                            title="Invista em Mídia Paga e Promova seu Negócio"
                            setStateModal={setStateModal} 
                            contentModal={contentModal_1}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4} xl={4} style={{ display: "flex", justifyContent: "center" }}>
                        <MediaCard 
                            image="./images/capa_artigo2.png" 
                            title="O básico sobre o Google Meu Negócio para destacar sua empresa nos resultados de pesquisa"
                            setStateModal={setStateModal}
                            contentModal={contentModal_2}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4} xl={4} style={{ display: "flex", justifyContent: "center" }}>
                        <MediaCard 
                            image="./images/capa_artigo3.png" 
                            title="Não espere isso do tráfego pago"
                            setStateModal={setStateModal}
                            contentModal={contentModal_3}
                        />
                    </Grid>
                    <SimpleModal stateModal={stateModal} setStateModal={setStateModal} />
                </Grid>
            </Grid>
            <Hidden xsDown>
                <Grid container style={{ background: "#F7F7F7", padding: "176px 72px 72px 72px", }} id="Results">
                    <Grid item style={{ marginBottom: "24px"}}>
                        <Typography variant="subtitle2">
                            Dra. Alana Mirely
                        </Typography>
                        <Typography variant="h4">
                            Campanha para uma parceira da odontologia, para agendamentos em seu Whatsapp.
                        </Typography>
                    </Grid>
                    <Grid item container style={{ marginBottom: "24px", borderBottom: "1px solid #D1D1D1", paddingBottom: "64px" }}>
                        <Grid item container alignContent="center" xs={12} sm={12} md={12} lg={9} xl={10} 
                            style={{ 
                                padding: "40px", 
                                background: "#E8FBFF", 
                                maxWidth: "909px", 
                                maxHeight: "504px",
                            }}>
                            <img src="./images/rectangle_77.jpeg" alt="" style={{ width: "100%" }} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={3} xl={2} 
                            style={{ 
                                margin: "auto", 
                                padding: "40px 24px", 
                                background: "#E8FBFF", 
                                maxWidth: "288px", 
                                height: "504px" 
                            }}>
                            <img src="./images/rectangle_79.svg" alt="" style={{ width: "100%" }} />
                        </Grid>
                    </Grid>
                    <Grid item style={{ marginBottom: "24px"}}>
                        <Typography variant="subtitle2">
                            Dona Costela Delivery
                        </Typography>
                        <Typography variant="h4" style={{ maxWidth: "595px" }}>
                            Parceira de um restaurante delivery em Brasília.
                        </Typography>
                    </Grid>
                    <Grid item container style={{ marginBottom: "24px", borderBottom: "1px solid #D1D1D1", paddingBottom: "64px" }}>
                        <Grid item xs={12} sm={12} md={12} lg={9} xl={10} 
                            style={{ 
                                padding: "40px", 
                                background: "#E8FBFF", 
                                maxWidth: "909px", 
                                maxHeight: "504px",
                                display: "flex",
                            }}>
                            <img src="./images/rectangle_80.jpeg" alt="" style={{ margin: "auto", width: "100%" }} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={3} xl={2} 
                            style={{ 
                                margin: "auto", 
                                padding: "40px 24px", 
                                background: "#E8FBFF", 
                                maxWidth: "288px", 
                                height: "504px",
                            }}>
                            <img src="./images/rectangle_81.jpeg" alt="" style={{ width: "100%" }} />
                        </Grid>
                    </Grid>
                    <Grid item style={{ marginBottom: "24px"}}>
                        <Typography variant="subtitle2">
                            Rodrigo Sousa Personal
                        </Typography>
                        <Typography variant="h4" style={{ maxWidth: "595px" }}>
                            Campanha de inscrições abertas, parceiro de um projeto de treinamento físico para emagrecimento
                        </Typography>
                    </Grid>
                    <Grid item container style={{ marginBottom: "24px", borderBottom: "1px solid #D1D1D1", paddingBottom: "64px" }}>
                        <Grid item xs={12} sm={12} md={12} lg={9} xl={10} 
                            style={{ 
                                padding: "40px", 
                                background: "#E8FBFF", 
                                maxWidth: "909px", 
                                maxHeight: "504px",
                                display: "flex",
                            }}>
                            <img src="./images/rectangle_82.jpeg" alt="" style={{ margin: "auto", width: "100%" }} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={3} xl={2} 
                            style={{ 
                                margin: "auto", 
                                padding: "40px 24px", 
                                background: "#E8FBFF", 
                                maxWidth: "288px", 
                                height: "504px",
                            }}>
                            <img src="./images/rectangle_83.jpeg" alt="" style={{ width: "100%" }} />
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>
            <Grid container style={{ background: "#E8FBFF", padding: "176px 72px 232px 72px" }} id="Boss">
                <Grid item style={{ maxWidth: "488px" }}>
                    <Typography variant="subtitle1" className={contentStyle.subtitle1} style={{ marginBottom: "32px" }}>
                        Quem sou eu?
                    </Typography>
                    <Typography style={{ lineHeight: "28px", marginBottom: "40px", }}>
                        Formado em Sistemas de Informação pela FJN - Faculdade de Juazeiro do Norte, comecei a me encantar 
                        por Marketing em uma única cadeira no curso, logo então paguei estágio em uma agência de marketing 
                        em 2019, daí trabalhei com várias ferramentas e foi onde comecei a fazer meus primeiros anúncios 
                        no facebook ads. Em maio de 2020 resolvi prestar serviço de tráfego pago para negócios locais como 
                        restaurantes, lojas, oficinas, bares, clínicas médicas, profissionais liberais e criadores de 
                        conteúdo... Consigo tanto promover seu negócio com anúncios profissionais como ajudar a desenvolver 
                        estratégias digitais para chegar no seu objetivo.
                    </Typography>
                    <Box style={{
                        marginBottom: "40px",
                        borderRadius: "8px",
                        background: "#002643",
                        padding: "32px 48px 32px 48px",
                    }}>
                        <Typography style={{
                            fontSize: "14px",
                            fontStyle: "italic",
                            fontWeight: "600",
                            lineHeight: "18px",
                            letterSpacing: "0em",
                            textAlign: "left",
                            color: "#F7F7F7",
                        }}>
                            “As redes sociais se tornou o principal canal para empresas expressar diariamente sua identidade e 
                            filosofia, com potencial de estar conectado com seu cliente 24hrs por dia aprendendo mais sobre ele”
                        </Typography>
                    </Box>
                </Grid>
                <Grid item className={contentStyle.divBoss} style={{ maxWidth: "595px", maxHeight: "691px", }}>
                    <img src="./images/boss.svg" alt="" style={{ width: "100%" }} />
                </Grid>
            </Grid>
            <Hidden smDown>
                <FloatingButton />
            </Hidden>
        </>
    )
}

export default Content;