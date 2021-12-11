import React from "react";
import { Container, makeStyles } from "@material-ui/core";

const styles = makeStyles(( theme ) => ({
    config: {
        maxWidth: '1366px', 
        paddingLeft: '168px', 
        paddingRight: '168px',
        [theme.breakpoints.down('md')]: { 
            paddingLeft: '40px', 
            paddingRight: '40px',
        }
    }
}));

function ContainerCustom({ children }) {
    const configStyle = styles();
    return (
        <Container className={configStyle.config}>
            {children}
        </Container>
    )
}

export default ContainerCustom;