import { Button, Grid, Hidden, Typography} from "@mui/material";
import React from "react";
import CardInfo from "./cardInfo";
import ContainerCustom from "../container";
import Carousel from "./carousel";
import ModalCustom from "../modal";

function SecondSection() {
    const [open, setOpen] = React.useState(false);

    return(
        <ContainerCustom>
            <Grid container columnSpacing={4} marginTop="184px" marginBottom="224px">
                <Grid item xs={12} md={6} lg={4} >
                    <CardInfo
                        img="./images/icon_o_que_e.svg"
                        title="O que é Tráfego?"
                        content="Ações que as pessoas fazem ao navegar pela internet seja em aplicativo ou 
                        em sites,  nas plataformas como Facebook e Google monitoram esses comportamentos e 
                        gera dados, que é o tráfego."
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={4} >
                    <CardInfo
                        img="./images/icon_gestor.svg"
                        title="Gestor de Tráfego Pago"
                        content="É a pessoa que gerencia os investimentos em anúncios, entender os objetivos
                        dos clientes e alinhar as expectativas. Definir os testes e organização dos públicos 
                        ideal, apresentando relatórios dos resultados."
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={4} >
                    <CardInfo
                        img="./images/icon_grafico.svg"
                        title="Benefícios"
                        content="Ganho de visibilidade e presença digital. Atração de audiência para seu 
                        negócio. Segmentação e personalização de anúncios para o público ideal."
                    />
                </Grid>
            </Grid>
            <Grid container>
                <Typography variant="h3" maxWidth="352px" marginBottom="32px" >
                        Para quem é o tráfego pago?
                </Typography>
            </Grid>
            <Grid container columnSpacing={4}>
                <Grid item xs={12} md={6} xl={7}>
                    <Typography variant="h4">
                        Para todo criador de conteúdo ou para quem vende algum produto e quer 
                        escalar sua visibilidade e vendas. Seja em site, perfil do Instagram, 
                        página de vendas e etc…
                    </Typography>
                    <Typography variant="h4" marginTop="24px" marginBottom="24px">
                        É ideal para quem está iniciando, pois não exige grandes investimentos 
                        iniciais como lanchonetes, restaurantes e pizzarias que tem uma margem 
                        de lucro pequena.
                    </Typography>
                    <Typography variant="h4">
                        Serve também para levar pessoas ao seu estabelecimento com a inauguração 
                        do seu negócio, crie campanhas para cada momento do seu negócio. Defina 
                        onde está seu público ideal e utilize para atração no Facebook, Instagram 
                        ou Google.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} xl={5}>
                    <Carousel />
                </Grid>
            </Grid>
            <Grid container display="flex" justifyContent="center" marginTop="224px">
                <Grid item>
                    <Typography 
                        variant="h2" 
                        maxWidth="496px" 
                        marginBottom="32px"
                        textAlign="center"
                    >
                        Como funciona meu serviço?
                    </Typography>
                </Grid>
                <Grid 
                    item 
                    container 
                    justifyContent="space-between" 
                    marginTop="400px"
                >
                    <Grid item xs={12} md={4} display="flex" alignItems="center" >
                        <Typography variant="h3">
                            1°- Reunião para entendimento
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Hidden mdDown>
                            <div 
                                style={{ 
                                    display: "flex", 
                                    alignItems: "center", 
                                    height: "100%",
                                    width: "100%",
                                    justifyContent: "center",
                                }}
                            >
                                <div
                                    style={{
                                        width: "20px",
                                        height: "20px",
                                        background: "#F7F7F7",
                                        borderRadius: "100%"
                                    }}
                                />
                            </div>
                        </Hidden>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h4">
                            Do negócio, alinhamento de expectativas e resultados, definição de verba 
                            para anúncios e valor do meu serviço de gestão, e datas para entrega de 
                            relatórios e resultados.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid 
                    item 
                    container 
                    justifyContent="space-between" 
                    marginTop="400px"
                >
                    <Grid item xs={12} md={4} display="flex" alignItems="center">
                        <Typography variant="h3">
                            2°- Estudo e criação
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Hidden mdDown>
                            <div 
                                style={{ 
                                    display: "flex", 
                                    alignItems: "center", 
                                    height: "100%",
                                    width: "100%",
                                    justifyContent: "center",
                                }}
                            >
                                <div
                                    style={{
                                        width: "20px",
                                        height: "20px",
                                        background: "#F7F7F7",
                                        borderRadius: "100%"
                                    }}
                                />
                            </div>
                        </Hidden>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h4">
                            Da melhor estratégia para os anúncios, criação das campanhas, análise e 
                            otimização em datas pré estabelecida, retornos no Whatsapp semanais ou 
                            a cada 15 dias.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid 
                    item 
                    container 
                    justifyContent="space-between" 
                    marginTop="400px"
                    marginBottom="296px"
                >
                    <Grid item xs={12} md={4} display="flex" alignItems="center">
                        <Typography variant="h3">
                            3°- Entrega de Relatório
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Hidden mdDown>
                            <div 
                                style={{ 
                                    display: "flex", 
                                    alignItems: "center", 
                                    height: "100%",
                                    width: "100%",
                                    justifyContent: "center",
                                }}
                            >
                                <div
                                    style={{
                                        width: "20px",
                                        height: "20px",
                                        background: "#F7F7F7",
                                        borderRadius: "100%"
                                    }}
                                />
                            </div>
                        </Hidden>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h4">
                            Ao final do investimento mensal é entregue um relatório de desempenho 
                            para o cliente saber o que aconteceu na conta, e os melhores resultados 
                            e planejamento dos próximos passos.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="center" >
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={() => setOpen(true)} 
                    style={{ padding: "16px 32px" }}
                >
                    <Typography variant="h5" color="#F7F7F7">
                        Saiba Mais
                    </Typography>
                </Button>
                <ModalCustom open={open} setOpen={setOpen} />
            </Grid>
            <Grid container marginTop="136px">
                <Grid item xs={12} marginBottom="8px">
                    <Typography variant="h3">
                        Dra. Alana Mirely
                    </Typography>
                </Grid>
                <Grid item xs={12} marginBottom="40px">
                    <Typography variant="h5">
                        Campanha para uma parceira da odontologia, para agendamentos em seu Whatsapp.
                    </Typography>
                </Grid>
                <Grid item xs={12} display="flex" justifyContent="space-between">
                    <img alt="" src="./images/resultado_1.svg" />
                    <img alt="" src="./images/depoimento_1.svg" />
                </Grid>
            </Grid>
            <Grid container marginTop="136px">
                <Grid item xs={12} marginBottom="8px">
                    <Typography variant="h3">
                        Dona Costela Delivery
                    </Typography>
                </Grid>
                <Grid item xs={12} marginBottom="40px">
                    <Typography variant="h5">
                        Parceira de um restaurante delivery em Brasília.
                    </Typography>
                </Grid>
                <Grid item xs={12} display="flex" justifyContent="space-between">
                    <img alt="" src="./images/resultado_2.svg" />
                    <img alt="" src="./images/depoimento_2.svg" />
                </Grid>
            </Grid>
            <Grid container marginTop="136px">
                <Grid item xs={12} marginBottom="8px">
                    <Typography variant="h3">
                        Rodrigo Sousa Personal
                    </Typography>
                </Grid>
                <Grid item xs={12} marginBottom="40px">
                    <Typography variant="h5">
                        Campanha de inscrições abertas, parceiro de um projeto de treinamento físico para emagrecimento.
                    </Typography>
                </Grid>
                <Grid item xs={12} display="flex" justifyContent="space-between">
                    <img alt="" src="./images/resultado_3.svg" />
                    <img alt="" src="./images/depoimento_3.svg" />
                </Grid>
            </Grid>
        </ContainerCustom>

    )
}

export default SecondSection;