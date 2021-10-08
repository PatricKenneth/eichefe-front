import { Grid, makeStyles} from '@material-ui/core';
import React from 'react';
import BoxInfo from './boxInfo';
import ContainerCustom from '../container';

const styles = makeStyles(( theme ) => ({
    spacingHeader: {
        marginTop: '184px',
    },
}));

function SecondSection() {
    const secondSectionStyles = styles();
    return(
        <ContainerCustom>
            <Grid container spacing={4} className={secondSectionStyles.spacingHeader}>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                    <BoxInfo
                        img='./images/icon_o_que_e.svg'
                        title='O que é Tráfego?'
                        content='Ações que as pessoas fazem ao navegar pela internet seja em aplicativo ou 
                        em sites,  nas plataformas como Facebook e Google monitoram esses comportamentos e 
                        gera dados, que é o tráfego.'
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                    <BoxInfo
                        img='./images/icon_gestor.svg'
                        title='Gestor de Tráfego Pago'
                        content='É a pessoa que gerencia os investimentos em anúncios, entender os objetivos
                        dos clientes e alinhar as expectativas. Definir os testes e organização dos públicos 
                        ideal, apresentando relatórios dos resultados.'
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                    <BoxInfo
                        img='./images/icon_grafico.svg'
                        title='Benefícios'
                        content='Ganho de visibilidade e presença digital. Atração de audiência para seu 
                        negócio. Segmentação e personalização de anúncios para o público ideal.'
                    />
                </Grid>
            </Grid>
        </ContainerCustom>

    )
}

export default SecondSection;