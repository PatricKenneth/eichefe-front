import { Button, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import ContainerCustom from '../container';
import * as yup from 'yup';
import { useFormik } from 'formik';

const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
});

function FormSection(){
    const formik = useFormik({
        initialValues: {
          email: 'foobar@example.com',
          password: 'foobar',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <ContainerCustom>
            <Grid container padding="104px 0px">
                <Grid item xs={12} md={8}>
                    <form 
                        onSubmit={formik.handleSubmit} 
                        style={{ background: "#053050", padding: "80px 44px", borderRadius: "10px" }}
                    >
                        <div style={{ display: "flex" }}>
                            <div style={{ paddingRight: "16px", width:"40%" }}>
                                <TextField
                                    fullWidth
                                    id="email"
                                    name="email"
                                    label="Email"
                                    variant="standard"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                    style={{ marginBottom: "32px" }}
                                />
                                <TextField
                                    fullWidth
                                    id="password"
                                    name="password"
                                    label="Password"
                                    type="password"
                                    variant="standard"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                    helperText={formik.touched.password && formik.errors.password}
                                    style={{ marginBottom: "32px" }}
                                />
                                <TextField
                                    fullWidth
                                    id="password"
                                    name="password"
                                    label="Password"
                                    type="password"
                                    variant="standard"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                    helperText={formik.touched.password && formik.errors.password}
                                />
                            </div>
                            <div style={{ paddingLeft: "16px", width:"60%" }}>
                                <TextField
                                    fullWidth
                                    id="password"
                                    name="password"
                                    label="Password"
                                    type="password"
                                    multiline
                                    rows={8}
                                    variant="standard"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                    helperText={formik.touched.password && formik.errors.password}
                                />
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