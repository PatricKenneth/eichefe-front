import React from 'react';
import ContainerCustom from '../container';
import { Grid, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function ThirdSection() {
    return(
        <ContainerCustom>
            <Grid container marginTop="224px" padding="96px 0px" columnSpacing={4} >
                <Grid item xs={12} md={6}>
                    <img alt="" src="./images/boss.svg" />
                </Grid>
                <Grid item xs={12} md={6} >
                    <Typography variant="h3" fontWeight="bold" marginBottom="24px">
                        Quem sou eu?
                    </Typography>
                    <Typography variant="h4" color="#F7F7F7" fontStyle="italic" fontWeight="bold" marginBottom="24px">
                        “As redes sociais se tornou o principal canal para empresas expressar 
                        diariamente sua identidade e filosofia, com potencial de estar conectado 
                        com seu cliente 24hrs por dia aprendendo mais sobre ele”
                    </Typography>
                    <Typography variant="h6" lineHeight="20px" marginBottom="16px">
                        Formado em Sistemas de Informação pela FJN - Faculdade de Juazeiro do Norte, 
                        comecei a me encantar por Marketing em uma única cadeira no curso, logo 
                        então paguei estágio em uma agência de marketing em 2019, daí trabalhei com 
                        várias ferramentas e foi onde comecei a fazer meus primeiros anúncios no 
                        facebook ads. Em maio de 2020 resolvi prestar serviço de tráfego pago para 
                        negócios locais como restaurantes, lojas, oficinas, bares, clínicas médicas, 
                        profissionais liberais e criadores de conteúdo... 
                    </Typography>
                    <Typography variant="h6" lineHeight="20px" >
                        Consigo tanto promover seu negócio com anúncios profissionais como 
                        ajudar a desenvolver estratégias digitais para chegar no seu objetivo.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container display="flex" justifyContent="center">
                <div 
                    style={{ 
                        background: '#0085E8', 
                        width: '70px', 
                        height: '70px',
                        position: 'relative',
                        divShadow: '0px 0px 40px rgba(0, 0, 0, 0.05)',
                        borderRadius: '85px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        top: '34px'
                    }}
                >
                    <ArrowDownwardIcon htmlColor="#C5C5C5" />
                </div>
            </Grid>
        </ContainerCustom>

    )
}

export default ThirdSection;