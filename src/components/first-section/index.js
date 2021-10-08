import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import ContainerCustom from '../container';

const styles = makeStyles(( theme ) => ({
    spacingHeader: {
        paddingTop: '184px',
    },
}));

function FirstSection() {
    const firstSectionStyles = styles();

    return (
        <ContainerCustom>
            <Grid container className={firstSectionStyles.spacingHeader}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Typography variant='h3' style={{ width: '100%', maxWidth: '448px' }}>
                    O que seu negócio precisa?
                    </Typography>
                    <img 
                        src='./images/seu-negocio.png' 
                        style={{ 
                            width: '100%', 
                            maxWidth: '320px', 
                            height: '432px',
                            position: 'relative',
                            top: '40px'
                        }} 
                        alt=''
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Typography variant='h5' style={{ marginBottom: '16px' }}>
                    Se o conteúdo que você produz não está chegando nas pessoas e em seus clientes, 
                    consequentemente impactando nas suas vendas então a gestão de tráfego pago é uma 
                    forma prática e de resultados excelentes.
                    </Typography>
                    <Typography variant='h5' style={{ marginTop: '16px', marginBottom: '16px' }}>
                    Tráfego é um dos principais métodos de divulgação e escala a serem utilizado em 
                    uma estratégia de marketing digital
                    </Typography>
                    <Typography variant='h5' style={{ marginTop: '16px' }}>
                    Devido a diminuição do alcance orgânico pelas plataformas (Facebook e Instagram), 
                    torna-se indispensável o investimento em patrocinados por qualquer empresa que 
                    veicule produtos e faça vendas online.
                    </Typography>
                </Grid>
            </Grid>
        </ContainerCustom>
    )
}

export default FirstSection;