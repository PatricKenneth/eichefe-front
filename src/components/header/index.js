import React from "react";
import { Grid, Typography, Box, makeStyles, Button } from "@material-ui/core";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ContainerCustom from "../container";

const styles = makeStyles(( theme ) => ({
    spacing: {
        margin: '0px 48px',
        [theme.breakpoints.only('lg')]: {
            margin: '0px 40px',
        },
        [theme.breakpoints.only('md')]: {
            margin: '0px 16px',
        },
    },
}));

function Header() {
    const headerStyles = styles();
    return (
        <ContainerCustom>
            <Box style={{ borderBottom: '2px solid #0085E8', paddingBottom: '16px' }}>
                <Grid container alignItems='center'>
                    <Grid item xs={12} sm={12} md={3} lg={2} xl={2}>
                        <img src='./images/logo.svg' alt='' />
                    </Grid>
                    <Grid item xs={12} sm={12} md={7} lg={8} xl={8} container justifyContent='center'>
                        <Grid item className={headerStyles.spacing}>
                            <Typography variant="body1">
                                Tráfego 
                            </Typography>
                        </Grid>
                        <Grid item className={headerStyles.spacing}>
                            <Typography variant="body1">
                                Serviços
                            </Typography>
                        </Grid>
                        <Grid item className={headerStyles.spacing}>
                            <Typography variant="body1">
                                Resultados
                            </Typography>
                        </Grid>
                        <Grid item className={headerStyles.spacing}>
                            <Typography variant="body1">
                                Sobre
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={2} lg={2} xl={2} container justifyContent='flex-end'>
                        <Grid item className={headerStyles.spacing}>
                            <img src='./images/instagram.svg' alt='' />
                        </Grid>
                        <Grid item>
                            <img src='./images/whatsapp.svg' alt='' />
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Grid container style={{ marginTop: '72px' }}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} style={{ display: 'flex', alignItems: 'center' }} >
                    <Box>
                        <Typography variant='body1' style={{ width: '100%', maxWidth: '216px', marginBottom: '32px' }}>
                            Precisa melhorar as suas campanhas de tráfego?
                        </Typography>
                        <Typography variant='h2' style={{ width: '100%', maxWidth: '400px', marginBottom: '32px' }}>
                            Atinja seu <span style={{ color: '#0085E8' }}>público alvo</span>
                        </Typography>
                        <Button 
                            variant='contained' 
                            color='primary' 
                            endIcon={<ArrowForwardIcon htmlColor='#C5C5C5' />}
                            style={{ width: '100%', maxWidth: '295px', height: '48px' }}
                        >
                            <Typography variant='button'>
                                Comece sua campanha
                            </Typography>
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} style={{ display: 'flex', justifyContent: 'end' }}>
                    <img src='./images/foto.png' alt='' style={{ width: '100%', maxWidth: '496px', height: '406px' }} />
                </Grid>
            </Grid>
            <Grid container justifyContent='center' style={{ marginTop: '24px' }}>
                <Grid item>
                    <img src='./images/scroll.svg' alt='' />
                </Grid>
            </Grid>
            <Grid container justifyContent='center' style={{ paddingTop: '32px' }}>
                <Grid item>
                    <Box 
                        style={{ 
                            background: '#030A13', 
                            width: '950px', 
                            height: '177px',
                            position: 'relative',
                            top: '88px',
                            boxShadow: '0px 0px 40px rgba(0, 0, 0, 0.05)',
                            borderRadius: '6px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Box style={{ margin: '0px 24px' }}>
                            <img src='./images/1.png' style={{  width: '100%', maxWidth: '98px', height: '98px' }} alt='' />
                        </Box>
                        <Box style={{ margin: '0px 24px' }}>
                            <img src='./images/2.png' style={{  width: '100%', maxWidth: '98px', height: '98px' }} alt='' />
                        </Box>
                        <Box style={{ margin: '0px 24px' }}>
                            <img src='./images/3.png' style={{  width: '100%', maxWidth: '98px', height: '98px' }} alt='' />
                        </Box>
                        <Box style={{ margin: '0px 24px' }}>
                            <img src='./images/4.png' style={{  width: '100%', maxWidth: '98px', height: '98px' }} alt='' />
                        </Box>
                        <Box style={{ margin: '0px 24px' }}>
                            <img src='./images/5.png' style={{  width: '100%', maxWidth: '98px', height: '98px' }} alt='' />
                        </Box>
                        <Box style={{ margin: '0px 24px' }}>
                            <img src='./images/6.png' style={{  width: '100%', maxWidth: '98px', height: '98px' }} alt='' />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ContainerCustom>
    )
}

export default Header;