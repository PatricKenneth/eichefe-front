import { Button, FormControl, FormLabel, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import ContainerCustom from '../container';
import * as yup from 'yup';
import { useFormik } from 'formik';
import ReactInputMask from 'react-input-mask';

const validationSchema = yup.object({
    name: yup.string().required('Seu nome é obrigatório'),
    email: yup.string().required('E-mail é obrigatório'),
    whatsapp: yup.string().required('Whatsapp é obrigatório')
});

function FormSection(){
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            whatsapp: '',
            message: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <ContainerCustom>
            <Grid container padding="104px 0px" marginBottom="88px">
                <Grid item xs={12} md={8}>
                    <form 
                        onSubmit={formik.handleSubmit} 
                        style={{ 
                            background: "#053050", 
                            padding: "80px 44px", 
                            borderRadius: "10px",
                            width: "82%"
                        }}
                    >
                        <div style={{ display: "flex" }}>
                            <div style={{ paddingRight: "16px", width:"40%" }}>
                                <FormControl style={{ marginBottom: "26px" }}>
                                    <FormLabel>
                                        <Typography variant="label">
                                            Seu nome:
                                        </Typography>
                                    </FormLabel>
                                    <TextField
                                        id="name"
                                        name="name"
                                        InputProps={{
                                            style: {
                                                color: "#C5C5C5"
                                            }
                                        }}
                                        variant="standard"
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        error={formik.touched.name && Boolean(formik.errors.name)}
                                        helperText={formik.touched.name && formik.errors.name}
                                    />
                                </FormControl>
                                <FormControl style={{ marginBottom: "26px" }}>
                                    <FormLabel>
                                        <Typography variant="label">
                                            E-mail:
                                        </Typography>
                                    </FormLabel>
                                    <TextField
                                        id="email"
                                        name="email"
                                        variant="standard"
                                        InputProps={{
                                            style: {
                                                color: "#C5C5C5"
                                            }
                                        }}
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        error={formik.touched.email && Boolean(formik.errors.email)}
                                        helperText={formik.touched.email && formik.errors.email}
                                    />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>
                                        <Typography variant="label">
                                            Whatsapp:
                                        </Typography>
                                    </FormLabel>
                                    <ReactInputMask
                                        mask="(99)9 9999 9999"
                                        onChange={formik.handleChange}
                                        value={formik.values.whatsapp}
                                    >
                                        {() => (
                                            <TextField
                                                id="whatsapp"
                                                name="whatsapp"
                                                variant="standard"
                                                InputProps={{
                                                    style: {
                                                        color: "#C5C5C5"
                                                    }
                                                }}
                                                error={formik.touched.whatsapp && Boolean(formik.errors.whatsapp)}
                                                helperText={formik.touched.whatsapp && formik.errors.whatsapp}
                                            />
                                        )}
                                    </ReactInputMask>
                                </FormControl>
                            </div>
                            <div style={{ paddingLeft: "16px", width:"60%" }}>
                                <FormControl fullWidth>
                                    <FormLabel>
                                        <Typography variant="label">
                                            Mensagem:
                                        </Typography>
                                    </FormLabel>
                                    <TextField
                                        id="message"
                                        name="message"
                                        multiline
                                        rows={8}
                                        variant="standard"
                                        InputProps={{
                                            style: {
                                                color: "#C5C5C5"
                                            }
                                        }}
                                        value={formik.values.message}
                                        onChange={formik.handleChange}
                                        error={formik.touched.message && Boolean(formik.errors.message)}
                                        helperText={formik.touched.message && formik.errors.message}
                                    />
                                </FormControl>
                            </div>
                        </div>
                    </form>
                </Grid>
                <Grid item xs={12} md={4} padding="62px 44px" bgcolor="#0085E8" borderRadius="10px">
                    <Typography variant="h6" fontSize="30px" lineHeight="36px" marginBottom="24px">
                        Vamos escalar suas vendas?
                    </Typography>
                    <Typography variant="h6" fontWeight={400} fontSize="14px" marginBottom="32px">
                        Se você chegou até aqui, falta pouco para mudar o jogo do seu negócio. 
                        Me chama no WhatsApp e agende uma consultoria gratuita.
                    </Typography>
                    <Button style={{ background: "#053050", padding: "8px 20px" }} onClick={formik.handleSubmit}>
                        <Typography variant="button" color="#F7F7F7">
                            Enviar mensagem
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
        </ContainerCustom>
    )
}

export default FormSection;