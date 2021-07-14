import { Hidden, makeStyles } from "@material-ui/core";
import { Box, Grid, Typography, TextField } from "@material-ui/core";
import React, { useState } from "react";
import ReactInputMask from "react-input-mask";
import { ApiTelegram } from "../../resources/services/sendMessage";
import ButtonLoading from "../buttonLoading";
import SimpleAlert from "../simpleAlert";

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
            marginBottom: "64px"
        }
    },
    a: {
        "&:hover": {
            color: "#3d5afe",
        },
        textDecoration: "none",
        color: "#474747",
    }
}))

const  INITIAL_SEND_MESSAGE = {
    name: "",
    whats: "",
    email: "",
    description: "",
}

function Footer() {
    const classes = styles();
    const [sendMessage, setSendMessage] = useState(INITIAL_SEND_MESSAGE);
    const [loading, setLoading] = React.useState(false);
    const [alert, setAlert] = useState({
        open: false,
        severity: "", 
        content: "",
    })

    async function onFinish() {
        const { name, whats, email } = sendMessage;
        try {
            if (name && whats && email) {
                setLoading(true);
                const api = new ApiTelegram();
                const response = await api.sendMessage(sendMessage);
                const { data } = response;
                if( data.ok ) {
                    setAlert({
                        open: true,
                        severity: "success",
                        content: "Sua mensagem foi enviada. Dentro de 24hrs entro em contato.",
                    });
                    setSendMessage(INITIAL_SEND_MESSAGE);
                }
            }else {
                setAlert({
                    open: true,
                    severity: "warning",
                    content: "Nome, Whats e E-mail são obrigatótios!",
                });
            }
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    }

    return (
        <Grid container justify="center" style={{ background: "#0085E8", padding: "144px 64px 64px 64px" }} id="Footer">
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
                <Grid item className={classes.boxForm} xs={12} sm={12} md={6} lg={6} xl={6} style={{ marginBottom: "88px" }} id="Form" >
                    <Hidden only="xs">
                        <Box style={{ display: "flex", justifyContent: "center", maxWidth: "496px" }}>
                            <TextField  
                                label="Seu nome"
                                name="name"
                                required
                                variant="filled" 
                                fullWidth
                                value={sendMessage.name}
                                onChange={(event) => {
                                    setSendMessage( prevSendMessage => ({
                                        ...prevSendMessage,
                                        name: event.target.value,
                                    }));
                                }}
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
                            <ReactInputMask
                                mask="(99)9 9999-9999"
                                value={sendMessage.whats}
                                onChange={(event) => {
                                    setSendMessage( prevSendMessage => ({
                                        ...prevSendMessage,
                                        whats: event.target.value.replaceAll("_", ""),
                                    }));
                                }}
                                required
                            >
                                {(props) => 
                                    <TextField  
                                        { ...props }
                                        label="Seu whats" 
                                        variant="filled" 
                                        name="whats"
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
                                }
                            </ReactInputMask>
                        </Box>
                        <Box style={{ display: "flex", justifyContent: "center", maxWidth: "496px" }}>
                            <TextField  
                                label="Seu email" 
                                variant="filled" 
                                fullWidth
                                name="email"
                                required
                                value={sendMessage.email}
                                onChange={(event) => {
                                    setSendMessage( prevSendMessage => ({
                                        ...prevSendMessage,
                                        email: event.target.value,
                                    }))
                                }}
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
                                required
                                name="description"
                                value={sendMessage.description}
                                onChange={(event) => {
                                    setSendMessage( prevSendMessage => ({
                                        ...prevSendMessage,
                                        description: event.target.value,
                                    }))
                                }}
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
                            <ButtonLoading 
                                variant="contained" 
                                color="primary"
                                style={{ 
                                    width: "208px", 
                                    height: "64px", 
                                    borderRadius: "8px",
                                    background: "#002643",
                                }}
                                onClick={onFinish}
                                loading={loading}
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
                            </ButtonLoading>
                        </Box>
                    </Hidden>
                    <Hidden smUp>
                        <Box style={{ display: "flex", justifyContent: "center", maxWidth: "496px" }}>
                            <TextField  
                                label="Seu nome"
                                name="name"
                                required
                                variant="filled" 
                                fullWidth
                                value={sendMessage.name}
                                onChange={(event) => {
                                    setSendMessage( prevSendMessage => ({
                                        ...prevSendMessage,
                                        name: event.target.value,
                                    }));
                                }}
                                style={{ 
                                    margin: "8px 8px 8px 8px",
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
                            <ReactInputMask
                                mask="(99)9 9999-9999"
                                value={sendMessage.whats}
                                onChange={(event) => {
                                    setSendMessage( prevSendMessage => ({
                                        ...prevSendMessage,
                                        whats: event.target.value.replaceAll("_", ""),
                                    }));
                                }}
                                required
                            >
                                {(props) => 
                                    <TextField  
                                        { ...props }
                                        label="Seu whats" 
                                        variant="filled" 
                                        name="whats"
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
                                }
                            </ReactInputMask>
                        </Box>
                        <Box style={{ display: "flex", justifyContent: "center", maxWidth: "496px" }}>
                            <TextField  
                                label="Seu email" 
                                variant="filled" 
                                fullWidth
                                name="email"
                                required
                                value={sendMessage.email}
                                onChange={(event) => {
                                    setSendMessage( prevSendMessage => ({
                                        ...prevSendMessage,
                                        email: event.target.value,
                                    }))
                                }}
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
                                required
                                name="description"
                                value={sendMessage.description}
                                onChange={(event) => {
                                    setSendMessage( prevSendMessage => ({
                                        ...prevSendMessage,
                                        description: event.target.value,
                                    }))
                                }}
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
                        <Box style={{ display: "flex", justifyContent: "center", maxWidth: "496px" }}>
                            <ButtonLoading 
                                variant="contained" 
                                color="primary"
                                style={{ 
                                    width: "216px", 
                                    height: "48px", 
                                    borderRadius: "8px",
                                    background: "#002643",
                                }}
                                onClick={onFinish}
                                loading={loading}
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
                            </ButtonLoading>
                        </Box>
                    </Hidden>
                </Grid>
            </Grid>
            <Grid item>
                <Typography style={{ color: "#FFFFFF", textAlign: "center" }}>
                    Rodrigues Marketing Digital | CNPJ - 36.490.397/0001-94
                </Typography>
                <Typography style={{ color: "#FFFFFF", textAlign: "center" }}>
                    Desenvolvido por Patric Kenneth R Silva | <a className={classes.a} 
                                                                 rel="noreferrer" 
                                                                 target="_blank" 
                                                                 href="https://api.whatsapp.com/send?phone=5588988414531&text=Oi%2C%20quero%20solicitar%20um%20orçamento%20de%20landingpage" 
                                                                 >
                                                                    (88)9 8841-4531
                                                                </a> 
                </Typography>
            </Grid>
            { alert.open &&
                <SimpleAlert 
                    severity={alert.severity} 
                    content={alert.content}
                    open={alert.open}
                    setAlert={setAlert}
                />
            }
        </Grid>
    )
}

export default Footer;